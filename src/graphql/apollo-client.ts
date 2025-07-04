import { useMemo } from "react";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

import { AuthLink } from "./auth";
import { ErrorLink } from "./error";

let apolloClient: ApolloClient<NormalizedCacheObject>;

// eslint-disable-next-line react-hooks/rules-of-hooks
const publicUri = process.env.NEXT_PUBLIC_API_URI;
const uri = `${publicUri}/graphql`;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: ApolloLink.from([
      ErrorLink as unknown as ApolloLink,
      AuthLink as unknown as ApolloLink,
      new HttpLink({ uri }),
      // split(
      //   ({ query }) => {
      //     const definition = getMainDefinition(query);
      //     return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      //   },
      //   // WSLink,
      //   httpLink.create({ uri: `${environment.host}/graphql` })
      // ),
    ]),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({
      ...(typeof existingCache === "object" && existingCache
        ? existingCache
        : {}),
      ...(typeof initialState === "object" && initialState ? initialState : {}),
    });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo() {
  const store = useMemo(() => initializeApollo(), []);

  return store;
}
