import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import fetch from 'unfetch';
import { getCookie } from '~/services/cookies';
import { GRAPHQL_SERVER_URL } from '~/config/uri';
import { TOKEN } from '~/actions/BusinessActionTypes';

export const APOLLO = 'apollo';
const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
  mutate: {
    fetchPolicy: 'no-cache',
  },
};
const error = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      // TODO: Should have a service to handle error cases
    });
  }

  if (networkError) console.error(`[Network error]: ${networkError}`);
});
const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  const token = getCookie(TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const httpLink = new HttpLink({
  uri: GRAPHQL_SERVER_URL,
  fetch,
});

const client = new ApolloClient({
  link: authLink.concat(error).concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions,
});
export default client;
