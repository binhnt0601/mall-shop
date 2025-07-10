import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const CLASS_STATUS_OPTIONS = [
  { label: "All", value: "ALL" },
  { label: "Active", value: "ACTIVE" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Upcoming", value: "UPCOMING" },
];

type Props = {
  value: string;
  onChange: (v: string) => void;
};
export default function ClassStatusFilter({ value, onChange }: Props) {
  return (
    <FormControl size="small" sx={{ minWidth: 160 }}>
      <InputLabel>Status</InputLabel>
      <Select
        value={value}
        label="Status"
        onChange={(e) => onChange(e.target.value)}
      >
        {CLASS_STATUS_OPTIONS.map((opt) => (
          <MenuItem value={opt.value} key={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
