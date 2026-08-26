import os
import uuid
import pytest
from unittest.mock import patch, MagicMock
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


@pytest.fixture(autouse=True)
def setup_test_database(tmp_path):
    """
    Fixture that automatically overrides the database path to a temporary file
    for every test, ensuring a clean state and preventing production database pollution.
    """
    test_db_file = tmp_path / "test_audit_log.db"

    # Patch the DB_PATH variable in the audit module
    with patch("app.core.audit.DB_PATH", str(test_db_file)):
        yield
        # Clean up database file if it was created
        if test_db_file.exists():
            try:
                os.remove(test_db_file)
            except PermissionError:
                pass


def test_health_endpoint():
    """
    Test the API system health route.
    """
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "app_name" in data


@patch("app.api.v1.endpoints.query.generate_response")
def test_query_endpoint_success(mock_generate):
    """
    Test the Query endpoint with a mocked response generator.
    """
    # Configure mock RAG results with the new structured format
    mock_generate.return_value = {
        "query": "What are the rules for CDC voucher?",
        "draft_subject": "RE: CDC Voucher Questions",
        "draft_body": "Here is the response based on guidelines...",
        "citations": [
            {
                "index": 1,
                "heading": "CDC Voucher Guide",
                "source_url": "http://example.com/cdc",
                "relevance_score": 0.05,
                "content": "CDC Voucher guidelines content for test query.",
            }
        ],
        "confidence": 95,
    }

    payload = {
        "body": "What are the rules for CDC voucher?",
        "subject": "CDC Voucher Questions",
        "sender": "John Doe <john@example.com>",
        "top_k": 3,
        "session_id": "test-session-id",
    }

    response = client.post("/api/v1/query/", json=payload)
    assert response.status_code == 200, f"Failed: {response.text}"
    data = response.json()

    assert data["session_id"] == "test-session-id"
    assert data["query_body"] == payload["body"]
    assert data["query_subject"] == payload["subject"]
    assert data["query_sender"] == payload["sender"]
    assert data["draft_subject"] == "RE: CDC Voucher Questions"
    assert "Here is the response" in data["draft_body"]
    assert len(data["citations"]) == 1
    assert data["citations"][0]["heading"] == "CDC Voucher Guide"
    assert data["confidence"] == 95
    assert data["pre_approved"] is True


def test_audit_log_endpoints_lifecycle():
    """
    Test the complete creation, retrieval, listing, and modification lifecycle of audit log entries.
    """
    session_id = str(uuid.uuid4())

    # 1. Create entry with email fields
    create_payload = {
        "session_id": session_id,
        "query": "How do I register for part-time diplomas?",
        "generated_draft": "Please register by logging into the admissions portal.",
        "subject": "Part-Time Diploma Registration",
        "sender": "Alice Smith <alice@example.com>",
        "draft_subject": "RE: Part-Time Diploma Registration",
    }
    response = client.post("/api/v1/audit/", json=create_payload)
    assert response.status_code == 200, f"Failed: {response.text}"
    data = response.json()
    assert data["session_id"] == session_id
    assert data["query"] == create_payload["query"]
    assert data["subject"] == create_payload["subject"]
    assert data["sender"] == create_payload["sender"]
    assert data["draft_subject"] == create_payload["draft_subject"]
    assert data["status"] == "generated"

    # 2. Retrieve entry
    response = client.get(f"/api/v1/audit/{session_id}")
    assert response.status_code == 200
    data = response.json()
    assert data["session_id"] == session_id
    assert data["generated_draft"] == create_payload["generated_draft"]
    assert data["subject"] == create_payload["subject"]
    assert data["sender"] == create_payload["sender"]

    # 3. Update entry (simulate admin approvals & scoring)
    update_payload = {
        "edited_response": "Please register by logging into the portal before July 31st.",
        "status": "approved",
        "feedback_score": 1,
        "feedback_comments": "Clear response template",
    }
    response = client.put(f"/api/v1/audit/{session_id}", json=update_payload)
    assert response.status_code == 200
    data = response.json()
    assert data["session_id"] == session_id
    assert data["edited_response"] == update_payload["edited_response"]
    assert data["status"] == "approved"
    assert data["feedback_score"] == 1

    # 4. List logs (check presence of our session)
    response = client.get("/api/v1/audit/")
    assert response.status_code == 200
    logs = response.json()
    assert len(logs) >= 1

    session_ids = [log["session_id"] for log in logs]
    assert session_id in session_ids
