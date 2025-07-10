import React from "react";

import CommonTable, { Column } from "@/components-shared/CommonTable";

export type StudentScore = {
  id: string;
  className: string;
  subject: string;
  assignment: string;
  score: number;
  maxScore: number;
  status: "PASSED" | "FAILED";
};

type Props = {
  data: StudentScore[];
};

const columns: Column<StudentScore>[] = [
  { field: "className", label: "Class" },
  { field: "subject", label: "Subject" },
  { field: "assignment", label: "Assignment" },
  {
    field: "score",
    label: "Score",
    align: "right",
    render: (row) => `${row.score} / ${row.maxScore}`,
  },
  {
    field: "status",
    label: "Status",
    align: "center",
    render: (row) => (
      <span
        style={{
          color: row.status === "PASSED" ? "#16a34a" : "#ef4444",
          fontWeight: 600,
        }}
      >
        {row.status === "PASSED" ? "Passed" : "Failed"}
      </span>
    ),
  },
];

const StudentScoreTable: React.FC<Props> = ({ data }) => (
  <CommonTable<StudentScore>
    columns={columns}
    data={data}
    emptyText="No scores found"
  />
);

export default StudentScoreTable;
