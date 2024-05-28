import { TableCell } from "@mui/material";
import { withStyles } from "@mui/styles";

const StyledTableCell = withStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        backgroundColor: '#F5F5F5',
        fontSize: 14,
        fontWeight: 500,
        // textTransform: 'uppercase',
    },
}))(TableCell)

function TableHeaderCell({ ...props }) {
    return <StyledTableCell {...props} />
}

export { TableHeaderCell }