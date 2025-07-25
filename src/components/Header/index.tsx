"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

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
  { label: "Pricing", href: "/pricing-fee" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About Us", children: aboutUs },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 flex items-center justify-between bg-white px-8 shadow h-[72px]">
      {/* Logo */}
      <Link href="/">
        <Image width={72} height={52} src="/favicon.png" alt="Brand Logo" />
      </Link>

      {/* Desktop menu */}
      <DesktopMenu menu={menu} />

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
