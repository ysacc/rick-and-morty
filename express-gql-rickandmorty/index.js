const express = require('express');
const axios = require('axios');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const PORT = 3001;

// Definir el esquema de GraphQL
const schema = buildSchema(`
  type Character {
    id: ID!
    name: String!
    status: String!
    species: String!
    gender: String!
    image: String!
  }

  type Query {
    characters(page: Int, name: String): [Character]
  }
`);

// Resolver para la consulta de personajes
const root = {
  characters: async ({ page = 1, name = '' }) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [];
    }
  },
};

// Configurar el endpoint GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Habilitar el editor de GraphQL en el navegador
}));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}/graphql`);
});
