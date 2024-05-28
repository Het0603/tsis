import React, { ChangeEvent } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface BaseDropdownProps {
  props: any;
  options: any[];
  lookup: string;
  label: string;
  helperText: string;
  error: boolean;
  color: string;
}

function BaseDropdown({
  props,
  options,
  lookup,
  label,
  helperText,
  error,
  color,
}: BaseDropdownProps) {
  if (error) {
    props = {
      ...props,
      error: true,
    };
  }

  const handleChange = (e: SelectChangeEvent<typeof props.value>) => {
    props?.onChange?.({
      target: {
        name: props?.name,
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <FormControl size={props?.size} error={error ? true : false} fullWidth>
        <FormLabel
          style={{ color: "black" }}
          sx={{
            fontSize: 12,
            color: "black",
          }}
        >
          {label}
        </FormLabel>
        <Select
          {...props}
          {...{ "data-value": props?.value }}
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: "15px",
                "& .MuiMenuItem-root": {
                  
                },
              },
            },
          }}
          slotProps={{
            listbox: {
              placement: "bottom-start",
              sx: { minWidth: 160, maxHeight: 200, overflowY: "scroll" },
              width: 250,
            },
          }}
          fullWidth
          sx={{
            backgroundColor: color,
            height: "40px",
            borderRadius: "10px",
            "& span": {
              "& > svg": {
                height: "auto",
                width: 20,
              },
            },
            "& button": {
              borderRadius: 50,
              overflow: "hidden",
            },
          }}
        >
          {options?.map((option, index) => {
            return (
              <MenuItem
                key={index}
                value={option.id}
                label={option?.name || option[lookup]}
              >
                {option?.name || option[lookup]}
              </MenuItem>
            );
          })}
        </Select>
        {helperText && (
          <FormHelperText
            sx={{
              color: "red",
              marginLeft: 1,
              fontSize: 11,
              letterSpacing: 0.5,
            }}
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}

export { BaseDropdown };
