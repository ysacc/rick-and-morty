"use client"
import React, { useState, useEffect } from 'react';

function CharacterFilter() {
  const [genderFilter, setGenderFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameFilter}&gender=${genderFilter}&species=${speciesFilter}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='box'>
      <div className="filters">
        <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="">Género</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="genderless">Sin género</option>
          <option value="unknown">Desconocido</option>
        </select>
        <select value={speciesFilter} onChange={(e) => setSpeciesFilter(e.target.value)}>
          <option value="">Especie</option>
          <option value="human">Humano</option>
          <option value="alien">Alien</option>
        </select>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Nombre"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <button onClick={handleSearchSubmit}>Buscar</button>
      </div>
      <div className="result">
        {searchResults.map((result) => (
          <div key={result.id}>
            <img src={result.image} alt={result.name} />
            <h1>Nombre: {result.name}</h1>
            <p>Género: {result.gender}</p>
            <p>Especie: {result.species}</p>
            <p>Estado: {result.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterFilter;
