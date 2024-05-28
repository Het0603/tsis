import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExportIcon from "src/static/Images/export.png";

export interface ExportButtonProps extends ButtonProps {
  // value: string
}

const classes = {
  button: `button`,
  label: `label`,
};

const ButtonRoot = styled(Button)(({ theme }) => ({
  [`&.${classes.button}`]: {
    backgroundColor: "#EEF6FF",
    border: "1px solid rgba(33, 150, 243, 0.5)",
    borderRadius: "5px",
    color: "#2196F3",
    height: "55px",
    width: "150px",
  },
})) as typeof Button;

export default function ExportButton({ ...props }: ExportButtonProps) {
  return (
    <ButtonRoot
      sx={{}}
      className={classes.button}
      {...props}
      startIcon={<img src={ExportIcon} height={20} width={20} />}
    >
      Export
    </ButtonRoot>
  );
}
