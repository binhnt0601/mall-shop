"use client";
import { Container } from "@mui/material";
import React from "react";

import MainLayout from "@/layouts/MainLayout";
import KidEnglishPath from "@/modules/KidEnglishPage/EnglishPath";
import KidEnglishSkills from "@/modules/KidEnglishPage/EnglishSkills";
import KidEnglishFunActivities from "@/modules/KidEnglishPage/FunActivities";
import KidEnglishIntro from "@/modules/KidEnglishPage/Introduction";
import KidEnglishRegistration from "@/modules/KidEnglishPage/Registration";

export default function KidEnglishPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <KidEnglishIntro />
      <KidEnglishPath />
      <KidEnglishSkills />
      <KidEnglishFunActivities />
      <KidEnglishRegistration />
    </Container>
  );
}

KidEnglishPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
