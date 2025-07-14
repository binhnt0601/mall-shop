import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

import PageHeader from "@/components/PageHeader";
import { GetAuthToken } from "@/graphql/auth";
import { AuthStatuses } from "@/stores/auth/types";
import { useAuthStore } from "@/stores/auth/useAuthStore";

import AdminHeaderBar from "./AdminHeaderbar";
import AdminSidebar from "./AdminSidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const { auth, authStatus, logout } = useAuthStore();
  const router = useRouter();
  const [collapseShow, setCollapseShow] = useState<boolean>(false);

  useEffect(() => {
    const token = GetAuthToken();
    if (!token) {
      router.push("/");
    }

    if (authStatus === AuthStatuses.LOADED) {
      if (!auth) {
        logout?.();
      }
    }
  }, [authStatus, auth, router.pathname, router.isReady]);

  return (
    <>
      <AdminSidebar
        collapseShow={collapseShow}
        setCollapseShow={setCollapseShow}
      />
      <div className="flex flex-col min-h-screen md:ml-64 lg:ml-72">
        <AdminHeaderBar setCollapseShow={setCollapseShow} />
        <div className="mt-[61px] flex-1 p-5">
          <PageHeader />
          {children}
        </div>
      </div>
    </>
  );
}
