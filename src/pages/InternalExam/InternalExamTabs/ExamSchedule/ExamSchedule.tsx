import { Button, CardMedia, DialogContent, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import FilterSemesterDropdown from "src/components/Select/SemesterDropdown";
import CancelIcon from "@mui/icons-material/Cancel";
import NewInquiryCard from "../../../Dashboard/StudentDashboardCard";
import FilterCourseDropdown from "src/components/Select/FilterCourseDropdown";
import FilterTestTypeDropdown from "src/components/Select/FilterTestTypeDropdown";
import ExamScheduleTable from "./ExamScheduleTable";
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
import TimeTextField from "src/components/Select/TimeInput";
import { SubjectDropdown } from "src/components/Dropdown/SubjectDropdown";
import { BootstrapDialog } from "src/components/Dialog/BoostrapDialog";
import BootstrapDialogTitle from "src/components/Dialog/BoostrapDialogTitle";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function ExamSchedule() {
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
  });

  const clearFilter = () => {
    setFilters({
      semester: "",
      course: "",
      test_type: "",
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
  const [timeTableDialog, setTimeTableDialog] = useState(false);
  const handleCloseTimeTableDialog = () => {
    setTimeTableDialog(false);
    setRows([{}]);
  };
  const [rows, setRows] = useState([{}]); // Initial state with one empty row

  const handleAddRow = () => {
    if (rows.length < 3) {
      setRows([...rows, {}]); // Add a new empty row to the list
    }
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
                Add New Schedule
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="subtitle1"
          sx={{ fontSize: "36px", fontWeight: "bold", marginLeft: "20px", marginBottom: "-20px" }}>
          Exam History
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
          <Grid item xs={12} md={3}>
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
          <Grid item xs={12} md={3}>
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
            <ExamScheduleTable />
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
            Create Exam Schedule
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
                  </FormSectionRow>

                  <NewInquiryCard
                    title={""}
                    border={`1px solid var(--college-grey-1, #9C9C9C)`}
                    sx={{
                      borderRadius: "20px",
                      width: "100%",
                    }}
                  >
                    {rows.map((row, index) => (
                      <FormSectionRow key={index}>
                        <FormSectionItem lg={4} md={4} xl={4}>
                          <TextInput
                            name={`date_${index}`}
                            label="Date"
                            value={row.date}
                            type="date"
                            onChange={handleChange}
                            error={Boolean(errors[`date_${index}`])}
                            helpertext={errors[`date_${index}`]}
                          />
                        </FormSectionItem>
                        <FormSectionItem lg={4} md={4} xl={4}>
                          <TimeTextField />
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
                      </FormSectionRow>
                    ))}
                    {rows.length < 3 && (
                      <IconButton onClick={handleAddRow}
                        sx={{
                          color: `var(--college-blue, #2C3878)`,
                          // Add any other custom styling you need
                        }}>
                        <AddCircleIcon />
                      </IconButton>
                    )}
                  </NewInquiryCard>
                  <FormSectionRow justifyContent={"flex-end"} spacing={2}>
                    <FormSectionItem lg={3} md={3} xl={3}>
                      <CancelButton
                        disabled={isSubmitting}
                        onClick={() => {
                          handleCloseTimeTableDialog(); // Close the dialog when the "Clear" button is clicked
                        }}
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
