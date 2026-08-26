import os
import requests
import pytest
from unittest.mock import patch
from fastapi.testclient import TestClient
from app.main import app
from app.core.embedder import get_chroma_collection
from app.core.audit import get_audit_entry

client = TestClient(app)


def check_ollama_status():
    """
    Helper function to check if the local Ollama service is running
    and has the required LLM and embedding models pulled.
    """
    try:
        response = requests.get("http://localhost:11434/api/tags", timeout=2)
        if response.status_code == 200:
            models = [m["name"] for m in response.json().get("models", [])]
            # Check if models are available (either name directly or name:latest)
            has_llm = any("llama3.2" in name for name in models)
            has_embed = any("nomic-embed-text" in name for name in models)
            return has_llm, has_embed
    except Exception:
        pass
    return False, False


# Run pre-check
has_llm, has_embed = check_ollama_status()
ollama_available = has_llm and has_embed

# Define skip decorator based on Ollama status
require_live_ollama = pytest.mark.skipif(
    not ollama_available,
    reason=(
        "Ollama server is offline or missing required models (llama3.2, nomic-embed-text). "
        "Make sure Ollama is running and run 'ollama pull llama3.2' and 'ollama pull nomic-embed-text'."
    ),
)


@pytest.fixture(autouse=True)
def setup_test_database(tmp_path):
    """
    Overrides the SQLite database location to a temporary path during the test
    to keep integration test entries isolated from the production db.
    """
    test_db_file = tmp_path / "test_integration_audit.db"
    with patch("app.core.audit.DB_PATH", str(test_db_file)):
        yield
        if test_db_file.exists():
            try:
                os.remove(test_db_file)
            except PermissionError:
                pass


@require_live_ollama
def test_e2e_rag_generation_and_audit():
    """
    End-to-End Live Integration Test:
    1. Checks if ChromaDB is populated.
    2. Sends a real question to the /query/ endpoint.
    3. Verifies that Ollama creates a response with citations.
    4. Validates that the transaction logs successfully into our test SQLite database.
    """
    # 1. Verify ChromaDB contains document chunks
    try:
        collection = get_chroma_collection()
        count = collection.count()
    except Exception as e:
        pytest.fail(f"Could not connect to ChromaDB: {e}")

    if count == 0:
        pytest.fail(
            "ChromaDB collection is empty! Please populate the database "
            "before running integration tests: python -m app.core.embedder"
        )

    # 2. Query the FastAPI Application with structured email data
    test_query = "What financial assistance schemes are available for NITEC students?"
    test_subject = "Help with financial schemes"
    test_sender = "John Doe <john.doe@example.com>"

    payload = {
        "body": test_query,
        "subject": test_subject,
        "sender": test_sender,
        "top_k": 3,
    }

    print(f"\nSending live query: '{test_query}'...")
    response = client.post("/api/v1/query/", json=payload)

    assert response.status_code == 200, (
        f"Query failed with status: {response.status_code}, response: {response.text}"
    )
    data = response.json()

    # 3. Assert Response Fields
    assert "session_id" in data
    assert "draft_body" in data
    assert len(data["draft_body"]) > 0
    assert "draft_subject" in data
    assert "citations" in data
    assert len(data["citations"]) > 0

    print("\nGenerated Draft Response:\n" + "-" * 50)
    print(f"Subject: {data['draft_subject']}")
    print(f"Body:\n{data['draft_body']}")
    print("-" * 50)

    # Verify citations structure
    for citation in data["citations"]:
        assert "heading" in citation
        assert "source_url" in citation
        assert "relevance_score" in citation
        print(
            f" Citation: [{citation['index']}] {citation['heading']} -> {citation['source_url']}"
        )

    # 4. Check SQLite Logs
    session_id = data["session_id"]
    db_entry = get_audit_entry(session_id)

    assert db_entry is not None, "Audit entry was not logged to the SQLite database"
    assert db_entry["session_id"] == session_id
    assert db_entry["query"] == test_query
    assert db_entry["generated_draft"] == data["draft_body"]
    assert db_entry["subject"] == test_subject
    assert db_entry["sender"] == test_sender
    assert db_entry["draft_subject"] == data["draft_subject"]
    assert db_entry["status"] == "generated"
    print("\nSuccessfully verified SQLite log entry matches the session.")
