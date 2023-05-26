import React from "react";
import WebSearchItem from "./WebSearchItem";

const WebSearchResults = ({ results }) => {
  return (
    <div className="max-w-5xl mx-auto px-3 pb-2 ">
      <p className="text-gray-600 text-sm mb-5 mt-3 ">
        About {results?.searchInformation?.formattedTotalResults} results(
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results?.items?.map((result) => (
        <WebSearchItem key={result?.title} result={result} />
      ))}
    </div>
  );
};

export default WebSearchResults;
