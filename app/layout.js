import SearchAppBar from '@/components/SearchBar/SearchAppBar'
import {Comic_Neue }from 'next/font/google'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

import "./globals.css"
export const metadata = {
  title: 'Rick and Morty - Home',
  description: 'Save Rick and Morty',
}
const Comic = Comic_Neue({
  weight: ["300","400","700"],
  styles:["italic","normal"],
  subsets:["latin"],
})
 
const client = new ApolloClient({
  uri: 'http://localhost:3001/rick-morty/graphql', // Cambia esta URL para que coincida con la ubicación de tu servidor GraphQL
  cache: new InMemoryCache(),
});
export default function RootLayout({ children }) {
 return (
    <html  lang="en">
      <body className={Comic.className}>
        {/* <SearchAppBar/> */}
        {children}
        </body>
    </html>
  )
}
