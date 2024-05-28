import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function BaseSelect({
  title,
  props,
  options,
  lookup,
  helperText,
  error,
  color,
}: any) {
  if (error) {
    props = {
      ...props,
      error: true,
    };
  }

  return (
    <>
      <FormControl
        sx={{
          border: `1px solid var(--school-gray, #8D8D8D)`,
          // padding: 1,
          borderRadius: "10px",
        }}
        error={error ? true : false}
        fullWidth
        size="small"
      >
        <FormLabel
          sx={{
            fontSize: 13,
            marginLeft: "10px",
            marginTop: "5px",
          }}
        >
          {props?.title}
        </FormLabel>
        <Select
          {...props}
          {...{ "data-value": props?.value }}
          onChange={(e, v) => {
            const selectedValue = e.target.value;

            props?.onChange({
              target: {
                name: props?.name,
                value: selectedValue,
              },
            });
          }}
          variant="outlined"
          size="small"
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              border: 0,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
          }}
        >
          {options?.map((option: any, index: any) => {
            return (
              <MenuItem
                onSelect={(e) => {}}
                key={index}
                value={option?.id}
                placeholder={option?.name || option[lookup]}
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
