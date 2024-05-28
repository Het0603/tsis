import { TableRow } from "@mui/material";
import { withStyles } from "@mui/styles";


const StyledTableRow = withStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.module.background,
        borderBottom: `1px solid grey`,
        "& .MuiCheckbox-root": {
            margin: 10,
            padding: 0,
            border: `1px solid black`,
            borderRadius: 4,
            "& > span > span": {
                backgroundColor: "white",
            },
        },
    },
}))(TableRow)

function TableHeaderRow({ ...props }) {
    return <StyledTableRow {...props} />
}

export { TableHeaderRow }