import {
  FormControl,
  FormLabel,
  InputProps,
  OutlinedInput,
} from "@mui/material";

export interface TextInputProps extends InputProps {
  label: string;
  error: boolean;
  helpertext: string;
}
export default function FilterTextInput({
  title,
  defaultValue,
  ...props
}: TextInputProps) {
  return (
    <>
      <FormControl
        sx={{
          border: `1px solid var(--school-gray, #8D8D8D)`,
          // padding: 1,
          borderRadius: "10px",
        }}
        fullWidth
      >
        <FormLabel
          sx={{
            fontSize: 13,
            marginLeft : '10px',
            marginTop : '5px'
          }}
        >
          {title}
        </FormLabel>
        <OutlinedInput
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
          {...props}
        ></OutlinedInput>
      </FormControl>
    </>
  );
}
