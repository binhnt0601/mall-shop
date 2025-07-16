import { TableBody, TableRow, TableCell, Skeleton } from "@mui/material";
import React from "react";

import { Column, getNestedValue } from ".";

type TableBodyContentProps<T> = {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyText?: string;
  skeletonRows?: number;
  useServerPaging?: boolean;
  page?: number;
  rowsPerPage?: number;
};

export default function TableBodyContent<T>({
  columns,
  data,
  loading = false,
  emptyText = "No data",
  skeletonRows = 5,
}: TableBodyContentProps<T>) {
  if (loading) {
    return (
      <TableBody>
        {[...Array(skeletonRows)].map((_, idx) => (
          <TableRow key={idx}>
            {columns.map((col, colIdx) => (
              <TableCell key={colIdx}>
                <Skeleton />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );
  }

  if (!data.length) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            {emptyText}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((row, idx) => (
        <TableRow hover tabIndex={-1} key={idx}>
          {columns.map((col, colIdx) => (
            <TableCell
              key={colIdx}
              align={col.align || "left"}
              sx={{
                minWidth: col.minWidth ? col.minWidth : undefined,
                maxWidth: col.minWidth ? col.minWidth : undefined,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {col.render
                ? col.render(row, idx)
                : String(getNestedValue(row, col.field as string) ?? "")}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
