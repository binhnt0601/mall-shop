import { t } from "@lingui/macro";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

import BreadCrumbs from "@/components-shared/Breadcrumbs";
import useMenu from "@/hooks/useMenu";

const HOME_PATH = "/manage/dashboard";

function pathToTitle(path: string) {
  if (!path) return "";
  const arr = path.split("/").filter(Boolean);
  const last = arr.slice(-2).join(" ");
  return last
    .split(/[- ]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

interface PageHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className, children }) => {
  const router = useRouter();
  const [menu] = useMenu();

  const menuItem = React.useMemo(() => {
    if (!menu) return undefined;
    return menu.find((item: any) => router.pathname === item.url);
  }, [menu, router.pathname]);

  const breadcrumbs = React.useMemo(() => {
    let label = menuItem?.title;
    if (!label) {
      label = pathToTitle(router.pathname);
    }
    return [
      { href: HOME_PATH, label: t`Home` },
      { href: router.pathname, label: label || t`Page` },
    ];
  }, [router.pathname, menuItem]);

  const isExcludedPath = ["/403", "/404"].includes(router.pathname);

  if (isExcludedPath)
    return <div className={clsx("mt-5", className)}>{children}</div>;

  return (
    <div>
      {router.pathname !== HOME_PATH && (
        <div className="mb-5">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
      )}
      <div className={clsx("mt-5", className)}>{children}</div>
    </div>
  );
};

export default PageHeader;
