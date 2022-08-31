import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { makeApi } from '../config';

const githubClient = new ApolloClient({
  uri: `${process.env.GITHUB_API_URL}`,
  cache: new InMemoryCache()
});

export default githubClient;
