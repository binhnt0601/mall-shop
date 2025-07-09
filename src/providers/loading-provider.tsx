"use client";

import NProgress from "nprogress";
import React from "react";

import PageLoading from "@/components-shared/PageLoading";
import { useLoadingStore } from "@/stores/loadingStore";

const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const loading = useLoadingStore((state) => state.loading);

  React.useEffect(() => {
    NProgress.configure({ showSpinner: false });
    if (loading) NProgress.start();
    else NProgress.done();
  }, [loading]);

  return (
    <>
      <PageLoading isLoading={loading} />
      {children}
    </>
  );
};

export default LoadingProvider;
