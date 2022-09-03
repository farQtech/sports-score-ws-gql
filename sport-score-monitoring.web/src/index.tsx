import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, from } from '@apollo/client';

import { onError } from '@apollo/client/link/error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(message)
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
