import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ASSIGNMENT_STATUS_OPTIONS = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Submitted", value: "SUBMITTED" },
  { label: "Overdue", value: "OVERDUE" },
  { label: "Graded", value: "GRADED" },
];

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function AssignmentStatusFilter({ value, onChange }: Props) {
  return (
    <FormControl size="small" sx={{ minWidth: 160 }}>
      <InputLabel>Status</InputLabel>
      <Select
        value={value}
        label="Status"
        onChange={(e) => onChange(e.target.value)}
      >
        {ASSIGNMENT_STATUS_OPTIONS.map((opt) => (
          <MenuItem value={opt.value} key={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
