import pytest
from app.core.parser import MarkdownParser, DocumentChunk


def test_clean_heading_text():
    """
    Test that headings are cleaned of markdown links, bold markers, and extra whitespace.
    """
    parser = MarkdownParser()

    # Test case 1: Heading text with link (as extracted after hashes are stripped)
    raw_heading_1 = "[Our organisation](/about-ite/our-organisation/)"
    assert parser.clean_heading_text(raw_heading_1) == "Our organisation"

    # Test case 2: Heading text with bold markers
    raw_heading_2 = "**Important Financial Schemes**"
    assert parser.clean_heading_text(raw_heading_2) == "Important Financial Schemes"

    # Test case 3: Plain heading
    raw_heading_3 = "General Information"
    assert parser.clean_heading_text(raw_heading_3) == "General Information"


def test_is_navigation_line():
    """
    Test that breadcrumbs and metadata (navigation markers) are correctly identified.
    """
    parser = MarkdownParser()

    # Should be flagged as navigation (True)
    assert parser.is_navigation_line("1. [Home](/)") is True
    assert parser.is_navigation_line("2. About ITE") is True
    assert parser.is_navigation_line("Last updated 15 Jan 2026") is True
    assert parser.is_navigation_line("last updated 01 Feb 2025") is True

    # Should NOT be flagged as navigation (False)
    assert (
        parser.is_navigation_line("This is standard paragraph content about ITE.")
        is False
    )
    assert (
        parser.is_navigation_line("3. Financial assistance is awarded based on merit.")
        is False
    )


def test_split_text_into_chunks_small():
    """
    Test that text smaller than the chunk size is returned intact as a single chunk.
    """
    parser = MarkdownParser(chunk_size=100, chunk_overlap=10)
    text = "Short text."
    chunks = parser.split_text_into_chunks(text)
    assert len(chunks) == 1
    assert chunks[0] == text


def test_split_text_into_chunks_large():
    """
    Test that large text is split correctly on paragraphs or sentences with overlap.
    """
    # Small chunk size to force split
    parser = MarkdownParser(chunk_size=50, chunk_overlap=10)

    text = "This is paragraph one. It is short.\n\nThis is paragraph two. It is also short."
    chunks = parser.split_text_into_chunks(text)

    # Verify we got multiple chunks
    assert len(chunks) > 1
    # Check that chunks contain our content
    assert any("paragraph one" in chunk for chunk in chunks)
    assert any("paragraph two" in chunk for chunk in chunks)


def test_parse_file(tmp_path):
    """
    Test the full file parsing lifecycle by creating a temporary markdown file
    and passing it to the parser.
    """
    # Create temporary markdown file
    temp_md = tmp_path / "test_data.md"
    content = """## Document: http://example.com/financial-aid
**Source URL:** http://example.com/financial-aid

1. [Home](/)
2. Admissions

# Financial Assistance Schemes
This is the general intro text.

## Scheme A: CDC Voucher
This voucher is available to all low-income students.

----------------------------------------

## Document: http://example.com/admissions
**Source URL:** http://example.com/admissions

# Course Admissions
Admission criteria are based on GCE O-Level results.
"""
    temp_md.write_text(content, encoding="utf-8")

    parser = MarkdownParser(chunk_size=100, chunk_overlap=10)
    chunks = parser.parse_file(str(temp_md))

    # We expect chunks from both document sections (separated by dashes)
    assert len(chunks) >= 3

    # Verify metadata mapping
    first_chunk = chunks[0]
    assert isinstance(first_chunk, DocumentChunk)
    assert first_chunk.source_url == "http://example.com/financial-aid"
    assert first_chunk.heading == "Financial Assistance Schemes"
    assert "general intro text" in first_chunk.content

    # Verify second document mapping
    last_chunk = chunks[-1]
    assert last_chunk.source_url == "http://example.com/admissions"
    assert last_chunk.heading == "Course Admissions"
    assert "Admission criteria" in last_chunk.content
