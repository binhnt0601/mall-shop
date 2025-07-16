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
    { field: "type", label: t`Type` },
    { field: "level", label: t`Level` },
    { field: "teacher.name", label: t`Teacher` },
    {
      field: "schedule",
      label: t`Schedule`,
      render: (row: Class) =>
        row.schedule && row.schedule.length
          ? row.schedule.map((item) => (
              <span
                key={item.dayOfWeek + item.startTime}
                style={{ marginRight: 4 }}
              >
                {["CN", "T2", "T3", "T4", "T5", "T6", "T7"][item.dayOfWeek]}
                &nbsp;
                {item.startTime}-{item.endTime}
              </span>
            ))
          : "-",
    },
    ...(role === "ADMIN"
      ? [
          {
            field: "students",
            label: t`Students`,
            align: "center" as any,
            minWidth: 150,
            render: (row: Class) => (
              <span>{row.students?.map((i) => i.name).join(", ")}</span>
            ),
          },
        ]
      : []),
    {
      field: "status",
      label: t`Status`,
      render: (row: Class) => <BadgeStatus status={row.status} />,
    },
    {
      field: "fee",
      label: t`Fee`,
      align: "right" as any,
      render: (row: Class) =>
        typeof row.fee === "number" ? row.fee.toLocaleString() : "-",
    },
    {
      field: "description",
      label: t`Description`,
      minWidth: 300,
    },
    {
      field: "createdAt",
      label: t`Created`,
      render: (row: Class) =>
        row.createdAt ? new Date(row.createdAt).toLocaleDateString() : "-",
    },
    {
      field: "updatedAt",
      label: t`Updated`,
      render: (row: Class) =>
        row.updatedAt ? new Date(row.updatedAt).toLocaleDateString() : "-",
    },
    {
      label: t`Actions`,
      align: "center",
      render: (row: Class) => (
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

(StudentClassesPage as any).Layout = AdminLayout;
export default StudentClassesPage;
