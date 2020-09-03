import React from 'react';
import './App.css';
import { Users, UserForm } from './components';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <UserForm />
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
