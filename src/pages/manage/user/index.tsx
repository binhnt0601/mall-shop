import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import BadgeStatus from "@/components-shared/BadgeStatus";
import CommonTable, {
  Column,
  FilterConfig,
} from "@/components-shared/CommonTable";
import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import { User } from "@/services/user/user.model";
import { UserService } from "@/services/user/user.repo";

const statusOptions = [
  { label: "All", value: "ALL" },
  { label: "Active", value: "ACTIVE" },
  { label: "Inactive", value: "INACTIVE" },
];

const roleOptions = [
  { label: "All", value: "ALL" },
  { label: "Admin", value: "ADMIN" },
  { label: "Member", value: "MEMBER" },
];

const columns: Column<User>[] = [
  { field: "id", label: "ID" },
  { field: "name", label: "Full Name" },
  { field: "email", label: "Email" },
  { field: "phone", label: "Phone Number" },
  { field: "referralCode", label: "ReferralCode" },
  {
    field: "status",
    label: "Status",
    align: "center",
    render: (row) => <BadgeStatus status={row.status} />,
  },
  { field: "role", label: "Role", align: "center" },
];

const UserManagePage = () => {
  const router = useRouter();
  const { query, pathname } = router;
  const status = String(query.status || "ALL");
  const role = String(query.role || "ALL");
  const search = (query.search as string) || "";
  const [data, setData] = useState<User[]>([]);
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
      if (role !== "ALL") filter.role = role;

      const result = await UserService.getAll({
        query: {
          limit: length,
          offset,
          search,
          filter,
          order: { _id: -1 },
        },
        cache: false,
        fragment: UserService.fullFragment,
      });

      setData(result.data);
      setPagination({
        page,
        limit: length,
        total: result.total,
      });
    } catch (error) {
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData({ page: pagination.page, length: pagination.limit });
    // eslint-disable-next-line
  }, [status, role, pagination.page, search]);

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
      placeholder: "Search by name, email...",
    },
    {
      label: "Status",
      field: "status",
      value: status,
      type: "select",
      options: statusOptions,
      onChange: (v: string) => handleFilterChange("status", v),
    },
    {
      label: "Role",
      field: "role",
      value: role,
      type: "select",
      options: roleOptions,
      onChange: (v: string) => handleFilterChange("role", v),
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

(UserManagePage as any).Layout = AdminLayout;
export default UserManagePage;
