"use client";

import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import LogoBlockify from "./LogoBlockify";

const menuItems = [
  { index: 0, label: "Home", href: "/" },
  { index: 1, label: "FAQs", href: "/service" },
  { index: 2, label: "Pitch Deck", href: "/contact" },
  { index: 3, label: "Tokenomics", href: "/" },
];

function TopBar() {
  return (
    <AppBar
      id="navbar"
      position="fixed"
      sx={{
        color: "white",
        background: "white",
        height: { xs: "4rem", sm: "5.5rem" },
        zIndex: 9999,
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

          <MobileMenu menuItems={menuItems} />

          <DesktopMenu menuItems={menuItems} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;
