import {
    Chip,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Fragment } from "react";
import ListPagination from "src/components/ListPagination/ListPagination";
import LeaveTypeDropdown from "src/components/Select/LeaveTypeDropdown";
import {
    StyledTableCell,
    StyledTableRow,
} from "src/components/Table/TableStyle";
import FilterTextInput from "src/components/TextInput/FilterTextInput";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';

const examSchedule = [
    {
        id: 1,
        course: "IMA",
        date: "21-12-2021",
        test_type: "Unit Test",
        Semester: "Semester-1",
        floor: "2nd Floor",
        rollNo: "MBA 10-A"
    },
    {
        id: 2,
        course: "IMA",
        date: "22-12-2021",
        test_type: "Unit Test",
        Semester: "Semester-1",
        floor: "2nd Floor",
        rollNo: "MBA 10-B"
    },
];

export default function StudentLeaveTable({ }) {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TableContainer
                        component={Paper}
                        sx={{
                            boxShadow: `0px 5.338235378265381px 14.235294342041016px 0px rgba(0, 0, 0, 0.10)`,
                        }}
                    >
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center" width={150}>
                                        Date
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Course
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Semester
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Exam Type
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Floor
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Roll Number
                                    </StyledTableCell>
                                    <StyledTableCell align="center"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {examSchedule?.map((row) => {
                                    return (
                                        <Fragment key={row.id}>
                                            <StyledTableRow hover>
                                                <StyledTableCell align="center" width={150}>
                                                    {row.date}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    {row.course}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    {row.Semester}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    {row.test_type}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    {row.floor}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    {" "}
                                                    {row.rollNo}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    <IconButton>
                                                        <EditIcon style={{ color: '#A687FC' }} />
                                                    </IconButton>
                                                    <IconButton >
                                                        <DeleteIcon style={{ color: '#FF6565' }} />
                                                    </IconButton>
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        </Fragment>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    );
}
