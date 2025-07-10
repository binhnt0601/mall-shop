import { Chip } from "@mui/material";

import CommonTable, { Column } from "@/components-shared/CommonTable";

export type StudentAssignment = {
  id: string;
  title: string;
  className: string;
  dueDate: string;
  status: "SUBMITTED" | "PENDING" | "OVERDUE" | "GRADED";
  grade?: string;
};

const columns: Column<StudentAssignment>[] = [
  { field: "id", label: "ID" },
  { field: "title", label: "Title" },
  { field: "className", label: "Class" },
  { field: "dueDate", label: "Due Date" },
  {
    field: "status",
    label: "Status",
    align: "center",
    render: (row) => (
      <Chip
        label={row.status}
        color={
          row.status === "GRADED"
            ? "success"
            : row.status === "SUBMITTED"
              ? "info"
              : row.status === "PENDING"
                ? "warning"
                : "error"
        }
        size="small"
        sx={{
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      />
    ),
  },
  {
    field: "grade",
    label: "Grade",
    align: "center",
    render: (row) => row.grade ?? "-",
  },
];

export default function AssignmentTable({
  data,
}: {
  data: StudentAssignment[];
}) {
  return (
    <CommonTable columns={columns} data={data} rowsPerPageOptions={[5, 10]} />
  );
}
