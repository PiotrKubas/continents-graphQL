import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
            console.log(`Graphql error ${message}`);
            return null;
        });
    }
});
const link = from([
    errorLink,
    new HttpLink({ uri: 'https://countries.trevorblades.com' }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

export default client;
