import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const typeOptions = [
  { label: "All", value: "ALL" },
  { label: "PDF", value: "PDF" },
  { label: "Video", value: "Video" },
  { label: "Link", value: "Link" },
  { label: "Doc", value: "Doc" },
];

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function MaterialTypeFilter({ value, onChange }: Props) {
  return (
    <FormControl size="small" sx={{ minWidth: 140 }}>
      <InputLabel>Type</InputLabel>
      <Select
        label="Type"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {typeOptions.map((opt) => (
          <MenuItem value={opt.value} key={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
