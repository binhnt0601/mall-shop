'use client';
import { createContext, useContext, useEffect, useState } from 'react';

import PageLoading from '@/components-shared/PageLoading';
import NProgress from 'nprogress';

const LoadingContext = createContext<
  Partial<{
    loading: boolean;
    setLoading: any;
  }>
>({});

const LoadingProvider = (props: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
    });
    if (loading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [loading]);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <PageLoading isLoading={loading} />
      {props.children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;

export const useLoader = () => useContext(LoadingContext);
