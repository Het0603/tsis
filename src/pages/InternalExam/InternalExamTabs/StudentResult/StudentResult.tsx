import { Button, CardMedia, Grid, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import FilterSemesterDropdown from "src/components/Select/SemesterDropdown";
import CancelIcon from "@mui/icons-material/Cancel";
import FilterCourseDropdown from "src/components/Select/FilterCourseDropdown";
import FilterTestTypeDropdown from "src/components/Select/FilterTestTypeDropdown";
import _ from "lodash";
import { useStudentData } from "src/hooks/useStudentData";
import StudentResultTable from "./StudentResultTable";
import FilterTextInput from "src/components/TextInput/FilterTextInput";
import SearchIcon from '@mui/icons-material/Search';



export default function StudentResults() {
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
    grNumber: "",
  });

  const marksObtained = [
    {
      id: 1,
      GrNumber: "2012MBAADG",
      studentName: "Kapoor Krishna Hareshbhai",
      marksUploadDate: "21-12-2021",
      obtainedMarks: ""
    },
    {
      id: 2,
      GrNumber: "2012MBAADG",
      studentName: "Kapoor Krishna Hareshbhai",
      marksUploadDate: "21-12-2021",
      obtainedMarks: ""
    },
  ];

  const clearFilter = () => {
    setFilters({
      semester: "",
      course: "",
      test_type: "",
      subject: "",
      grNumber: "",
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

  const [marksState, setMarksState] = useState(marksObtained);

  const handleGRNumberChange = (event) => {
    const newGRNumber = event.target.value;
    setFilters({
      ...filters,
      grNumber: newGRNumber,
    });
  };



  return (
    <>
      <div>
        <Grid container spacing={2} mt={2}>
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
            <FilterTextInput
              name="grNumber"
              title="GR No."
              value={filters.grNumber || ""}
              onChange={handleGRNumberChange}
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
            <StudentResultTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
