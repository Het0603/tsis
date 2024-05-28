import { Grid, GridProps, GridSize } from "@mui/material";
import { ReactNode } from "react";

interface FormSectionItemProps extends GridProps {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  children: ReactNode;
  gridProps?: GridProps;
}

export default function FormSectionItem({
  xs = 12,
  sm = 12,
  md = 10,
  lg = 8,
  xl = 7,
  children,
  gridProps,
}: FormSectionItemProps) {
  return (
    <Grid item lg={lg} md={md} sm={sm} xl={xl} xs={xs} {...gridProps}>
      {children}
    </Grid>
  );
}
