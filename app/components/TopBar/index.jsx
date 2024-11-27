"use client";

import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LogoBlockify from "./LogoBlockify";

const menuItems = [
  { index: 0, label: "Home", href: "/" },
  { index: 1, label: "FAQs", href: "#faqs" },
  {
    index: 2,
    label: "Pitch Deck",
    href: "https://cdn.aimalls.app/aimalls-pitchdeck.pdf",
    target: "_blank",
  },
  {
    index: 3,
    label: "Tokenomics",
    href: "https://google.com",
    target: "_blank",
  },
];

function TopBar() {
  const pathname = usePathname();

  return pathname === "/" ? (
    <AppBar
      id="navbar"
      position="fixed"
      sx={{
        color: "white",
        background: "white",
        height: { xs: "4rem", sm: "5.5rem" },
        zIndex: 2,
      }}
    >
      <Container maxWidth="xl" className="h-full">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <LogoBlockify />

          <div>
            <MobileMenu menuItems={menuItems} />
            <DesktopMenu menuItems={menuItems} />
          </div>

          <div className="hidden gap-5 md:flex">
            <Link href="/login" className="text-[#fc9a14]">
              Login
            </Link>
            <button className="text-[#fc9a14]">Register</button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  ) : (
    <></>
  );
}
export default TopBar;
