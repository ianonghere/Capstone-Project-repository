from typing import List, Dict, Any
from app.core.embedder import get_embedding, get_chroma_collection

# Number of top results to retrieve from the vector store
TOP_K = 5


def retrieve(query: str, top_k: int = TOP_K) -> List[Dict[str, Any]]:
    """
    Performs a semantic similarity search against the ChromaDB knowledge base
    and returns the most relevant document chunks for the given query.

    Args:
        query (str): The incoming user query or ticket text to search for.
        top_k (int): The number of top results to return.

    Returns:
        List[Dict[str, Any]]: A list of result dictionaries, each containing:
            - "content" (str): The text of the matching chunk.
            - "source_url" (str): The URL of the original source page.
            - "heading" (str): The section heading the chunk belongs to.
            - "score" (float): The cosine distance score (lower = more similar).
    """
    collection = get_chroma_collection()

    if collection.count() == 0:
        raise RuntimeError(
            "The vector store is empty. "
            "Please run the embedder first: python -m app.core.embedder"
        )

    # Generate embedding for the query
    query_embedding = get_embedding(query)

    # Query the collection for the most similar chunks
    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=min(top_k, collection.count()),
        include=["documents", "metadatas", "distances"],
    )

    # Format and return results
    formatted_results = []
    documents = results.get("documents", [[]])[0]
    metadatas = results.get("metadatas", [[]])[0]
    distances = results.get("distances", [[]])[0]

    for doc, meta, dist in zip(documents, metadatas, distances):
        formatted_results.append(
            {
                "content": doc,
                "source_url": meta.get("source_url", "Unknown"),
                "heading": meta.get("heading", "General"),
                "score": round(dist, 4),
            }
        )

    return formatted_results


if __name__ == "__main__":
    # Quick test — run with: python -m app.core.retriever
    test_query = "What are the fees for a full-time nitec course?"
    print(f"Query: {test_query}\n")
    results = retrieve(test_query, top_k=3)
    for i, r in enumerate(results, 1):
        print(f"--- Result {i} (score: {r['score']}) ---")
        print(f"Heading  : {r['heading']}")
        print(f"Source   : {r['source_url']}")
        print(f"Content  : {r['content'][:300]}...")
        print()
