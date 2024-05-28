import {
    Button,
    Chip,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
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
import NewInquiryCard from "src/pages/Dashboard/StudentDashboardCard";
import { Stack } from "@mui/joy";

const studentResultTable = [
    {
        id: 1,
        name: "Shree Jayesh Parmar",
        subjectCode: "123456",
        subjectName: "Business Management",
        totalMarks: "70",
        obtainedMarks: "0",
        examStatus: "Present",

    },
    {
        id: 2,
        subjectCode: "123456",
        subjectName: "Business Management",
        totalMarks: "70",
        obtainedMarks: "0",
        examStatus: "Present",

    },
    {
        id: 3,
        subjectCode: "123456",
        subjectName: "Business Management",
        totalMarks: "70",
        obtainedMarks: "0",
        examStatus: "Present",

    },
    {
        id: 4,
        subjectCode: "123456",
        subjectName: "Business Management",
        totalMarks: "70",
        obtainedMarks: "5",
        examStatus: "Present",

    },
    {
        id: 5,
        subjectCode: "123456",
        subjectName: "Business Management",
        totalMarks: "70",
        obtainedMarks: "5",
        examStatus: "Present",

    },
    {
        id: 6,
        subjectCode: "123456",
        subjectName: "Business Management",
        totalMarks: "70",
        obtainedMarks: "6",
        examStatus: "Present",

    },

];

const totalMarks = studentResultTable.reduce((total, student) => total + Number(student.totalMarks), 0);
const totalObtainedMarks = studentResultTable.reduce((total, student) => total + Number(student.obtainedMarks), 0);
const passingThreshold = (40 / 100) * totalMarks;
let studentResultStatus = "";
if(totalObtainedMarks>=passingThreshold) {
    studentResultStatus = 'Pass'
}
else {
    studentResultStatus = 'Fail'
}

export default function StudentResultTable({ }) {

    return (
        <>
            <NewInquiryCard
                title={""}
                border={`1px solid var(--college-grey-1, #9C9C9C)`}
                sx={{
                    borderRadius: "20px",
                }}
            >
                <Stack direction="row" justifyContent="space-between" padding="10px">
                    <Typography sx={{ marginBottom: 5 }} variant="h4" flexGrow={1}>
                        {studentResultTable[0].name}
                    </Typography>
                    <Grid item xs={12} md={2}>
                        <Button
                            sx={{
                                borderRadius: `10px`,
                                background: `var(--college-blue, #2C3878)`,
                                boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)`,
                                padding: '10px'
                            }}
                            fullWidth
                            variant="contained"
                        >
                            Print
                        </Button>
                    </Grid>
                </Stack>
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
                                            Subject Code
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                            Subject Name
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                            Total Marks
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                            Obtained Marks
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                            Exam Status
                                        </StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {studentResultTable?.map((row) => {
                                        return (
                                            <Fragment key={row.id}>
                                                <StyledTableRow hover>
                                                    <StyledTableCell align="center" width={150}>
                                                        {row.subjectCode}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" width={150}>
                                                        {row.subjectName}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" width={150}>
                                                        {row.totalMarks}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" width={150}>
                                                        {row.obtainedMarks}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="center" width={150}>
                                                        {row.examStatus}
                                                    </StyledTableCell>
                                                </StyledTableRow>
                                            </Fragment>
                                        );
                                    })}
                                    <StyledTableRow hover>
                                        <StyledTableCell align="center" width={150}>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150} sx={{ fontWeight: "bold" }}>
                                            Total
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150} sx={{ fontWeight: "bold" }}>
                                            {totalMarks}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150} sx={{ fontWeight: "bold" }}>
                                            {totalObtainedMarks}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow hover>
                                        <StyledTableCell align="center" width={150}>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150} sx={{ fontWeight: "bold" }}>
                                            Result: {studentResultStatus}
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" width={150}>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </NewInquiryCard>
        </>
    );
}
