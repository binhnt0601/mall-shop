import React from "react";

import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";

import LogoImage from "@/assets/favicon.jpg";

export default function LogoCompany({ width = 72, height = 50 }) {
  return (
    <Box sx={{ mr: "0.5em" }}>
      <Link href="/">
        <Image width={width} height={height} src={LogoImage} alt="Brand Logo" />
      </Link>
    </Box>
  );
}
