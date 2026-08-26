import pytest
from unittest.mock import MagicMock, patch
from app.core.retriever import retrieve


@patch("app.core.retriever.get_chroma_collection")
@patch("app.core.retriever.get_embedding")
def test_retrieve_empty_collection_raises_error(
    mock_get_embedding, mock_get_collection
):
    """
    Test that retrieving from an empty ChromaDB collection raises a RuntimeError.
    """
    # Configure mock collection to return count = 0
    mock_collection = MagicMock()
    mock_collection.count.return_value = 0
    mock_get_collection.return_value = mock_collection

    # Configure mock embedding
    mock_get_embedding.return_value = [0.1, 0.2, 0.3]

    # Assert that retrieve raises RuntimeError
    with pytest.raises(RuntimeError) as exc_info:
        retrieve("Test query")

    assert "vector store is empty" in str(exc_info.value)


@patch("app.core.retriever.get_chroma_collection")
@patch("app.core.retriever.get_embedding")
def test_retrieve_success(mock_get_embedding, mock_get_collection):
    """
    Test that retrieve formats search results from ChromaDB correctly.
    """
    # Configure mock collection
    mock_collection = MagicMock()
    mock_collection.count.return_value = 1

    # Mock return values for collection.query
    mock_query_response = {
        "documents": [["This is a chunk of documentation about financial assistance."]],
        "metadatas": [
            [
                {
                    "source_url": "https://www.ite.edu.sg/financial-assistance",
                    "heading": "Financial Schemes",
                    "chunk_index": 0,
                }
            ]
        ],
        "distances": [[0.1234]],
    }
    mock_collection.query.return_value = mock_query_response
    mock_get_collection.return_value = mock_collection

    # Configure mock embedding
    mock_get_embedding.return_value = [0.1, 0.2, 0.3]

    # Run the retrieval logic
    results = retrieve("financial assistance", top_k=1)

    # Assertions
    assert len(results) == 1
    assert (
        results[0]["content"]
        == "This is a chunk of documentation about financial assistance."
    )
    assert results[0]["source_url"] == "https://www.ite.edu.sg/financial-assistance"
    assert results[0]["heading"] == "Financial Schemes"
    # Cosine distance score check (rounded to 4 decimal places)
    assert results[0]["score"] == 0.1234

    # Verify mock interactions
    mock_collection.query.assert_called_once_with(
        query_embeddings=[[0.1, 0.2, 0.3]],
        n_results=1,
        include=["documents", "metadatas", "distances"],
    )
