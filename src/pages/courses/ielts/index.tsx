"use client";
import { Container, Box } from "@mui/material";
import React from "react";

import MainLayout from "@/layouts/MainLayout";
import IeltsAudio from "@/modules/IeltsPage/IeltsAudio";
import IeltsFAQs from "@/modules/IeltsPage/IeltsFAQs";
import IeltsIntro from "@/modules/IeltsPage/IeltsIntro";
import IeltsQuiz from "@/modules/IeltsPage/IeltsQuiz";
import IeltsRegister from "@/modules/IeltsPage/IeltsRegister";
import IeltsTopics from "@/modules/IeltsPage/IeltsTopics";

export default function IeltsPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#e0f2f1",
        minHeight: "calc(100vh - 152px)",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <IeltsIntro />
        <IeltsTopics />
        <IeltsQuiz />
        <IeltsAudio />
        <IeltsFAQs />
        <IeltsRegister />
      </Container>
    </Box>
  );
}

IeltsPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
