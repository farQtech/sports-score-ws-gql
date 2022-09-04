import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { ApolloClient, InMemoryCache, HttpLink, from, split } from '@apollo/client';

import { onError } from '@apollo/client/link/error';
import { WebSocketLink} from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { ApolloProvider } from '@apollo/react-hooks';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

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

// ws link
// const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:4000/graphql',
//   options: {
//     reconnect: true
//   }
// });

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/graphql',
}));

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);


const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
},
  wsLink,
  link
);


const client = new ApolloClient({
  link: splitLink,
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
