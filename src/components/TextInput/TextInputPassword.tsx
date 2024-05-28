import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  InputProps,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Password from "src/static/Images/password.png";

export interface TextInputProps extends InputProps {
  label: string;
  error: boolean;
  helpertext: string;
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#FFFFFF" : "#1A2027",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "#E0E3E7" : "#2D3843",
    fontSize: 18,
    // width: 'auto',
    height: "12px",
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
export default function TextInputPassword({
  label,
  helpertext,
  error,
  ...props
}: TextInputProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        padding: 2,
        "&:hover": {
          backgroundColor: "#EEF6FF",
          borderRadius: "20px",
        },
      }}
      spacing={3}
    >
      {!isMobile ? (
        <>
          <img
            src={Password}
            height={40}
            width={35}
            style={{
              marginTop: "10px",
            }}
          ></img>
        </>
      ) : (
        <>
          <img
            src={Password}
            height={25}
            width={25}
            style={{
              marginTop: "20px",
            }}
          ></img>
        </>
      )}

      <FormControl variant="standard" fullWidth error={error ? true : false}>
        <InputLabel
          shrink
          htmlFor="password"
          style={{
            color: "#8D8D8D",
          }}
        >
          {label}
        </InputLabel>
        <BootstrapInput
          fullWidth
          {...props}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              sx={{
                marginLeft: "-40px",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
          id="psw"
        />
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
