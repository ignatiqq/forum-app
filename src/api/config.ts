import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
    uri: `${process.env.GRAPHQL_ENDPOINT_URL}`
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;