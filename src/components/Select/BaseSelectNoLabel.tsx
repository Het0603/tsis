import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type CustomSelectProps = {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  options: { value: string | number; label: string }[];
};

const BaseSelectNoLabel: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  ...props
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string | number);
  };

  return (
    <FormControl fullWidth>
      <InputLabel
        id="custom-select-label"
        sx={{
          fontSize: "15px",
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId="custom-select-label"
        id="custom-select"
        value={value}
        label={label}
        onChange={handleChange}
        {...props}
        sx={{
          background: `var(--school-lite-gray, #F5F5F5)`,
          borderRadius: "10px",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelectNoLabel;
