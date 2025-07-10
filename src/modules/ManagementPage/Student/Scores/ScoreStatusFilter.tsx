import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const statusOptions = [
  { label: "All", value: "ALL" },
  { label: "Passed", value: "PASSED" },
  { label: "Failed", value: "FAILED" },
];

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function ScoreStatusFilter({ value, onChange }: Props) {
  return (
    <FormControl size="small" sx={{ minWidth: 140 }}>
      <InputLabel>Status</InputLabel>
      <Select
        label="Status"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {statusOptions.map((opt) => (
          <MenuItem value={opt.value} key={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
