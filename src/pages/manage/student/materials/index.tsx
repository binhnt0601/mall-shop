"use client";

import { t } from "@lingui/macro";
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import MaterialTypeFilter from "@/modules/ManagementPage/Student/Materials/MaterialStatusFilter";
import StudentMaterialTable, {
  StudentMaterial,
} from "@/modules/ManagementPage/Student/Materials/StudentMaterialTable";

const DUMMY_MATERIALS: StudentMaterial[] = [
  {
    id: "1",
    name: "Speaking Practice.pdf",
    className: "IELTS Foundation",
    type: "PDF",
    description: "Lesson 1 - Speaking practice file",
    url: "https://example.com/material1.pdf",
    status: "AVAILABLE",
  },
  {
    id: "2",
    name: "Business English Video",
    className: "Business English",
    type: "Video",
    description: "Video: Business communication basics",
    url: "https://youtube.com/video/xxx",
    status: "AVAILABLE",
  },
  {
    id: "3",
    name: "Homework Assignment",
    className: "Speaking Club",
    type: "Doc",
    description: "Homework file for next week",
    url: "#",
    status: "UPCOMING",
  },
];

const StudentMaterialsPage = () => {
  const [type, setType] = useState("ALL");

  const filteredMaterials =
    type === "ALL"
      ? DUMMY_MATERIALS
      : DUMMY_MATERIALS.filter((m) => m.type === type);

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        {t`Materials`}
      </Typography>
      <Stack mb={2} direction="row" spacing={2}>
        <MaterialTypeFilter value={type} onChange={setType} />
      </Stack>
      <StudentMaterialTable data={filteredMaterials} />
    </Box>
  );
};

StudentMaterialsPage.Layout = AdminLayout;
export default StudentMaterialsPage;
