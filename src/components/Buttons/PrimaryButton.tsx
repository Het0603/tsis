import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface PrimaryButtonProps extends ButtonProps {
  value: string;
  loading: any;
}

const classes = {
  button: `button`,
  label: `label`,
};

const ButtonRoot = styled(Button)(({ theme }) => ({
  [`&.${classes.button}`]: {
    backgroundColor: `var(--college-blue, #2C3878)`,
    borderRadius: "10px",
    color: "white",
    height: "45px",
  },
})) as typeof Button;

export default function PrimaryButton({ value, ...props }: PrimaryButtonProps) {
  return (
    <ButtonRoot className={classes.button} {...props}>
      {value}
    </ButtonRoot>
  );
}
