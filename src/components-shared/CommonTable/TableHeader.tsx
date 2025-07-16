import { TableHead, TableRow, TableCell } from "@mui/material";

import { Column } from ".";

type TableHeaderProps<T> = {
  columns: Column<T>[];
};

export default function TableHeader<T>({ columns }: TableHeaderProps<T>) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((col, idx) => (
          <TableCell
            key={String(col.field) || idx}
            align={col.align || "left"}
            sx={{
              fontWeight: 700,
              bgcolor: "#f4f7fb",
              borderBottom: "2px solid #e2e8f0",
              minWidth: col.minWidth ? col.minWidth : undefined,
              whiteSpace: "nowrap",
            }}
          >
            {col.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
