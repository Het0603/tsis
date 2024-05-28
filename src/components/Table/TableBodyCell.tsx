import { TableCell } from "@mui/material";
import { withStyles } from "@mui/styles";


const StyledTableCell = withStyles(() => ({
    root: {
        fontSize: 14,
        borderBottom: 'none',
        backgroundColor : 'white'

    },
}))(TableCell);

function TableBodyCell({ ...props }) {
    return <StyledTableCell {...props} />
}

export { TableBodyCell }