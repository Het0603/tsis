import { TableRow } from "@mui/material";
import { withStyles } from "@mui/styles";


const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // borderBottom: `1px solid ${theme.palette.module.border}`,
        '&:last-child': {
            borderBottom: 'none',
        },
    }
}))(TableRow)

function TableBodyRow({ ...props }) {
    return <StyledTableRow {...props} />
}

export { TableBodyRow }