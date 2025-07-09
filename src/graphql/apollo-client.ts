import { useMemo } from 'react';

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { AuthLink } from './auth';
import { ErrorLink } from './error';

let apolloClient: ApolloClient<NormalizedCacheObject>;

// eslint-disable-next-line react-hooks/rules-of-hooks
const publicUri = process.env.NEXT_PUBLIC_API_URI;
const uri = `${publicUri}/graphql`;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      ErrorLink as unknown as ApolloLink,
      AuthLink as unknown as ApolloLink,
      new HttpLink({ uri }),
    ]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({
      ...(typeof existingCache === 'object' && existingCache
        ? existingCache
        : {}),
      ...(typeof initialState === 'object' && initialState ? initialState : {}),
    });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo() {
  const store = useMemo(() => initializeApollo(), []);

  return store;
}
