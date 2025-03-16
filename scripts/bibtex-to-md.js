// bibtex-to-md.js
const fs = require("fs");
const path = require("path");
const bibtexParse = require("bibtex-parser-js");

// Configuration
const BIBTEX_FILE = "publications/publications.bib"; // Your bibtex file
const OUTPUT_DIR = "publications"; // Output directory (Docusaurus blog folder)
const DATE_FORMAT = "YYYY-MM-DD"; // Format for Docusaurus date

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Track statistics
const stats = {
  created: 0,
  skipped: 0,
  overwritten: 0,
};

// Check if we should overwrite existing files
const OVERWRITE_EXISTING = process.argv.includes("--force");
console.log(
  `Overwrite mode: ${OVERWRITE_EXISTING ? "ON" : "OFF"} (use --force to enable overwriting)`,
);

// Read the BibTeX file
const bibtexContent = fs.readFileSync(BIBTEX_FILE, "utf8");
const bibtexEntries = bibtexParse.toJSON(bibtexContent);

// Process each BibTeX entry
bibtexEntries.forEach((entry) => {
  try {
    // Extract relevant fields
    const { entryType, citationKey, entryTags } = entry;

    // Clean and normalize fields
    const title = entryTags.TITLE
      ? entryTags.TITLE.replace(/\s+/g, " ").trim()
      : "Untitled";

    // Process authors with special handling for problematic BibTeX formatting
    let authors = ["Unknown"];
    if (entryTags.AUTHOR) {
      // First normalize the author string
      const authorStr = entryTags.AUTHOR.replace(/\s+/g, " ").trim();

      // Split by "and" (case insensitive and with optional spaces)
      authors = authorStr
        .split(/\s+and\s+/i)
        .map((author) => author.trim())
        .filter((author) => author.length > 0)
        .map((author) => formatAuthorName(author));
    }

    const year = entryTags.YEAR || new Date().getFullYear().toString();

    // Create a date for Docusaurus (required for blog posts)
    // Use month and day if available, otherwise default to January 1
    const month = entryTags.MONTH ? getMonthNumber(entryTags.MONTH) : "01";
    const day = entryTags.DAY || "01";
    const date = `${year}-${month}-${day}`;

    // Generate tags based on publication type and keywords
    const tags = [];
    if (entryType) tags.push(entryType.toLowerCase());
    if (entryTags.KEYWORDS) {
      const keywords = entryTags.KEYWORDS.split(",").map((k) =>
        k.trim().toLowerCase(),
      );
      tags.push(...keywords);
    }

    // Generate filename - use citationKey or sanitized title
    const filename = citationKey
      ? `${date}-${citationKey.toLowerCase()}.md`
      : `${date}-${sanitizeFilename(title)}.md`;

    // Create Markdown content
    const mdContent = `---
title: "${escapeQuotes(title)}"
authors: [${authors.map((a) => `"${escapeQuotes(a)}"`).join(", ")}]
tags: [${tags.map((t) => `"${escapeQuotes(t)}"`).join(", ")}]
date: ${date}
publication_type: "${entryType.toLowerCase()}"
${entryTags.JOURNAL ? `venue: "${escapeQuotes(entryTags.JOURNAL.replace(/\s+/g, " ").trim())}"` : ""}
${entryTags.BOOKTITLE ? `venue: "${escapeQuotes(entryTags.BOOKTITLE.replace(/\s+/g, " ").trim())}"` : ""}
${entryTags.DOI ? `doi: "${entryTags.DOI.trim()}"` : ""}
${entryTags.URL ? `url: "${entryTags.URL.trim()}"` : ""}
---

${entryTags.ABSTRACT ? `**Abstract:** ${entryTags.ABSTRACT}` : ""}

${entryTags.DOI ? `[Publisher Version](https://doi.org/${entryTags.DOI})` : ""}
${entryTags.URL ? `[View Paper](${entryTags.URL})` : ""}
`;

    // Check if file already exists
    const filePath = path.join(OUTPUT_DIR, filename);
    const fileExists = fs.existsSync(filePath);

    if (fileExists && !OVERWRITE_EXISTING) {
      console.log(`Skipped: ${filename} (already exists)`);
      stats.skipped++;
    } else {
      // Write to file
      fs.writeFileSync(filePath, mdContent);
      if (fileExists) {
        console.log(`Updated: ${filename}`);
        stats.overwritten++;
      } else {
        console.log(`Created: ${filename}`);
        stats.created++;
      }
    }
  } catch (error) {
    console.error(
      `Error processing entry ${entry.citationKey || "unknown"}: ${error.message}`,
    );
  }
});

console.log(`\nProcessed ${bibtexEntries.length} publications:`);
console.log(`- Created: ${stats.created}`);
console.log(`- Updated: ${stats.overwritten}`);
console.log(`- Skipped: ${stats.skipped}`);
console.log(
  `\nUse --force flag to overwrite existing files (e.g., node scripts/bibtex-to-md.js --force)`,
);

// Helper functions
function parseAuthors(authorString) {
  // First, normalize the string by replacing newlines and excessive spaces
  const normalized = authorString
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Then split by " and " to get individual authors
  return normalized
    .split(" and ")
    .map((author) => author.trim())
    .map((author) => formatAuthorName(author))
    .filter((author) => author.length > 0); // Remove empty entries
}

function formatAuthorName(author) {
  // Format author name properly and clean up whitespace
  const cleanAuthor = author.replace(/\s+/g, " ").trim();

  if (cleanAuthor.includes(",")) {
    // Last, First format
    const [last, first] = cleanAuthor.split(",").map((part) => part.trim());
    return `${first} ${last}`;
  }
  return cleanAuthor; // Assume already in First Last format
}

function getMonthNumber(month) {
  // Convert month to number (handle different formats)
  const months = {
    jan: "01",
    january: "01",
    1: "01",
    feb: "02",
    february: "02",
    2: "02",
    mar: "03",
    march: "03",
    3: "03",
    apr: "04",
    april: "04",
    4: "04",
    may: "05",
    5: "05",
    jun: "06",
    june: "06",
    6: "06",
    jul: "07",
    july: "07",
    7: "07",
    aug: "08",
    august: "08",
    8: "08",
    sep: "09",
    september: "09",
    9: "09",
    oct: "10",
    october: "10",
    10: "10",
    nov: "11",
    november: "11",
    11: "11",
    dec: "12",
    december: "12",
    12: "12",
  };

  // Try to match month string or number
  const key = String(month).toLowerCase();
  return months[key] || "01";
}

function sanitizeFilename(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 100);
}

function escapeQuotes(text) {
  return text.replace(/"/g, '\\"');
}
