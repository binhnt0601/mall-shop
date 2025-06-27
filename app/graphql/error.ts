import { onError } from 'apollo-link-error';

export const ErrorLink = onError(({ graphQLErrors, networkError }) => {
  try {
    let errorMessage = '';

    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.error({ message, locations, path });
        errorMessage = `${message}`;
        if (message === 'Error, Unverified account') {
          window.localStorage.clear();
          if (window?.location?.pathname !== '/') {
            window.location.assign('/');
          }
        }
      });
    }

    if (networkError) {
      console.log('🚀 ~ ErrorLink ~ networkError:', networkError);
      // const netErr = networkError as any;
      // if (netErr.error && netErr.error.errors) {
      //   console.error('[Network error]:', netErr.error.errors[0].message);
      //   errorMessage = `[Network error]: ${netErr.error.errors[0].message}`;
      //   networkError.message = netErr.error.errors[0].message;
      // } else {
      //   errorMessage = `[Network error]: ${networkError}`;
      //   networkError.message = errorMessage;
      // }
    }
  } catch (error) {
    console.error('ErrorLink caught an error:', error);
  }
});
