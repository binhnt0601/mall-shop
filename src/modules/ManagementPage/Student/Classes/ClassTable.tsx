import { Chip } from "@mui/material";

import CommonTable, { Column } from "@/components-shared/CommonTable";

export type StudentClass = {
  id: string;
  name: string;
  teacher: string;
  status: "ACTIVE" | "COMPLETED" | "UPCOMING";
  startDate: string;
  endDate: string;
};

const columns: Column<StudentClass>[] = [
  { field: "id", label: "ID" },
  { field: "name", label: "Class Name" },
  { field: "teacher", label: "Teacher" },
  {
    field: "status",
    label: "Status",
    align: "center",
    render: (row) => (
      <Chip
        label={row.status}
        color={
          row.status === "ACTIVE"
            ? "success"
            : row.status === "COMPLETED"
              ? "default"
              : "info"
        }
        size="small"
        sx={{
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      />
    ),
  },
  { field: "startDate", label: "Start Date" },
  { field: "endDate", label: "End Date" },
];

export default function ClassTable({ data }: { data: StudentClass[] }) {
  return (
    <CommonTable columns={columns} data={data} rowsPerPageOptions={[5, 10]} />
  );
}
