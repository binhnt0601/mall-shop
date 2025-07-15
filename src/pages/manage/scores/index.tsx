"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import CommonTable, {
  Column,
  FilterConfig,
} from "@/components-shared/CommonTable";
import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import { Score } from "@/services/score/score.model";
import { ScoreService } from "@/services/score/score.repo";
import { useAuthStore } from "@/stores/auth/useAuthStore";

const statusOptions = [
  { label: "All", value: "ALL" },
  { label: "Passed", value: "PASSED" },
  { label: "Failed", value: "FAILED" },
];

const ManagementScoresPage = () => {
  const router = useRouter();
  const { query, pathname } = router;

  const { auth } = useAuthStore();
  const role = auth?.role;

  const status = String(query.status || "ALL");
  const search = (query.search as string) || "";

  const [data, setData] = useState<Score[]>([]);
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

      const result = await ScoreService.getAll({
        query: {
          limit: length,
          offset,
          filter,
          order: { createdAt: -1 },
        },
        cache: false,
        fragment: ScoreService.fullFragment,
      });

      setData(result.data);
      setPagination({
        page,
        limit: length,
        total: result.total,
      });
    } catch (error) {
      console.error("Failed to fetch scores", error);
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
      label: "Search",
      field: "search",
      value: search,
      type: "search",
      onChange: (v: string) => handleFilterChange("search", v),
      placeholder: "Search by class, subject, assignment...",
    },
    {
      label: "Status",
      field: "status",
      value: status,
      type: "select",
      options: statusOptions,
      onChange: (v: string) => handleFilterChange("status", v),
    },
  ];

  const columns: Column<Score>[] = [
    { field: "class.name", label: "Class Name" },
    { field: "class.teacher.name", label: "Teacher" },
    ...(role === "ADMIN" ? [{ field: "student.name", label: "Student" }] : []),
    { field: "assignment.title", label: "Assignment" },
    { field: "score", label: "Score" },
    { field: "maxScore", label: "Max Score" },
    { field: "subject", label: "Subject" },
    {
      field: "status",
      label: "Status",
      align: "center",
      render: (row) => (
        <span
          style={{
            color: row.status === "PASSED" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
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
  );
};

(ManagementScoresPage as any).Layout = AdminLayout;

export default ManagementScoresPage;
