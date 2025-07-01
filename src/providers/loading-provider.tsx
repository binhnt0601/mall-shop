'use client';
import { createContext, useContext, useState } from 'react';

import PageLoading from '@/components-shared/PageLoading';

const LoadingContext = createContext<
  Partial<{
    loading: boolean;
    setLoading: any;
  }>
>({});

const LoadingProvider = (props: any) => {
  const [loading, setLoading] = useState(false);

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
