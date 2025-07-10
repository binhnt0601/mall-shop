import Link from "next/link";

import ProfileDropdown from "@/components/ProfileDropdown";

const AdminSidebarBranch = () => {
  return (
    <div className="hidden items-center justify-center md:flex flex-col w-full">
      <div className="flex items-center">
        <Link href="/">
          <img src={"/logo.png"} alt="logo" width={160} height={160} />
        </Link>
      </div>
      <ProfileDropdown />
    </div>
  );
};

export default AdminSidebarBranch;
