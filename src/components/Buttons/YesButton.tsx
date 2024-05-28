import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface YesButtonProps extends ButtonProps {
  value: string;
  loading: boolean;
}
const classes = {
  button: `button`,
  label: `label`,
};

const ButtonRoot = styled(Button)(({ theme }) => ({
  [`&.${classes.button}`]: {
    backgroundColor: "white",
    border: "1px solid rgba(33, 150, 243, 0.5)",
    borderRadius: "10px",
    color: "#2196F3",
    height: "45px",
    textTrasform: "uppercase",
  },
})) as typeof Button;

export default function YesButton({ value, ...props }: YesButtonProps) {
  return (
    <ButtonRoot sx={{}} className={classes.button} {...props}>
      {value}
    </ButtonRoot>
  );
}
