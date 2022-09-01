import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { REFRESH_TOKEN } from '@constants/storageKeys/storageKeys';

const link = createHttpLink({
  uri: `${process.env.GITHUB_API_URL}/graphql`,
  credentials: 'include'
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get(REFRESH_TOKEN);

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const githubClient = new ApolloClient({
  uri: authLink.concat(link) as any,
  cache: new InMemoryCache()
});

export default githubClient;
