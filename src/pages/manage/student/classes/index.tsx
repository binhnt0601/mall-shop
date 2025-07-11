"use client";

import { t } from "@lingui/macro";
import { Box, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import ClassStatusFilter from "@/modules/ManagementPage/Student/Classes/ClassStatusFilter";
import ClassTable from "@/modules/ManagementPage/Student/Classes/ClassTable";
import { ClassService } from "@/services/class/class.repo";
import { useAuthStore } from "@/stores/auth/useAuthStore";

const StudentClassesPage = () => {
  const [status, setStatus] = useState<string>("ALL");
  const [classes, setClasses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { auth } = useAuthStore();

  useEffect(() => {
    if (!auth?.id) return;
    setLoading(true);
    ClassService.getAll()
      .then((data) => {
        console.log("🚀 ~ .then ~ data:", data);
        setError("");
      })
      .catch((e) => {
        setError(e?.message || "Failed to fetch classes");
      })
      .finally(() => setLoading(false));
  }, [auth?.id]);

  const filteredClasses =
    status === "ALL" ? classes : classes.filter((c) => c.status === status);

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        {t`My Classes`}
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
        <ClassStatusFilter value={status} onChange={setStatus} />
        {/* Có thể thêm filter theo Teacher, ngày, ... */}
      </Stack>

      {loading && <Typography>{t`Loading...`}</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && !error && <ClassTable data={filteredClasses} />}
    </Box>
  );
};

StudentClassesPage.Layout = AdminLayout;
export default StudentClassesPage;
