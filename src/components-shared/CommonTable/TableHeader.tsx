import { TableHead, TableRow, TableCell, Typography } from "@mui/material";

import { Column } from ".";

type Props<T> = { columns: Column<T>[] };

export default function TableHeader<T>({ columns }: Props<T>) {
  return (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell
            key={String(col.field)}
            align={col.align || "left"}
            className="text-nowrap"
          >
            <Typography fontWeight="bold">{col.label}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
