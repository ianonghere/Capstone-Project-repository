import os
import chromadb
import ollama
from typing import List
from app.core.parser import MarkdownParser, DocumentChunk

# --- Configuration ---
# Path to the ChromaDB persistent storage directory
CHROMA_DB_PATH = os.path.join(
    os.path.dirname(__file__), "..", "..", "data", "chroma_db"
)
# Name of the ChromaDB collection that stores our ITE knowledge base
COLLECTION_NAME = "ite_knowledge_base"
# Ollama embedding model to use
EMBEDDING_MODEL = "nomic-embed-text"
# Path to the scraped markdown knowledge base
KNOWLEDGE_BASE_PATH = os.path.join(
    os.path.dirname(__file__), "..", "..", "data", "ite_chatbot_data.md"
)


def get_embedding(text: str) -> List[float]:
    """
    Generates a vector embedding for a given text string using Ollama.

    Args:
        text (str): The text to embed.

    Returns:
        List[float]: A list of floats representing the embedding vector.
    """
    response = ollama.embeddings(model=EMBEDDING_MODEL, prompt=text)
    return response["embedding"]


# Global singleton client to cache the connection.
# Creating a PersistentClient opens sqlite files behind the scenes.
# Reusing the client avoids database locks and redundant filesystem descriptors.
_chroma_client = None


def get_chroma_client() -> chromadb.PersistentClient:
    """
    Retrieves or instantiates the global ChromaDB client.
    Guarantees a single persistent connection is shared across all modules.
    """
    global _chroma_client
    if _chroma_client is None:
        _chroma_client = chromadb.PersistentClient(path=CHROMA_DB_PATH)
    return _chroma_client


def get_chroma_collection() -> chromadb.Collection:
    """
    Initializes and returns the persistent ChromaDB collection.
    Creates the collection if it doesn't already exist.

    Returns:
        chromadb.Collection: The ChromaDB collection object.
    """
    # Reuse the cached singleton client to avoid multiple locks
    client = get_chroma_client()
    collection = client.get_or_create_collection(
        name=COLLECTION_NAME,
        metadata={"hnsw:space": "cosine"},  # Use cosine similarity for semantic search
    )
    return collection


def build_vector_store(force_rebuild: bool = False) -> chromadb.Collection:
    """
    Parses the markdown knowledge base, generates embeddings for each chunk,
    and stores them in ChromaDB. Skips rebuilding if data already exists,
    unless force_rebuild is True.

    Args:
        force_rebuild (bool): If True, deletes and recreates the collection.

    Returns:
        chromadb.Collection: The populated ChromaDB collection.
    """
    # Reuse the cached singleton client
    client = get_chroma_client()

    if force_rebuild:
        print("Force rebuild requested. Deleting existing collection...")
        try:
            client.delete_collection(COLLECTION_NAME)
        except Exception:
            pass  # Collection may not exist yet

    collection = client.get_or_create_collection(
        name=COLLECTION_NAME, metadata={"hnsw:space": "cosine"}
    )

    # If the collection already has data, skip embedding
    if collection.count() > 0 and not force_rebuild:
        print(
            f"Vector store already populated ({collection.count()} chunks). Skipping rebuild."
        )
        return collection

    print(f"Parsing knowledge base from: {KNOWLEDGE_BASE_PATH}")
    parser = MarkdownParser(chunk_size=800, chunk_overlap=100)
    chunks: List[DocumentChunk] = parser.parse_file(KNOWLEDGE_BASE_PATH)
    print(f"Parsed {len(chunks)} chunks. Starting embedding process...")

    # Process in batches to avoid memory spikes
    BATCH_SIZE = 50
    for batch_start in range(0, len(chunks), BATCH_SIZE):
        batch = chunks[batch_start : batch_start + BATCH_SIZE]

        ids = []
        embeddings = []
        documents = []
        metadatas = []

        for i, chunk in enumerate(batch):
            global_idx = batch_start + i
            chunk_id = f"chunk_{global_idx}"

            # Generate embedding via Ollama
            embedding = get_embedding(chunk.content)

            ids.append(chunk_id)
            embeddings.append(embedding)
            documents.append(chunk.content)
            metadatas.append(
                {
                    "source_url": chunk.source_url,
                    "heading": chunk.heading,
                    "chunk_index": chunk.chunk_index,
                }
            )

        collection.add(
            ids=ids, embeddings=embeddings, documents=documents, metadatas=metadatas
        )
        print(
            f"  Embedded chunks {batch_start + 1} to {batch_start + len(batch)} / {len(chunks)}"
        )

    print(f"Vector store build complete. Total chunks stored: {collection.count()}")
    return collection


if __name__ == "__main__":
    # Run this file directly to build the vector store:
    # python -m app.core.embedder
    build_vector_store(force_rebuild=True)
