import { Button, CardMedia, DialogContent, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import FilterSemesterDropdown from "src/components/Select/SemesterDropdown";
import CancelIcon from "@mui/icons-material/Cancel";
import NewInquiryCard from "../../../Dashboard/StudentDashboardCard";
import FilterCourseDropdown from "src/components/Select/FilterCourseDropdown";
import FilterTestTypeDropdown from "src/components/Select/FilterTestTypeDropdown";
import CancelButton from "src/components/Buttons/CancelButton";
import PrimaryButton from "src/components/Buttons/PrimaryButton";
import FormSectionItem from "src/components/FormSection/FormSectionItem";
import FormSectionRow from "src/components/FormSection/FormSectionRow";
import TextInput from "src/components/TextInput/TextInput";
import { CourseDropdown } from "src/components/Dropdown/CourseDropdown";
import _ from "lodash";
import { useStudentData } from "src/hooks/useStudentData";
import { TestTypeDropdown } from "src/components/Dropdown/testType";
import { SemesterDropdown } from "src/components/Dropdown/SemesterDropdown";
import FilterSubjectTypeDropdown from "src/components/Select/FilterSubjectDropdown";
import { SubjectDropdown } from "src/components/Dropdown/SubjectDropdown";
import MarksUploadTable from "./UploadMarksTable";
import { StyledTableCell, StyledTableRow } from "src/components/Table/TableStyle";
import { BootstrapDialog } from "src/components/Dialog/BoostrapDialog";
import BootstrapDialogTitle from "src/components/Dialog/BoostrapDialogTitle";
import SearchIcon from '@mui/icons-material/Search';


export default function UploadMarks() {
  const theme = useTheme();
  const isLessThanSmBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };
  const [filters, setFilters] = useState({
    semester: "",
    course: "",
    test_type: "",
    subject: "",
  });

  const clearFilter = () => {
    setFilters({
      semester: "",
      course: "",
      test_type: "",
      subject: "",
    });
  };
  const {
    formik,
    values,
    errors,
    isSubmitting,
    isSubmittingUpdate,
    handleChange,
    handleSubmit,
    isSuccess,
    setFieldValue,
    setValues,
    isValid,
  }: any = useStudentData({});
  const handleCloseForm = () => {
    setShowForm(false);
  };

  const marksObtained = [
    {
      id: 1,
      GrNumber: "2012MBAADG",
      studentName: "Kapoor Krishna Hareshbhai",
      marksUploadDate: "21-12-2021"
    },
    {
      id: 2,
      GrNumber: "2012MBAADG",
      studentName: "Kapoor Krishna Hareshbhai",
      marksUploadDate: "21-12-2021",
    },
  ];

  const [marksState, setMarksState] = useState(marksObtained);

  const handleChangeMarksObtained = (e, rowId) => {
    const { name, value } = e.target;
    const updatedMarks = marksState.map((row) =>
      row.id === rowId ? { ...row, [name]: value } : row
    );
    setMarksState(updatedMarks);
  };
  const [timeTableDialog, setTimeTableDialog] = useState(false);
  const handleCloseTimeTableDialog = () => {
    setTimeTableDialog(false);
  };



  return (
    <>
      <div>
        <Grid container spacing={3} padding={"20px"}>
          <Grid item xs={12} md={12}>
            <Grid item xs={12} md={1.5}>
              <Button
                onClick={() => {
                  setTimeTableDialog(true);
                }}
                sx={{
                  borderRadius: `10px`,
                  background: `var(--college-blue, #2C3878)`,
                  boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)`,
                  padding: '10px',
                  textTransform: 'capitalize',
                }}
                fullWidth
                variant="contained"
              >
                Upload Marks
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="subtitle1"
          sx={{ fontSize: "36px", fontWeight: "bold", marginLeft: "20px", marginBottom: "-20px" }}>
          Upload Marks History
        </Typography>
        <Grid container spacing={2} mt={2} sx={{ padding: "20px" }}>
          <Grid item xs={12} md={2.5}>
            <FilterTestTypeDropdown
              name="test_type"
              value={filters.test_type || ""}
              onChange={(e: any, v: any) => {
                setFilters({
                  ...filters,
                  test_type: e,
                });
              }}
              title="Test Type"
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <FilterSemesterDropdown
              name="semester"
              value={filters.semester || ""}
              onChange={(e: any, v: any) => {
                setFilters({
                  ...filters,
                  semester: e,
                });
              }}
              title="Semester"
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <FilterCourseDropdown
              name="course"
              value={filters.course || ""}
              onChange={(e: any, v: any) => {
                setFilters({
                  ...filters,
                  course: e,
                });
              }}
              title="Course"
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <FilterSubjectTypeDropdown
              name="subject"
              value={filters.subject || ""}
              onChange={(e: any, v: any) => {
                setFilters({
                  ...filters,
                  subject: e,
                });
              }}
              title="Subject Name"
            />
          </Grid>
          <Grid item xs={12} md={1} display="flex" justifyContent="center">
            <IconButton sx={{ border: '2px solid #2C3878', borderRadius: '5px' }}>
              <SearchIcon
                sx={{
                  color: "#2C3878",
                  fontSize: "35px",
                }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={1} display="flex" justifyContent="center">
            <IconButton onClick={clearFilter} sx={{ border: '2px solid #D9D9D9', borderRadius: '5px' }}>
              <CancelIcon
                sx={{
                  color: "#808080",
                  fontSize: "35px",
                }}
              />
            </IconButton>
          </Grid>

          <Grid item xs={12} md={12}>
            <MarksUploadTable />
          </Grid>
        </Grid>
        <BootstrapDialog
          onClose={handleCloseTimeTableDialog}
          aria-labelledby="exam-schedule-dialog"
          open={timeTableDialog}
          maxWidth={"md"}
          PaperProps={{
            style: { borderRadius: 15 },
          }}
        // sx={{
        //   zIndex: 1,
        // }}
        >
          <BootstrapDialogTitle
            id={"exam-schedule-dialog"}
            onClose={handleCloseTimeTableDialog}
          >
            Upload Marks
          </BootstrapDialogTitle>
          <DialogContent>
            <Grid container mt={3} spacing={1}>
              <Grid item xs={12} md={12}>
                
                  <Grid container>
                    <FormSectionRow>
                      <FormSectionItem lg={4} md={4} xl={4}>
                        <CourseDropdown
                          props={{
                            name: "course_preferance",
                            value: values.course_preferance,
                            onChange: handleChange,
                            placeholder: "Select",
                            size: "sm",
                          }}
                          label={"Course Preferance"}
                        />
                      </FormSectionItem>
                      <FormSectionItem lg={4} md={4} xl={4}>
                        <TestTypeDropdown
                          props={{
                            name: "test_type",
                            value: values.course_preferance,
                            onChange: handleChange,
                            placeholder: "Select",
                            size: "sm",
                          }}
                          label={"Test Type"}
                        />
                      </FormSectionItem>
                      <FormSectionItem lg={4} md={4} xl={4}>
                        <SemesterDropdown
                          props={{
                            name: "semester",
                            value: values.semester,
                            onChange: handleChange,
                            placeholder: "Select",
                            size: "sm",
                          }}
                          label={"Semester"}
                        />
                      </FormSectionItem>
                      <FormSectionItem lg={4} md={4} xl={4}>
                        <SubjectDropdown
                          props={{
                            name: "subject",
                            value: values.subject,
                            onChange: handleChange,
                            placeholder: "Select",
                            size: "sm",
                          }}
                          label={"Subject"}
                        />
                      </FormSectionItem>
                      <FormSectionItem lg={4} md={4} xl={4}>
                        <TextInput
                          name="totalMarks"
                          label="Total Marks"
                          value={values.totalMarks}
                          onChange={handleChange}
                          error={Boolean(errors.totalMarks)}
                          helpertext={errors.totalMarks}
                        />
                      </FormSectionItem>
                    </FormSectionRow>
                    <FormSectionRow justifyContent={"center"} spacing={2}>
                      <FormSectionItem lg={12} md={12} xl={12}>
                        <NewInquiryCard
                          title={""}
                          border={`1px solid var(--college-grey-1, #9C9C9C)`}
                          sx={{
                            borderRadius: "20px",
                          }}>
                          <Typography variant="body1" color="initial">{values.course_preference}{values.semester}</Typography>
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
                                        GR No.
                                      </StyledTableCell>
                                      <StyledTableCell align="center" width={150}>
                                        Student Name
                                      </StyledTableCell>
                                      <StyledTableCell align="center" width={150}>
                                        Obtained Marks
                                      </StyledTableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {marksObtained?.map((row) => {
                                      return (
                                        <Fragment key={row.id}>
                                          <StyledTableRow hover>
                                            <StyledTableCell align="center" width={150}>
                                              {row.GrNumber}
                                            </StyledTableCell>
                                            <StyledTableCell align="center" width={150}>
                                              {row.studentName}
                                            </StyledTableCell>
                                            <StyledTableCell align="center" width={150}>
                                              <TextInput
                                                name="obtainedMarks"
                                                value={row[`obtainedMarks-${row.id}`]}
                                                onChange={(e) => handleChangeMarksObtained(e, row.id)}
                                                error={Boolean(errors[`obtainedMarks-${row.id}`])}
                                                helpertext={errors[`obtainedMarks-${row.id}`]}
                                                inputProps={{ min: 0, max: values.totalMarks }}
                                                type="number"
                                              />
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
                        </NewInquiryCard>
                      </FormSectionItem>
                    </FormSectionRow>
                    <FormSectionRow justifyContent={"flex-end"} spacing={2}>
                      <FormSectionItem lg={3} md={3} xl={3}>
                        <CancelButton
                          disabled={isSubmitting}
                          onClick={() => {
                            setTimeTableDialog(false);
                          }} // Close the form on clicking Cancel
                          value="Clear"
                          fullWidth                         >
                        </CancelButton>
                      </FormSectionItem>
                      <FormSectionItem lg={3} md={3} xl={3}>
                        <PrimaryButton
                          loading={isSubmitting || undefined}
                          fullWidth
                          onClick={handleSubmit}
                          value="Save"
                          type="submit"
                        >
                          Save
                        </PrimaryButton>
                      </FormSectionItem>
                    </FormSectionRow>
                  </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </>
  );
}
