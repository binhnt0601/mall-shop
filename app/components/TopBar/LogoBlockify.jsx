import React from "react";

import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";

import LogoImage from "@/assets/favicon.jpg";

export default function LogoBlockify() {
  return (
    <Box sx={{ mr: "0.5em" }}>
      <Link href="/">
        <Image width={72} height={50} src={LogoImage} alt="Brand Logo" />
      </Link>
    </Box>
  );
}
