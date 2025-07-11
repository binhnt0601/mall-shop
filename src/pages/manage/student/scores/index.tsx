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

const statusOptions = [
  { label: "All", value: "ALL" },
  { label: "Passed", value: "PASSED" },
  { label: "Failed", value: "FAILED" },
];

const columns: Column<Score>[] = [
  { field: "id", label: "ID" },
  { field: "class.name", label: "Class Name" },
  { field: "subject", label: "Subject" },
  { field: "assignment.title", label: "Assignment" },
  { field: "score", label: "Score" },
  { field: "maxScore", label: "Max Score" },
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

const StudentScoresPage = () => {
  const router = useRouter();
  const { query, pathname } = router;

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

(StudentScoresPage as any).Layout = AdminLayout;

export default StudentScoresPage;
