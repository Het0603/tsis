import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface NoButtonProps extends ButtonProps {
  value: string;
}
const classes = {
  button: `button`,
  label: `label`,
};

const ButtonRoot = styled(Button)(({ theme }) => ({
  [`&.${classes.button}`]: {
    backgroundColor: "white",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    color: "black",
    height: "45px",
    textTrasform: "uppercase",
  },
})) as typeof Button;

export default function NoButton({ value, ...props }: NoButtonProps) {
  return (
    <ButtonRoot sx={{}} className={classes.button} {...props}>
      {value}
    </ButtonRoot>
  );
}
