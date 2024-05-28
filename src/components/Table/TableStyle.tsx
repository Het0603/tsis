import {
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
  Slide,
} from "@mui/material";
import React from "react";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: `var(--school-lite-gray, #F5F5F5)`,
    color: `var(--school-dark-gray, #7D7D7D)`,
    fontWeight: "bold",
    padding: "20px",

    // border: "1px solid #808080",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // border: "1px solid #E5E5E5",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },

  // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
  padding: "20px",
  color: " #FFF",
  gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
  // transition: "transform 0.3s, border 0.3s",
  // "&:hover": {
  //   borderColor: theme.vars.palette.primary.outlinedHoverBorder,
  //   transform: "translateY(-5px)",
  //   backgroundColor: "#eeeeee !important",
  // },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export { StyledTableRow, StyledTableCell, Transition };
