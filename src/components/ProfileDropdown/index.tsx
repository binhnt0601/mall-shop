import { Trans } from "@lingui/macro";
import { Avatar } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";
import { MdPerson } from "react-icons/md";

import { useAuthStore } from "@/stores/auth/useAuthStore";

const ProfileDropdown = () => {
  const { pathname } = useRouter();
  const { auth, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center gap-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <Avatar
          src={auth?.avatar}
          sx={{ width: 40, height: 40, boxShadow: 2 }}
        />
        <div>
          <div className="flex flex-col items-start">
            <p>{auth?.name}</p>
            <p className="md:max-w-[160px] max-w-[120px] truncate">
              {auth?.email}
            </p>
          </div>
        </div>
        <HiChevronDown
          size={18}
          className={clsx(
            "transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 origin-top-right rounded-md bg-white shadow-lg">
          <div className="flex flex-col items-start gap-1 p-4">
            <Link
              href="/manage/profile"
              className={clsx(
                pathname === "/profile" && "text-primary",
                "hover:text-[#FF7125] hover:font-medium flex gap-2 items-center",
                "border-b pb-2 w-full text-nowrap"
              )}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <MdPerson />
              <Trans>My profile</Trans>
            </Link>
            <button
              className="flex items-center gap-2 rounded text-center hover:font-medium hover:text-[#FF7125] pt-1"
              onClick={logout}
            >
              <BiLogOut />
              <Trans>Logout</Trans>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
