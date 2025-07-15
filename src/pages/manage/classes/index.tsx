"use client";

import { t, Trans } from "@lingui/macro";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CommonTable, {
  Column,
  FilterConfig,
} from "@/components-shared/CommonTable";
import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import { Class } from "@/services/class/class.model";
import { ClassService } from "@/services/class/class.repo";
import { useAuthStore } from "@/stores/auth/useAuthStore";

const statusOptions = [
  { label: t`All`, value: "ALL" },
  { label: t`Active`, value: "ACTIVE" },
  { label: t`Inactive`, value: "INACTIVE" },
];

const StudentClassesPage = () => {
  const router = useRouter();
  const { query, pathname } = router;
  const { auth } = useAuthStore();
  const role = auth?.role;

  const status = String(query.status || "ALL");
  const search = (query.search as string) || "";

  const [data, setData] = useState<Class[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const getData = async ({
    page,
    length,
  }: {
    page: number;
    length: number;
  }) => {
    setLoading(true);
    try {
      const offset = (page - 1) * length;
      const filter: any = {};
      if (status !== "ALL") filter.status = status;
      if (search) filter.search = search;

      const result = await ClassService.getAll({
        query: {
          limit: length,
          offset,
          filter,
          order: { createdAt: -1 },
        },
        cache: false,
        fragment: ClassService.fullFragment,
      });

      setData(result.data);
      setPagination({
        page,
        limit: length,
        total: result.total,
      });
    } catch (error) {
      console.error("Failed to fetch classes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData({ page: pagination.page, length: pagination.limit });
  }, [status, search, pagination.page]);

  const handleFilterChange = (key: string, value: string) => {
    const newQuery = { ...query };
    if (!value || value === "ALL") delete newQuery[key];
    else newQuery[key] = value;
    newQuery.page = "1";
    setPagination((p) => ({ ...p, page: 1 }));
    router.push({ pathname, query: newQuery }, undefined, { shallow: true });
  };

  const filters: FilterConfig[] = [
    {
      label: t`Search`,
      field: "search",
      value: search,
      type: "search",
      onChange: (v: string) => handleFilterChange("search", v),
      placeholder: t`Search by class name, teacher...`,
    },
    {
      label: t`Status`,
      field: "status",
      value: status,
      type: "select",
      options: statusOptions,
      onChange: (v: string) => handleFilterChange("status", v),
    },
  ];

  const columns: Column<Class>[] = [
    { field: "name", label: t`Class Name` },
    { field: "teacher.name", label: t`Teacher` },
    ...(role === "ADMIN"
      ? [
          {
            field: "students",
            label: t`Students`,
            align: "center" as any,
            render: (row: Class) => <span>{row.students?.length}</span>,
          },
        ]
      : []),
    { field: "status", label: t`Status` },
  ];

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        <Trans>My Classes</Trans>
      </Typography>

      <CommonTable
        columns={columns}
        data={data}
        filters={filters}
        loading={loading}
        pagination={pagination}
        onPageChange={(page: number, limit: number) => {
          getData({ page, length: limit });
        }}
      />
    </Box>
  );
};

(StudentClassesPage as any).Layout = AdminLayout;
export default StudentClassesPage;
