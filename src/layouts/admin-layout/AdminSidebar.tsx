import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

import ProfileDropdown from "@/components/ProfileDropdown";

import AdminSidebarBranch from "./AdminSidebarBranch";
import AdminSidebarMenu from "./AdminSidebarMenu";

interface Props {
  collapseShow: boolean;
  setCollapseShow: Dispatch<SetStateAction<boolean>>;
}

const AdminSidebar: React.FC<Props> = ({ collapseShow, setCollapseShow }) => {
  return (
    <>
      {/* Overlay sidebar for mobile */}
      <div
        className={clsx(
          "fixed inset-0 z-50 transition-all duration-300 md:hidden",
          collapseShow
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        )}
        style={{
          background: collapseShow ? "rgba(0,0,0,0.18)" : "transparent",
        }}
        onClick={() => setCollapseShow(false)}
      >
        <nav
          className={clsx(
            "absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-sm bg-white rounded-b-2xl shadow-lg transition-transform duration-300",
            collapseShow ? "translate-y-0" : "-translate-y-full"
          )}
          style={{ zIndex: 100 }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
        >
          <div className="flex justify-between p-4">
            <ProfileDropdown />
            <button className="text-lg" onClick={() => setCollapseShow(false)}>
              ✕
            </button>
          </div>
          <hr className="border-t-2" />
          <div className="p-5 pt-4">
            <AdminSidebarBranch />
            <AdminSidebarMenu setCollapseShow={setCollapseShow} />
          </div>
        </nav>
      </div>

      {/* Desktop sidebar */}
      <nav
        className={clsx(
          "hidden md:fixed md:inset-y-0 md:left-0 md:block md:w-64 lg:w-72 md:overflow-y-auto px-5 pb-10 bg-seconds-light flex-wrap items-center justify-between shadow-xl"
        )}
      >
        <AdminSidebarBranch />
        <AdminSidebarMenu setCollapseShow={setCollapseShow} />
      </nav>
    </>
  );
};
export default AdminSidebar;
