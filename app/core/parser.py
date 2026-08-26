import re
from typing import List, Dict, Any
from pydantic import BaseModel, Field


class DocumentChunk(BaseModel):
    """
    Represents a single semantically meaningful chunk of text extracted from
    an institutional document, along with metadata for citations.
    """

    content: str = Field(..., description="The textual content of the chunk")
    source_url: str = Field(..., description="The URL of the original source webpage")
    heading: str = Field(..., description="The nearest section heading for this text")
    chunk_index: int = Field(
        ..., description="The position of this chunk within the document"
    )


class MarkdownParser:
    """
    A robust parser that breaks a consolidated scraped Markdown knowledge base
    into logical, citation-aware DocumentChunks for vector database storage.
    """

    def __init__(self, chunk_size: int = 800, chunk_overlap: int = 100):
        """
        Initializes the parser with chunk size configurations.

        Args:
            chunk_size (int): Target maximum character length for each chunk.
            chunk_overlap (int): Target character overlap between consecutive chunks.
        """
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap

    def clean_heading_text(self, heading: str) -> str:
        """
        Removes markdown links and excess formatting from headings.
        E.g., "### [Our organisation](/about-ite/our-organisation/)" -> "Our organisation"
        """
        # Replace markdown links: [text](url) -> text
        cleaned = re.sub(r"\[(.*?)\]\(.*?\)", r"\1", heading)
        # Remove bold or italic markers
        cleaned = (
            cleaned.replace("**", "")
            .replace("*", "")
            .replace("__", "")
            .replace("_", "")
        )
        return cleaned.strip()

    def is_navigation_line(self, line: str) -> bool:
        """
        Identifies and filters out breadcrumbs or navigation links
        like "1. [Home](/)" or "2. About ITE" at the top of pages.
        """
        line_strip = line.strip()
        # Matches patterns like: 1. [Home](/)
        if re.match(r"^\d+\.\s+\[.*?\]\(.*?\)$", line_strip):
            return True
        # Matches plain breadcrumbs text: 2. About ITE
        if re.match(r"^\d+\.\s+[\w\s&]+$", line_strip):
            return True
        # Matches Last updated timestamps (meta, not semantic content)
        if re.match(r"^last\s+updated\s+\d+\s+\w+\s+\d{4}$", line_strip, re.IGNORECASE):
            return True
        return False

    def _force_split_large_text(self, text: str) -> List[str]:
        """
        Forces a fallback split on exceptionally large paragraphs/sentences (like tables)
        that could not be split by regular punctuation. Splits by lines first, and if
        that fails or still has large lines, splits strictly by character offset.
        """
        if len(text) <= self.chunk_size:
            return [text]

        chunks = []
        # Try to split by lines first (e.g. table rows or list items)
        lines = text.split("\n")
        current_lines = []
        current_len = 0

        for line in lines:
            line = line.strip()
            if not line:
                continue

            # If a single line is larger than chunk_size, split it by character slicing
            if len(line) > self.chunk_size:
                # Flush current lines first
                if current_lines:
                    chunks.append("\n".join(current_lines))
                    current_lines = []
                    current_len = 0

                # Split large line by character slices
                start = 0
                while start < len(line):
                    end = start + self.chunk_size
                    chunks.append(line[start:end])
                    start += self.chunk_size - self.chunk_overlap
                continue

            if current_len + len(line) > self.chunk_size:
                if current_lines:
                    chunks.append("\n".join(current_lines))
                current_lines = [line]
                current_len = len(line)
            else:
                current_lines.append(line)
                current_len += len(line) + 1  # +1 for newline

        if current_lines:
            chunks.append("\n".join(current_lines))

        return chunks

    def split_text_into_chunks(self, text: str) -> List[str]:
        """
        Splits a block of text into smaller chunks of approximately chunk_size,
        with chunk_overlap. Tries to split on paragraphs or sentences.
        """
        if len(text) <= self.chunk_size:
            return [text]

        chunks = []
        # Step 1: Split by paragraphs (double newlines)
        paragraphs = text.split("\n\n")
        current_chunk = []
        current_length = 0

        for para in paragraphs:
            para = para.strip()
            if not para:
                continue

            # If a single paragraph is too large, split it into sentences
            if len(para) > self.chunk_size:
                # Flush the current chunk first
                if current_chunk:
                    chunks.append("\n\n".join(current_chunk))
                    current_chunk = []
                    current_length = 0

                # Split the large paragraph into sentences
                sentences = re.split(r"(?<=[.!?])\s+", para)
                for sentence in sentences:
                    sentence = sentence.strip()
                    if not sentence:
                        continue

                    if len(sentence) > self.chunk_size:
                        # Flush current chunk first
                        if current_chunk:
                            chunks.append(" ".join(current_chunk))
                            current_chunk = []
                            current_length = 0
                        # Force split the large sentence
                        chunks.extend(self._force_split_large_text(sentence))
                    elif current_length + len(sentence) > self.chunk_size:
                        if current_chunk:
                            chunks.append(" ".join(current_chunk))
                        current_chunk = [sentence]
                        current_length = len(sentence)
                    else:
                        current_chunk.append(sentence)
                        current_length += len(sentence) + 1  # include space

                continue

            # Check if adding this paragraph exceeds our size limit
            if current_length + len(para) > self.chunk_size:
                # Flush current chunk
                if current_chunk:
                    chunks.append("\n\n".join(current_chunk))

                # Implement overlap: backtrack to include the last element if it helps continuity
                # (only if it fits within the overlap range)
                overlap_text = (
                    current_chunk[-1]
                    if current_chunk and len(current_chunk[-1]) <= self.chunk_overlap
                    else ""
                )

                if overlap_text:
                    current_chunk = [overlap_text, para]
                    current_length = len(overlap_text) + 2 + len(para)
                else:
                    current_chunk = [para]
                    current_length = len(para)
            else:
                current_chunk.append(para)
                current_length += len(para) + 2  # include double newline length

        # Flush the final chunk
        if current_chunk:
            chunks.append("\n\n".join(current_chunk))

        return chunks

    def parse_file(self, file_path: str) -> List[DocumentChunk]:
        """
        Reads a consolidated Markdown knowledge base and parses it into DocumentChunks.

        Args:
            file_path (str): Absolute path to the Markdown file.

        Returns:
            List[DocumentChunk]: List of parsed and chunked text segments.
        """
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Split consolidated file into separate scraped documents
        # Each document is separated by a line of dashes (e.g. ----------------------------------------)
        raw_documents = re.split(r"\n-+\n", content)
        all_chunks: List[DocumentChunk] = []

        for doc_raw in raw_documents:
            doc_raw = doc_raw.strip()
            if not doc_raw:
                continue

            # Extract source URL
            # Expecting format: ## Document: <URL> or **Source URL:** <URL>
            url_match = re.search(r"##\s+Document:\s*(https?://\S+)", doc_raw)
            if not url_match:
                url_match = re.search(r"\*\*Source URL:\*\*\s*(https?://\S+)", doc_raw)

            if not url_match:
                # If no URL is found, skip this document block as it lacks citation capacity
                continue

            source_url = url_match.group(1).strip()

            # Clean and process lines
            lines = doc_raw.split("\n")
            content_lines = []

            # Temporary store for sections grouped by heading
            # structure: { "Heading Name": ["paragraph 1", "paragraph 2", ...] }
            sections: Dict[str, List[str]] = {}
            current_heading = "General"

            # Skip the first few lines that are metadata (URL, Document header)
            for line in lines:
                line_strip = line.strip()
                if not line_strip:
                    continue

                # Skip metadata and breadcrumbs
                if (
                    line_strip.startswith("## Document:")
                    or line_strip.startswith("**Source URL:**")
                    or self.is_navigation_line(line)
                ):
                    continue

                # Check for heading lines
                heading_match = re.match(r"^(#+)\s*(.*)$", line_strip)
                if heading_match:
                    # If we had accumulated lines for the previous heading, save them
                    if content_lines:
                        sections.setdefault(current_heading, []).append(
                            "\n".join(content_lines)
                        )
                        content_lines = []

                    # Clean and set new heading
                    current_heading = self.clean_heading_text(heading_match.group(2))
                else:
                    content_lines.append(line)

            # Append the remaining accumulated lines for the final heading
            if content_lines:
                sections.setdefault(current_heading, []).append(
                    "\n".join(content_lines)
                )

            # Chunk the content grouped under each heading
            doc_chunk_idx = 0
            for heading, text_blocks in sections.items():
                combined_text = "\n\n".join(text_blocks).strip()
                if not combined_text:
                    continue

                # Generate chunks for this specific heading section
                sub_chunks = self.split_text_into_chunks(combined_text)

                for sub_chunk in sub_chunks:
                    all_chunks.append(
                        DocumentChunk(
                            content=sub_chunk.strip(),
                            source_url=source_url,
                            heading=heading,
                            chunk_index=doc_chunk_idx,
                        )
                    )
                    doc_chunk_idx += 1

        return all_chunks
