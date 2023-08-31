import React from 'react';
import Head from 'next/head';
import CharacterFilter from '../../components/CharacterFilter';

function FilterPage() {
  return (
    <div>
      <Head>
        <title>Character Filter</title>
      </Head>
      <h1>Filtro de Personajes </h1>
      <CharacterFilter />
    </div>
  );
}

export default FilterPage;
