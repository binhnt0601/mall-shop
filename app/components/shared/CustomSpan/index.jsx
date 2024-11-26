"use client";
import React from "react";

import { styled } from "@mui/material/styles";

const SpanStyled = styled("span")(({ theme, fontSize }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: fontSize || "inherit",
}));

const CustomSpan = ({ children, fontSize, ...props }) => {
  return (
    <SpanStyled fontSize={fontSize} {...props}>
      {children}
    </SpanStyled>
  );
};

export default CustomSpan;
