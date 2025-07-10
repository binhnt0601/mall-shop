import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";

import LocaleDropdown from "@/components/LocaleDropdown";
import { useCurrentHeader } from "@/hooks/useCurrentHeader"; // (copy hook trên vào file này hoặc export ra riêng)
import { useAuthStore } from "@/stores/auth/useAuthStore";

interface Props {
  setCollapseShow: Dispatch<SetStateAction<boolean>>;
}

const AdminHeaderBar: React.FC<Props> = ({ setCollapseShow }) => {
  const { auth } = useAuthStore();
  const headerText = useCurrentHeader();

  return (
    <div className="fixed inset-x-0 z-30 ml-0 bg-white px-5 lg:px-10 py-3 shadow md:ml-64 lg:ml-72 mt-0">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="block md:hidden">
          <img src={"/logo.png"} alt="logo" width={46} height={46} />
        </Link>

        {/* Show Header in center */}
        <div className="font-semibold text-lg text-center ">{headerText}</div>

        <div className="hidden md:flex items-center">
          {auth && <LocaleDropdown />}
        </div>

        {/* Mobile Toggle button */}
        <button
          className="cursor-pointer text-black bg-white rounded p-2 shadow md:hidden"
          type="button"
          onClick={() => setCollapseShow(true)}
        >
          <FiMenu size={26} />
        </button>
      </div>
    </div>
  );
};

export default AdminHeaderBar;
