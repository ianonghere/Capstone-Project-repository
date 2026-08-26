from typing import List, Dict, Any, Optional
import re
import ollama
from app.core.retriever import retrieve


# Ollama LLM model to use for response generation
LLM_MODEL = "llama3.2"

# System prompt that grounds the LLM strictly to the retrieved context
SYSTEM_PROMPT = """You are an expert internal administrative assistant for ITE Singapore (Institute of Technical Education).
Your role is to help administrative staff draft accurate, professional responses to student and stakeholder inquiries.

STRICT RULES:
1. Answer ONLY based on the provided context from ITE's official documentation.
2. If the context does not contain enough information to answer the question, say so clearly — do NOT make up information.
3. Keep your response professional, concise, and empathetic in tone.
4. Refer to official policy names when citing facts (e.g. 'under the Monthly Financial Assistance Scheme'), but do NOT output raw developer-facing bracketed tags like '[Source X]' or '(Source X)' in the email body.
5. Whenever you instruct the user to visit a website, log in to a portal, or apply, you MUST explicitly include the actual source URL (e.g., 'https://www.ite.edu.sg/...') from the corresponding source context. Do not say things like 'visit the student portal' or 'go to the website' without providing the exact link.
6. Structure your response clearly with short paragraphs.
"""


def extract_name_from_sender(sender: Optional[str]) -> str:
    """
    Extracts a friendly name from a sender string.
    E.g. "John Doe <john@example.com>" -> "John Doe"
         "john@example.com" -> "Student"
    """
    if not sender:
        return "Student"

    # Match everything before the angle bracket or @ if it is a name
    match = re.match(r"^([^<@]+)", sender)
    if match:
        name = match.group(1).strip()
        # Clean quotes
        name = name.replace('"', "").replace("'", "")
        if name and "@" not in name:
            return name
    return "Student"


def build_rag_prompt(
    query: str,
    context_chunks: List[Dict[str, Any]],
    subject: Optional[str] = None,
    sender: Optional[str] = None,
) -> str:
    """
    Builds a RAG prompt by combining the retrieved context chunks with the user query.

    Args:
        query (str): The original user query or ticket text.
        context_chunks (List[Dict]): Retrieved document chunks from the vector store.
        subject (Optional[str]): Subject line of the incoming email.
        sender (Optional[str]): Sender name/email details.

    Returns:
        str: A fully formatted prompt string ready to be sent to the LLM.
    """
    context_block = ""
    for i, chunk in enumerate(context_chunks, 1):
        context_block += (
            f"[Source {i}]\n"
            f"Section: {chunk['heading']}\n"
            f"URL: {chunk['source_url']}\n"
            f"Content:\n{chunk['content']}\n\n"
        )

    recipient_name = extract_name_from_sender(sender)

    prompt = f"""You have been provided with the following relevant excerpts from ITE Singapore's official documentation:

--- CONTEXT START ---
{context_block.strip()}
--- CONTEXT END ---

Based ONLY on the context above, please draft a professional email response to the following incoming inquiry:

INCOMING EMAIL:
From: {sender or "Student/Stakeholder"}
Subject: {subject or "Inquiry"}
Body:
{query}

STRICT INSTRUCTIONS FOR YOUR OUTPUT FORMAT:
You MUST structure your response into two sections: [SUBJECT] and [BODY].
- In [SUBJECT], write a professional reply subject line (e.g. "RE: {subject or "Inquiry regarding ITE"}").
- In [BODY], write the email body draft. It MUST start with a personalized greeting addressing the sender: "Dear {recipient_name},". Do not include signatures at the end other than standard administrative placeholders. Make sure to explicitly include the corresponding URL links from the context when advising the user to apply, log in, or read further details.

Your output must follow this template exactly:
[SUBJECT]
<Reply Subject Line>
[BODY]
Dear {recipient_name},
<Reply Body Text>
"""
    return prompt


def generate_response(
    query: str,
    top_k: int = 5,
    subject: Optional[str] = None,
    sender: Optional[str] = None,
) -> Dict[str, Any]:
    """
    Full RAG pipeline: retrieves relevant context, builds a grounded prompt,
    calls the Ollama LLM, and returns the draft response with source citations.

    Args:
        query (str): The raw incoming ticket or email text.
        top_k (int): Number of context chunks to retrieve.
        subject (Optional[str]): Incoming email subject line.
        sender (Optional[str]): Incoming email sender.

    Returns:
        Dict[str, Any]: A dictionary containing:
            - "draft_subject" (str): Auto-generated reply subject line.
            - "draft_body" (str): The AI-generated email body draft.
            - "citations" (List[Dict]): Source citations used to ground the response.
            - "query" (str): The original query.
    """
    # Step 1: Retrieve relevant context (combining subject + query for better retrieval)
    search_query = f"{subject}\n{query}" if subject else query
    context_chunks = retrieve(search_query, top_k=top_k)

    # Step 2: Build the grounded RAG prompt
    prompt = build_rag_prompt(query, context_chunks, subject, sender)

    # Step 3: Call the Ollama LLM
    response = ollama.chat(
        model=LLM_MODEL,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt},
        ],
    )

    draft_text = response["message"]["content"].strip()

    # Step 4: Parse reply subject and reply body from LLM output
    subject_match = re.search(
        r"\[SUBJECT\]\s*(.*?)\s*\[BODY\]", draft_text, re.DOTALL | re.IGNORECASE
    )
    body_match = re.search(r"\[BODY\]\s*(.*)", draft_text, re.DOTALL | re.IGNORECASE)

    if subject_match:
        draft_subject = subject_match.group(1).strip()
    else:
        draft_subject = f"RE: {subject}" if subject else "RE: Inquiry regarding ITE"

    if body_match:
        draft_body = body_match.group(1).strip()
    else:
        # Fallback if markers were not returned correctly
        draft_body = draft_text
        draft_body = draft_body.replace("[SUBJECT]", "").replace("[BODY]", "").strip()

    # Strip any leaked raw source markers like [Source 1], (Source 1), or Source 1
    draft_body = re.sub(r"\[Source\s*\d+\]", "", draft_body, flags=re.IGNORECASE)
    draft_body = re.sub(r"\(Source\s*\d+\)", "", draft_body, flags=re.IGNORECASE)
    draft_body = re.sub(r"\bSource\s*\d+\b", "", draft_body, flags=re.IGNORECASE)
    # Clean up double newlines or spaces created by stripping
    draft_body = re.sub(r" +", " ", draft_body)
    draft_body = re.sub(r"\n{3,}", "\n\n", draft_body)
    draft_body = draft_body.strip()

    # Ensure draft_body starts with "Dear <Recipient>"
    recipient_name = extract_name_from_sender(sender)
    if not draft_body.lower().startswith("dear"):
        draft_body = f"Dear {recipient_name},\n\n{draft_body}"

    # Step 5: Format citations for the HITL review panel
    citations = [
        {
            "index": i + 1,
            "heading": chunk["heading"],
            "source_url": chunk["source_url"],
            "relevance_score": chunk["score"],
            "content": chunk["content"],
        }
        for i, chunk in enumerate(context_chunks)
    ]

    # Step 6: Calculate a RAG confidence score percentage based on vector similarity.
    # Relevance score represents cosine distance. Lower distance = higher similarity.
    # We use the best match (chunk 0) to represent the retrieval grounding confidence.
    best_score = context_chunks[0]["score"] if context_chunks else 1.0
    confidence = round((1.0 - best_score) * 100)
    # Clamp the confidence score to ensure it is always between 0 and 100
    confidence = max(0, min(100, confidence))

    return {
        "query": query,
        "draft_subject": draft_subject,
        "draft_body": draft_body,
        "citations": citations,
        "confidence": confidence,
    }


if __name__ == "__main__":
    # Quick test — run with: python -m app.core.orchestrator
    test_query = "What financial assistance schemes are available for NITEC students?"
    test_subject = "Financial assistance request"
    test_sender = "John Doe <john.doe@example.com>"

    print(
        f"From: {test_sender}\nSubject: {test_subject}\nQuery: {test_query}\n{'=' * 60}\n"
    )
    result = generate_response(
        query=test_query, subject=test_subject, sender=test_sender
    )
    print("DRAFT SUBJECT:")
    print(result["draft_subject"])
    print("\nDRAFT BODY:")
    print(result["draft_body"])
    print(f"\n{'=' * 60}\nCITATIONS:")
    for c in result["citations"]:
        print(
            f"  [{c['index']}] {c['heading']} — {c['source_url']} (score: {c['relevance_score']})"
        )
