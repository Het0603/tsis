import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  InputProps,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface TextInputProps extends InputProps {
  label: string;
  error: boolean;
  helpertext: any;
}

const TextInputRoot = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },

  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#B0B4B9" : "#2D3843",
    fontSize: 18,
    // width: 'auto',
    height: "20px",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      // borderColor: theme.palette.primary.main,
    },
  },
}));
export default function TextInput({
  label,
  helpertext,
  error,
  ...props
}: TextInputProps) {
  return (
    <Stack direction={"row"}>
      <FormControl variant="standard" fullWidth error={error ? true : false} >
        <InputLabel shrink htmlFor="global input" style={{ color: "black" }} >
          {label}
        </InputLabel>
        <TextInputRoot fullWidth id="input"  {...props} />
        {helpertext && (
          <FormHelperText
            sx={{ marginLeft: 1, fontSize: 11, letterSpacing: 0.5 }}
          >
            {helpertext}
          </FormHelperText>
        )}
      </FormControl>
    </Stack>
  );
}
