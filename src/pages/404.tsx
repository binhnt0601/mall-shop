import Link from "next/link";
import { useRouter } from "next/router";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import MainLayout from "@/layouts/MainLayout";

export default function Custom404() {
  const { asPath } = useRouter();

  const isAdminPage = asPath.startsWith("/manage");

  if (isAdminPage) {
    return (
      <AdminLayout>
        <Error404Content />
      </AdminLayout>
    );
  }

  return (
    <MainLayout>
      <Error404Content />
    </MainLayout>
  );
}

function Error404Content() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <img src="/images/errors/page404.jpg" className="mb-5" alt="404" />

      <Link
        href="/"
        className="mt-6 px-5 py-2 rounded-lg bg-[#d6dffd] text-[#8583f5] font-medium shadow hover:bg-primary-dark transition"
      >
        Go back home
      </Link>
    </div>
  );
}
