import uuid
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field, model_validator
from typing import List, Optional
from app.core.orchestrator import generate_response
from app.core.audit import AuditLogCreate, create_audit_entry

router = APIRouter()


# --- Request / Response Schemas ---


class QueryRequest(BaseModel):
    """Schema for an incoming admin query, ticket, or structured email."""

    text: Optional[str] = Field(
        default=None,
        min_length=10,
        description="The raw text of the inquiry (legacy field).",
        examples=["What financial assistance is available for NITEC students?"],
    )
    body: Optional[str] = Field(
        default=None,
        min_length=10,
        description="The main text body of the incoming email.",
    )
    subject: Optional[str] = Field(
        default=None, description="The subject line of the incoming email."
    )
    sender: Optional[str] = Field(
        default=None,
        description="The email sender (e.g., 'John Doe <john.doe@example.com>').",
    )
    top_k: int = Field(
        default=5,
        ge=1,
        le=10,
        description="Number of knowledge base chunks to retrieve for context.",
    )
    session_id: Optional[str] = Field(
        default=None,
        description="Optional unique session identifier to link generation. Auto-generated if not provided.",
    )
    channel: Optional[str] = Field(
        default="portal", description="The communication channel: email, portal"
    )

    @model_validator(mode="after")
    def validate_inquiry_present(self) -> "QueryRequest":
        if not self.body and not self.text:
            raise ValueError("Either 'body' or 'text' must be provided.")
        # Populate body for backward compatibility if only text was sent
        if not self.body:
            self.body = self.text
        # Populate text if only body was sent
        if not self.text:
            self.text = self.body
        return self


class Citation(BaseModel):
    """A single source citation used to ground the AI response."""

    index: int
    heading: str
    source_url: str
    relevance_score: float
    content: str


class QueryResponse(BaseModel):
    """Schema for the AI-generated draft response returned to the admin."""

    session_id: str
    query: str  # Legacy compatibility field
    query_body: str
    query_subject: Optional[str]
    query_sender: Optional[str]
    draft_subject: Optional[str]  # Auto-generated reply subject
    draft: str  # Legacy compatibility field
    draft_body: str  # The generated email body reply
    citations: List[Citation]
    confidence: int  # The computed RAG confidence score percentage
    pre_approved: bool  # Flag indicating if the draft was automatically pre-approved


# --- Endpoint ---


@router.post(
    "/",
    response_model=QueryResponse,
    summary="Generate AI Draft Response",
    description=(
        "Accepts an incoming administrative inquiry or structured email, "
        "retrieves relevant context from the ITE knowledge base, and generates "
        "a professional reply subject and body using a local LLM."
    ),
    tags=["copilot"],
)
async def generate_draft(request: QueryRequest):
    """
    Full RAG pipeline endpoint for emails:
    1. Combines subject and body to run a semantic search in ChromaDB.
    2. Calls llama3.2 to draft a professional response addressing the sender.
    3. Saves session details, original subject/body/sender, and draft to SQLite.
    4. Returns structured email draft + source citations.
    """
    try:
        # Determine or generate the tracking session ID
        session_id = request.session_id or str(uuid.uuid4())

        # Retrieve and generate draft response
        result = generate_response(
            query=request.body,
            top_k=request.top_k,
            subject=request.subject,
            sender=request.sender,
        )

        confidence = result["confidence"]
        pre_approved = confidence >= 60

        # Log draft details to local database
        create_audit_entry(
            AuditLogCreate(
                session_id=session_id,
                query=request.body,
                generated_draft=result["draft_body"],
                subject=request.subject,
                sender=request.sender,
                draft_subject=result["draft_subject"],
                confidence=confidence,
                pre_approved=pre_approved,
                channel=request.channel or "portal",
            )
        )

        # Build response schema
        return QueryResponse(
            session_id=session_id,
            query=request.body,
            query_body=request.body,
            query_subject=request.subject,
            query_sender=request.sender,
            draft_subject=result["draft_subject"],
            draft=result["draft_body"],
            draft_body=result["draft_body"],
            citations=result["citations"],
            confidence=confidence,
            pre_approved=pre_approved,
        )
    except RuntimeError as e:
        # Vector store not built yet
        raise HTTPException(status_code=503, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Generation failed: {str(e)}")
