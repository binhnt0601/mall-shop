import { useRouter } from "next/router";
import { useEffect } from "react";

import PageLoading from "@/components-shared/PageLoading";
import { SetAuthToken } from "@/graphql/auth";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const token = router.query.token;

    if (typeof token === "string") {
      SetAuthToken(token);
      router.replace("/");
    } else {
      console.warn("No token found in query params.");
      router.replace("/");
    }
  }, [router.isReady, router.query.token]);

  return <PageLoading />;
}
