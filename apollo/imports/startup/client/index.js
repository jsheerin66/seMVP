import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, from } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from '../../ui/App';

/*
1)create a new meteor client connection
2)In a normal instance this would be a url when not connecting to graphql
like when conncting to a database like mongo or MySQL
*/
const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
});
// AppoLink -check the documentation
const authLink = new ApolloLink((operation, forward) => {
  const token = Accounts._storedLoginToken();
  operation.setContext(() => ({
    headers: {
      'Meteor-login-token': token
    }
  }));
  return forward(operation)
});
// create a cache
const cache = new InMemoryCache();

// create new apollo client
const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache
});

const ApolloApp = () => (
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>
)

// now our apollo client is connected to the apollo server and now they are talking to eachother
Meteor.startup(() => {
  render(
    <ApolloApp />,
    document.getElementById('app'))
});
