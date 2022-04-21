import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql',
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(
  initialState = {}
): ApolloClient<NormalizedCacheObject> {
  let res: ApolloClient<NormalizedCacheObject>;
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  if (typeof window === 'undefined') {
    res = apolloClientGlobal;
  } else {
    apolloClient = apolloClient ?? apolloClientGlobal;
    res = apolloClient;
  }

  return res;
}

export function useApollo(
  initialState = {}
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
