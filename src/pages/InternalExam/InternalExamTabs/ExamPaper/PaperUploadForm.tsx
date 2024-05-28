import { Fragment, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Typography, Grid, IconButton } from "@mui/material";
import Dropzone from "react-dropzone";
import NewInquiryCard from "src/pages/Dashboard/StudentDashboardCard";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles((theme: any) => ({
  root: {
  },
  dropzoneContainer: {
    marginTop: theme.spacing(1),
    maxWidth: "auto",
  },
  dropzone: {
    border: `2px dashed ${theme.palette.grey[400]}`,
    padding: theme.spacing(2),
    background: "#EEF6FF",
    cursor: "pointer",
  },
  documentList: {
    marginTop: theme.spacing(4),
  },
  document: {
    border: `1px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(1),
    // marginBottom: theme.spacing(2),
    borderRadius: "15px",
    marginTop: theme.spacing(1),
  },
  titleField: {
    marginTop: theme.spacing(1),
  },
  uploadButton: {
    marginTop: theme.spacing(1),
  },

}));
export default function PaperUploadForm({ ...props }: any) {
  const classes = useStyles();

  const {
    title,
    handleTitleChange,
    documentType,
    setDocumentType,
    errors,
    handleDrop,
    documents,
    handleUpload,
    handlePreview,
    showImage,
    setShowImage,
    removeDocument,
    errorMessage,
    documentList,
    fileUrl,
  } = props;

  return (
    <>
      <NewInquiryCard
        title={""}
        sx={{
          borderRadius: "20px",
          background: `var(--school-white, #FFF)`,

          /* school shadow */
          boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <div className={classes.root}>
          <div
            className={classes.dropzoneContainer}
            style={{
              textAlign: "center",
            }}
          >
            {errorMessage ? (
              <Typography
                sx={{
                  display: "flex",
                  color: "var(--college-red, #FF5A5A)",
                  // Adjust the styles for the error message as needed
                }}
              >
                {errorMessage}
              </Typography>
            ) : (
              <Typography
                sx={{
                  display: "flex",
                  color: "var(--college-grey-1, #9C9C9C)",
                  // Adjust the styles for the info message as needed
                }}
              >
                Upload only .pdf or .jpg files
              </Typography>
            )}
            <Dropzone onDrop={handleDrop}>
              {({ getRootProps, getInputProps }) => (
                <div className={classes.dropzone} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Grid container spacing={3} direction={'row'} justifyContent={'center'}>
                      <Grid item >
                        <IconButton color="primary">
                          <DriveFolderUploadIcon sx={{ fontSize: '110px', color: "var(--college-blue, #2C3878)", }} />
                        </IconButton>
                      </Grid>
                      <Grid item >
                        <Typography
                          sx={{
                            color: `var(--college-grey-1, #9C9C9C)`,
                            marginTop: '20px',
                            marginBottom: '10px'
                          }}
                        >
                          Drag and drop your file
                        </Typography>
                        <Button
                          variant="text"
                          sx={{
                            // backgroundColor: "#60A9FF",
                            color: "#9C9C9C",
                            borderRadius: "10px",
                            border: `1px solid var(--college-grey-1, #9C9C9C)`,
                            textTransform: "none",
                          }}
                        >
                          Browse File
                        </Button>

                      </Grid>
                    </Grid>

                  </Box>
                </div>
              )}
            </Dropzone>

          </div>

          {documents?.map((doc: any, index: any) => {
            return (
              <Fragment key={index}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Typography>{doc?.file?.name}</Typography>
                  <IconButton
                    onClick={() => handlePreview(doc?.url)} // Use the specific URL from the object
                  >
                    <VisibilityIcon sx={{
                      color: "var(--college-blue, #2C3878)",
                    }} />
                  </IconButton>
                  <IconButton
                    onClick={() => removeDocument(index)} // Call the removeDocument function
                    sx={{
                      color: "#FF0000",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Fragment>
            );
          })}


          <Button
            fullWidth
            className={classes.uploadButton}
            variant="contained"
            sx={{
              backgroundColor: "#9C9C9C",
              color: "#FFFFFF",
              textTransform: "none",
              borderRadius: "10px",
            }}
            onClick={handleUpload}
            disabled={!documents.length > 0}
          >
            Upload
          </Button>

        </div>
      </NewInquiryCard>
    </>
  );
}
