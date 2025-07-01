import React from "react";
import { usePathname } from "next/navigation"; // App Router
import Dropdown from "@/components-shared/Dropdown";

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface DesktopMenuProps {
  menu: MenuItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-4 md:flex lg:gap-8">
      {menu.map((item) =>
        item.children ? (
          <Dropdown
            key={item.label}
            label={item.label}
            items={item.children.map((child) => ({
              ...child,
              href: child.href ?? "#",
              active: pathname === child.href,
            }))}
          />
        ) : (
          <a
            key={item.href}
            href={item.href}
            className={
              "transition hover:text-blue-600" +
              (pathname === item.href ? " text-blue-700 font-bold" : "")
            }
          >
            {item.label}
          </a>
        ),
      )}
    </nav>
  );
};

export default DesktopMenu;
