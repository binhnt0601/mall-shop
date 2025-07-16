"use client";

import { t } from "@lingui/macro";
import { IconButton, Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdVisibility } from "react-icons/md";

import BadgeStatus from "@/components-shared/BadgeStatus";
import CommonTable, {
  Column,
  FilterConfig,
} from "@/components-shared/CommonTable";
import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import { Assignment } from "@/services/assignment/assignment.model";
import { AssignmentService } from "@/services/assignment/assignment.repo";
import { useAuthStore } from "@/stores/auth/useAuthStore";

const statusOptions = [
  { label: t`All`, value: "ALL" },
  { label: t`Graded`, value: "GRADED" },
  { label: t`Submitted`, value: "SUBMITTED" },
  { label: t`Pending`, value: "PENDING" },
  { label: t`Overdue`, value: "OVERDUE" },
];

const ManageAssignmentsPage = () => {
  const router = useRouter();
  const { query, pathname } = router;

  const { auth } = useAuthStore();
  const role = auth?.role;

  const status = String(query.status || "ALL");
  const search = (query.search as string) || "";

  const [data, setData] = useState<Assignment[]>([]);

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

      const result = await AssignmentService.getAll({
        query: {
          limit: length,
          offset,
          filter,
          order: { dueDate: -1 },
        },
        cache: false,
        fragment: AssignmentService.fullFragment,
      });

      setData(result.data);
      setPagination({
        page,
        limit: length,
        total: result.total,
      });
    } catch (error) {
      console.error("Failed to fetch assignments", error);
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
      placeholder: t`Search by assignment, class...`,
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

  const columns: Column<Assignment>[] = [
    { field: "title", label: t`Title` },
    { field: "class.name", label: t`Class Name` },
    {
      field: "deadline",
      label: t`Deadline`,
      render: (row) =>
        row.deadline ? new Date(row.deadline).toLocaleString() : "-",
    },
    {
      field: "status",
      label: t`Status`,
      align: "center",
      render: (row) => <BadgeStatus status={row.status as any} />,
    },
    // Nếu muốn show tổng số bài đã nộp:
    // {
    //   field: "submissions",
    //   label: t`Submissions`,
    //   render: (row) => row.submissions?.length ?? "-",
    // },
    {
      field: "createdAt",
      label: t`Created`,
      render: (row) =>
        row.createdAt ? new Date(row.createdAt).toLocaleDateString() : "-",
    },
    {
      field: "updatedAt",
      label: t`Updated`,
      render: (row) =>
        row.updatedAt ? new Date(row.updatedAt).toLocaleString() : "-",
    },
    {
      label: t`Actions`,
      align: "center",
      render: (row) => (
        <>
          <Tooltip title={t`View details`} placement="top">
            <IconButton
              onClick={() => router.push(`/manage/classes/${row.id}`)}
            >
              <MdVisibility />
            </IconButton>
          </Tooltip>
          {role === "ADMIN" && (
            <Tooltip title={t`Edit`} placement="top">
              <IconButton
                onClick={() =>
                  router.push(`/manage/classes/${row.id}?edit=true`)
                }
              >
                <BiEdit />
              </IconButton>
            </Tooltip>
          )}
        </>
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

(ManageAssignmentsPage as any).Layout = AdminLayout;
export default ManageAssignmentsPage;
