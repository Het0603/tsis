import { FormControl, OutlinedInput } from "@mui/material";

export default function TextInputNoLabel({ ...props }: any) {
  return (
    <>
      <FormControl fullWidth>
        <OutlinedInput {...props} fullWidth />
      </FormControl>
    </>
  );
}
