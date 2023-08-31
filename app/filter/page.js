import React from 'react';
import Head from 'next/head';
import CharacterFilter from '../../components/CharacterFilter';
import "./style.css"
function FilterPage() {
  return (
    <div>
      <Head>
        <title>Character Filter</title>
      </Head>
      <h1 className='title'>Filtro de Personajes </h1>
      <CharacterFilter />
    </div>
  );
}

export default FilterPage;
