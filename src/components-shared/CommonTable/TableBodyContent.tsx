import {
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";

import { Column } from ".";

type Props<T> = {
  columns: Column<T>[];
  data: T[];
  loading: boolean;
  emptyText: string;
  skeletonRows: number;
  useServerPaging: boolean;
  page: number;
  rowsPerPage: number;
};

export default function TableBodyContent<T>({
  columns,
  data,
  loading,
  emptyText,
  skeletonRows,
  useServerPaging,
  page,
  rowsPerPage,
}: Props<T>) {
  if (loading) {
    return (
      <TableBody>
        {[...Array(skeletonRows)].map((_, idx) => (
          <TableRow key={idx}>
            {columns.map((col, j) => (
              <TableCell
                key={String(col.field) + j}
                align={col.align || "left"}
              >
                <Skeleton variant="rectangular" height={28} animation="wave" />
              </TableCell>
            ))}
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={columns.length} align="center" sx={{ border: 0 }}>
            <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
              <CircularProgress size={32} />
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  if (data.length === 0) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={columns.length} align="center">
            <Typography color="text.secondary">{emptyText}</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((row, idx) => (
        <TableRow key={idx}>
          {columns.map((col) => (
            <TableCell
              key={String(col.field)}
              align={col.align || "left"}
              className="text-nowrap"
            >
              {col.render
                ? col.render(
                    row,
                    idx + (useServerPaging ? 0 : page * rowsPerPage)
                  )
                : String(row[col.field] ?? "")}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
