import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './client/Home';


const App = () => {

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App
