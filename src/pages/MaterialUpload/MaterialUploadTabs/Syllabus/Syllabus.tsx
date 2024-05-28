import { Button, CardMedia, DialogContent, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import FilterSemesterDropdown from "src/components/Select/SemesterDropdown";
import CancelIcon from "@mui/icons-material/Cancel";
import NewInquiryCard from "../../../Dashboard/StudentDashboardCard";
import FilterCourseDropdown from "src/components/Select/FilterCourseDropdown";
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
import { FloorDropdown } from "src/components/Dropdown/FloorDropdown";
import { RollNumberDropdown } from "src/components/Dropdown/RollnumberDropdown";
import FilterSubjectTypeDropdown from "src/components/Select/FilterSubjectDropdown";
import { BootstrapDialog } from "src/components/Dialog/BoostrapDialog";
import BootstrapDialogTitle from "src/components/Dialog/BoostrapDialogTitle";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import FilterFileTypeDropdown from "../../../../components/Select/FilterFileTypeDropdown";
import FilterSubjectCodeDropdown from "src/components/Select/FilterSubjectCodeDropdown";
import UploadSyllabusTable from "./sylabusTable";
import { SubjectDropdown } from "src/components/Dropdown/SubjectDropdown";
import { SubjectCodeDropdown } from "src/components/Dropdown/SubjectCodeDropdown";
import PaperUploadForm from "../../../InternalExam/InternalExamTabs/ExamPaper/PaperUploadForm";


export default function Syllabus() {
  const theme = useTheme();
  const isLessThanSmBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const [documents, setDocuments] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };
  const [filters, setFilters] = useState({
    semester: "",
    course: "",
    test_type: "",
    subject: "",
    subjectCode: "",
    fileType: ""
  });

  const clearFilter = () => {
    setFilters({
      semester: "",
      course: "",
      test_type: "",
      subject: "",
      subjectCode: "",
      fileType: ""
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
  };
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleDrop = (acceptedFiles: any) => {
    // Filter accepted files to only include ".pdf" and ".jpg" files
    const filteredFiles = acceptedFiles.filter((file: any) =>
      file.type.includes("pdf") || file.type.includes("jpeg") || file.type.includes("jpg")
    );
  
    if (filteredFiles.length > 0) {
      // Set the file URL for preview
      setFileUrl(URL.createObjectURL(filteredFiles[0]));
  
      // Update the documents array with the filtered files
      const updatedDocuments = filteredFiles.map((file: any) => {
        return {
          file,
          type: file.type.includes("pdf") ? "pdf" : "jpg",
          url: URL.createObjectURL(file),
        };
      });
  

      setDocuments((prevDocuments) => [...prevDocuments, ...updatedDocuments]);
      setErrorMessage(null);
    } else {
      // Display an error or message indicating that only .pdf and .jpg files are allowed
      console.log("Only .pdf and .jpg files are allowed.");
      setErrorMessage("Only .pdf and .jpg files are allowed.");
    }
  }
  const handlePreview = () => {
    if (fileUrl) {
      window.open(fileUrl, "_blank");
    }
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log("Uploading documents:", documents);
    if (documents) {
      // let temp: any = [];
      // // values.documents = temp;
      // temp.push({)
      values.documents.push({
        document: documents,
      });
    }

    // Clear the form
    setDocuments([]);
  };

  const handleRemoveDocument = (indexToRemove) => {
    setDocuments((prevDocuments) => {
      const newDocuments = [...prevDocuments];
      newDocuments.splice(indexToRemove, 1);
      return newDocuments;
    });
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
                Add Syllabus
              </Button>
            </Grid>

          </Grid>
        </Grid>
        <Typography variant="subtitle1"
          sx={{ fontSize: "36px", fontWeight: "bold", marginLeft: "20px", marginBottom: "-20px" }}>
          Upload History
        </Typography>
        <Grid container spacing={2} mt={2} sx={{ padding: "20px" }}>
          <Grid item xs={12} md={2}>
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
          <Grid item xs={12} md={2}>
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
          <Grid item xs={12} md={2}>
            <FilterSubjectCodeDropdown
              name="subjectCode"
              value={filters.subjectCode || ""}
              onChange={(e: any, v: any) => {
                setFilters({
                  ...filters,
                  subjectCode: e,
                });
              }}
              title="Subject Code"
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
          <Grid item xs={12} md={1.5}>
            <FilterFileTypeDropdown
              name="fileType"
              value={filters.fileType || ""}
              onChange={(e: any, v: any) => {
                setFilters({
                  ...filters,
                  fileType: e,
                });
              }}
              title="File Type"
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
            <UploadSyllabusTable />
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
            Upload Syllabus
          </BootstrapDialogTitle>
          <DialogContent>
            <Grid container mt={3} spacing={1}>
              <Grid item xs={12} md={12}>
                  <Grid container>
                    <FormSectionRow>
                      <FormSectionItem lg={4} md={4} xl={6}>
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
                      <FormSectionItem lg={4} md={4} xl={6}>
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
                      <FormSectionItem lg={4} md={4} xl={6}>
                        <SubjectCodeDropdown
                          props={{
                            name: "subjectCode",
                            value: values.subjectCode,
                            onChange: handleChange,
                            placeholder: "Select",
                            size: "sm",
                          }}
                          label={"Subject Code"}
                        />
                      </FormSectionItem>
                      <FormSectionItem lg={4} md={4} xl={6}>
                        <SubjectDropdown
                          props={{
                            name: "subject",
                            value: values.subject,
                            onChange: handleChange,
                            placeholder: "Select",
                            size: "sm",
                          }}
                          label={"Subject Name"}
                        />
                      </FormSectionItem>
                    </FormSectionRow>
                    <FormSectionItem lg={12} md={12} xl={12}>
                    <PaperUploadForm
                        handleDrop={handleDrop}
                        documents={documents}
                        handleUpload={handleUpload}
                        handlePreview={handlePreview}
                        fileUrl={fileUrl}
                        removeDocument={handleRemoveDocument}
                        errorMessage={errorMessage}
                      />
                    </FormSectionItem>
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
