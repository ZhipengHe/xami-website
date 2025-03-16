import React, { useState, useEffect, useMemo } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { ReferenceStyle } from "./ReferenceFormatters";
import { BibEntry } from "./ReferenceList";
import ReferenceList from "./ReferenceList";
import * as bibtexParse from "@orcid/bibtex-parse-js";

interface BibTexFilterControlsProps {
  filePath: string;
  defaultStyle?: ReferenceStyle;
  defaultSortBy?: "year" | "author" | "title" | "date" | "citationKey";
  showCitationKeys?: boolean;
  className?: string;
  title?: string;
}

interface PaperTypeOption {
  id: string;
  label: string;
  entryTypes: string[];
}

const BibTexFilterControls: React.FC<BibTexFilterControlsProps> = ({
  filePath,
  defaultStyle = "apa",
  defaultSortBy = "year",
  showCitationKeys = false,
  className = "",
  title = "References",
}) => {
  const [style, setStyle] = useState<ReferenceStyle>(defaultStyle);
  const [entries, setEntries] = useState<BibEntry[]>([]);
  const [availableTypes, setAvailableTypes] = useState<PaperTypeOption[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [sortBy, setSortBy] = useState<
    "year" | "author" | "title" | "date" | "citationKey"
  >(defaultSortBy);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const styleOptions: { value: ReferenceStyle; label: string }[] = [
    { value: "apa", label: "APA Style" },
    { value: "mla", label: "MLA Style" },
    { value: "chicago", label: "Chicago Style" },
    { value: "ieee", label: "IEEE Style" },
    { value: "harvard", label: "Harvard Style" },
  ];

  const sortOptions: {
    value: "year" | "author" | "title" | "date" | "citationKey";
    label: string;
  }[] = [
    { value: "year", label: "Year" },
    { value: "author", label: "Author" },
    { value: "title", label: "Title" },
    { value: "date", label: "Date" },
    { value: "citationKey", label: "Citation Key" },
  ];

  const paperTypeDefinitions = useMemo<PaperTypeOption[]>(
    () => [
      // Paper type definitions remain the same
      { id: "article", label: "Journal Articles", entryTypes: ["article"] },
      {
        id: "conference",
        label: "Conference Papers",
        entryTypes: ["inproceedings", "conference"],
      },
      {
        id: "thesis",
        label: "Theses",
        entryTypes: ["phdthesis", "mastersthesis"],
      },
      { id: "misc", label: "Miscellaneous", entryTypes: ["misc"] },
    ],
    [],
  ); // Empty dependency array

  useEffect(() => {
    const fetchBibTexFile = async () => {
      try {
        setLoading(true);
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`Failed to load BibTeX file: ${response.statusText}`);
        }

        const bibContent = await response.text();
        const parsedEntries = bibtexParse.toJSON(bibContent);

        setEntries(parsedEntries);

        const presentTypes = paperTypeDefinitions.filter((type) =>
          parsedEntries.some((entry) =>
            type.entryTypes.includes(entry.entryType.toLowerCase()),
          ),
        );

        setAvailableTypes(presentTypes);
        setSelectedTypes(presentTypes.map((type) => type.id));
        setLoading(false);
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Unknown error occurred");
        setError(error);
        setLoading(false);
      }
    };

    fetchBibTexFile();
  }, [filePath, paperTypeDefinitions]);

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStyle(e.target.value as ReferenceStyle);
  };

  const handleTypeChange = (typeId: string) => {
    setSelectedTypes((prev) => {
      if (prev.includes(typeId)) {
        return prev.filter((id) => id !== typeId);
      } else {
        return [...prev, typeId];
      }
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(
      e.target.value as "year" | "author" | "title" | "date" | "citationKey",
    );
  };

  const handleSortDirectionChange = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Create a filter function for ReferenceList
  const entryFilter = (entry: BibEntry) => {
    if (selectedTypes.length === 0) return false;

    const selectedEntryTypes = availableTypes
      .filter((type) => selectedTypes.includes(type.id))
      .flatMap((type) => type.entryTypes);

    return selectedEntryTypes.includes(entry.entryType.toLowerCase());
  };

  const FilterControlsContent = () => {
    if (loading) {
      return <div className="bibtex-loading">Loading references...</div>;
    }

    if (error) {
      return (
        <div className="bibtex-error">
          Error loading references: {error.message}
        </div>
      );
    }

    return (
      <div className={`bibtex-filter-controls ${className}`}>
        {/* Controls section */}
        <div className="bibtex-controls">
          <div className="citation-style-selector">
            <label htmlFor="citation-style">Citation Style:</label>
            <select
              id="citation-style"
              value={style}
              onChange={handleStyleChange}
              className="citation-style-select"
            >
              {styleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="sort-selector">
            <label htmlFor="sort-by">Sort by:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={handleSortChange}
              className="sort-select"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <button
              onClick={handleSortDirectionChange}
              className="sort-direction-button"
              title={sortDirection === "asc" ? "Ascending" : "Descending"}
            >
              {sortDirection === "asc" ? "↑" : "↓"}
            </button>
          </div>

          <div className="paper-type-filters">
            <div className="paper-type-label">Filter by Type:</div>
            <div className="paper-type-checkboxes">
              {availableTypes.map((type) => (
                <div key={type.id} className="paper-type-checkbox-item">
                  <input
                    type="checkbox"
                    id={`type-${type.id}`}
                    checked={selectedTypes.includes(type.id)}
                    onChange={() => handleTypeChange(type.id)}
                  />
                  <label htmlFor={`type-${type.id}`}>{type.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* References section using ReferenceList component */}
        <div className="bibtex-filtered-references">
          {title && <h2 className="bibtex-references-title">{title}</h2>}
          <ReferenceList
            entries={entries}
            style={style}
            showCitationKeys={showCitationKeys}
            filter={entryFilter}
            sortBy={sortBy}
            sortDirection={sortDirection}
            className="filtered-reference-list"
          />
        </div>
      </div>
    );
  };

  return <BrowserOnly>{() => <FilterControlsContent />}</BrowserOnly>;
};

export default BibTexFilterControls;
