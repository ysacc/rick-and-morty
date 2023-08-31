import React from 'react';

function SearchResults({ results }) {
  return (
    <div className='results' >
        <h1 className='title'>Results</h1>
      {results.map((result) => (
        <div key={result.id}>
        <p >NAME:{result.name}</p>
        <img src={result.image}/>
        <p>STATUS :{result.status}</p>
        <p>SPECIES :{result.species}</p>
        <p>GENDER :{result.gender}</p>
        </div>
      ))};
    </div>
  );
}

export default SearchResults;