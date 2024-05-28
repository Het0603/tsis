import { FormControl, FormLabel, OutlinedInput } from "@mui/material";

export default function DateInput({
  props,
  title,
  handleChange,
  defaultValue,
  color,
}: any) {
  return (
    <>
      <FormControl
        sx={{
          border: `1px solid var(--school-gray, #8D8D8D)`,
          padding: 1,
          borderRadius: "10px",
          background: color ?? `var(--school-lite-gray, #F5F5F5)`,
        }}
        fullWidth
      >
        <FormLabel
          sx={{
            fontSize: 13,
            marginLeft: "5px",
          }}
        >
          {title}
        </FormLabel>
        <OutlinedInput
          size="small"
          type="date"
          placeholder="'"
          onChange={(e: any, v: any) => {
            const selectedValue = e.target.value;

            props?.onChange({
              target: {
                name: props?.name,
                value: selectedValue,
              },
            });
          }}
          sx={{
            background: color ?? `var(--school-lite-gray, #F5F5F5)`,
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
          {...props}
        ></OutlinedInput>
      </FormControl>
    </>
  );
}
