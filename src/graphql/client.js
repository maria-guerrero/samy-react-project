import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://sandbox-api-test.samyroad.com/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
