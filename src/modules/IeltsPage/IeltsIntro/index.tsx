"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";

export default function IeltsIntro() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #004d40 0%, #00796b 100%)",
        color: "white",
        py: 12,
        px: 3,
        textAlign: "center",
        borderRadius: 4,
        mb: 6,
      }}
    >
      <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
        IELTS Preparation Course
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", mb: 4 }}>
        Get ready for your IELTS exam with comprehensive lessons, real test
        strategies, and expert coaching to boost your score.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ px: 6, py: 1.5, fontWeight: "bold", fontSize: "1.1rem" }}
        href="#register"
      >
        Register Now
      </Button>
    </Box>
  );
}
