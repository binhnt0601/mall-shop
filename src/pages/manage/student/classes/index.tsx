"use client";

import { t } from "@lingui/macro";
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import ClassStatusFilter from "@/modules/ManagementPage/Student/Classes/ClassStatusFilter";
import ClassTable, {
  StudentClass,
} from "@/modules/ManagementPage/Student/Classes/ClassTable";

const DUMMY_CLASSES: StudentClass[] = [
  {
    id: "1",
    name: "IELTS Foundation",
    teacher: "Ms. Alice",
    status: "ACTIVE",
    startDate: "2024-07-01",
    endDate: "2024-08-15",
  },
  {
    id: "2",
    name: "English for Business",
    teacher: "Mr. Bob",
    status: "COMPLETED",
    startDate: "2024-04-01",
    endDate: "2024-06-15",
  },
  {
    id: "3",
    name: "Speaking Club",
    teacher: "Ms. Jenny",
    status: "UPCOMING",
    startDate: "2024-09-05",
    endDate: "2024-11-10",
  },
];

const StudentClassesPage = () => {
  const [status, setStatus] = useState("ALL");

  // Lọc theo trạng thái
  const filteredClasses =
    status === "ALL"
      ? DUMMY_CLASSES
      : DUMMY_CLASSES.filter((c) => c.status === status);

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        {t`My Classes`}
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
        <ClassStatusFilter value={status} onChange={setStatus} />
        {/* Có thể thêm filter theo Teacher, ngày, ... */}
      </Stack>
      <ClassTable data={filteredClasses} />
    </Box>
  );
};

StudentClassesPage.Layout = AdminLayout;
export default StudentClassesPage;
