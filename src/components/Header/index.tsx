import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const courses = [
  { label: "Basic Communication", href: "/courses/basic" },
  { label: "IELTS Preparation", href: "/courses/ielts" },
  { label: "Kids English", href: "/courses/kids" },
  { label: "Online Course", href: "/courses/online" },
];

const aboutUs = [
  { label: "Our Mission", href: "/about/mission" },
  { label: "Our Team", href: "/about/team" },
  { label: "FAQ", href: "/about/faq" },
];

const menu = [
  { label: "Home", href: "/" },
  { label: "Courses", children: courses },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About Us", children: aboutUs },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative z-50 flex items-center justify-between bg-white px-8 py-4 shadow">
      {/* Logo */}
      <Image width={72} height={52} src="/favicon.png" alt="Brand Logo" />
      {/* Desktop menu */}
      <DesktopMenu menu={menu} />
      {/* Login */}
      <Link
        href="/login"
        className="ml-4 hidden rounded-full bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 md:inline-block"
      >
        Login
      </Link>
      {/* Burger */}
      <button
        className="flex size-10 items-center justify-center md:hidden"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileMenuOpen((v) => !v)}
      >
        {mobileMenuOpen ? (
          <IoMdClose size={32} className="text-blue-700" />
        ) : (
          <FiMenu size={28} className="text-blue-700" />
        )}
      </button>
      {/* Mobile menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menu={menu}
      />
    </div>
  );
};

export default Header;
