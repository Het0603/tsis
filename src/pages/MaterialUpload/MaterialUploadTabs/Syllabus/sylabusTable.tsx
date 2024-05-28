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
import VisibilityIcon from '@mui/icons-material/Visibility';

const syllabusTable = [
    {
        id: 1,
        course: "IMA",
        date: "21-12-2021",
        Semester: "Semester-1",
        subjectCode: "123456",
        subjectName: "Business Management",
        rollNo: "PDF(2)"
    },
    {
        id: 2,
        course: "IMA",
        date: "22-12-2021",
        Semester: "Semester-1",
        subjectCode: "123456",
        subjectName: "Business Management",
        rollNo: "JPEG (10)"
    },
];

export default function UploadSyllabusTable() {

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
                                        Upload Date
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Course
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Semester
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Subject Code
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        Subject Name
                                    </StyledTableCell>
                                    <StyledTableCell align="center" width={150}>
                                        File Type
                                    </StyledTableCell>
                                    <StyledTableCell align="center"></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {syllabusTable?.map((row) => {
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
                                                    {row.subjectCode}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    {row.subjectName}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    {" "}
                                                    {row.rollNo}
                                                </StyledTableCell>
                                                <StyledTableCell align="center" width={150}>
                                                    <IconButton>
                                                        <VisibilityIcon style={{ color: `var(--college-blue, #2C3878)` }} />
                                                    </IconButton>
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
