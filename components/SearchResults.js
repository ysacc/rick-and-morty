import React from 'react';

function SearchResults({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  );
}

export default SearchResults;