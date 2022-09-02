import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '@constants/storageKeys/storageKeys';

const link = createHttpLink({
  uri: `${process.env.GITHUB_API_URL}/graphql`
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get(ACCESS_TOKEN);

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  };
});

const githubClient = new ApolloClient({
  link: authLink.concat(link) as any,
  cache: new InMemoryCache()
});

export default githubClient;
