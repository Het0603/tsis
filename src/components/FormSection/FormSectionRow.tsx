import { Grid, GridProps } from "@mui/material";
import { styled } from "@mui/styles";
import PropTypes from "prop-types";
import { ReactNode } from "react";

FormSectionRow.propTypes = {
  children: PropTypes.node.isRequired,
};

interface FormSectionRowProps extends GridProps {
  children: ReactNode;
}

const classes = {
  row: `row`,
};

const GridRoot = styled(Grid)(({ theme }) => ({
  [`&.${classes.row}`]: {
    margin: "0 -12px",
  },
}));

export default function FormSectionRow({
  children,
  ...props
}: FormSectionRowProps) {
  return (
    <GridRoot container padding={2} spacing={3} {...props}>
      {children}
    </GridRoot>
  );
}
