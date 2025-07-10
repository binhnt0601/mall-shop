import { Chip, Link } from "@mui/material";
import React from "react";

import CommonTable, { Column } from "@/components-shared/CommonTable";

export type StudentMaterial = {
  id: string;
  name: string;
  description: string;
  className: string;
  type: "PDF" | "Video" | "Link" | "Doc";
  url: string;
  status: "AVAILABLE" | "UPCOMING" | "EXPIRED";
};
type Props = {
  data: StudentMaterial[];
};

const columns: Column<StudentMaterial>[] = [
  { field: "name", label: "Material Name" },
  { field: "className", label: "Class" },
  {
    field: "type",
    label: "Type",
    align: "center",
    render: (row) => (
      <Chip
        label={row.type}
        color={
          row.type === "PDF"
            ? "primary"
            : row.type === "Video"
              ? "secondary"
              : "default"
        }
        size="small"
        variant="outlined"
      />
    ),
  },
  { field: "description", label: "Description" },
  {
    field: "status",
    label: "Status",
    align: "center",
    render: (row) => (
      <Chip
        label={row.status}
        color={
          row.status === "AVAILABLE"
            ? "success"
            : row.status === "UPCOMING"
              ? "warning"
              : "default"
        }
        size="small"
      />
    ),
  },
  {
    field: "url",
    label: "Download/View",
    align: "center",
    render: (row) =>
      row.status === "AVAILABLE" ? (
        <Link
          href={row.url}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          View
        </Link>
      ) : (
        <span style={{ color: "#aaa" }}>N/A</span>
      ),
  },
];

const StudentMaterialTable: React.FC<Props> = ({ data }) => (
  <CommonTable<StudentMaterial>
    columns={columns}
    data={data}
    emptyText="No materials found"
  />
);

export default StudentMaterialTable;
