import {
  IconButton,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  DialogContent,
} from "@mui/material";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import FilterCourseDropdown from "src/components/Select/CourseDropdown";
import FilterSemesterDropdown from "src/components/Select/SemesterDropdown";
import FilterTextInput from "src/components/TextInput/FilterTextInput";
import PageTitleText from "src/components/Typography/PageTitleText";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  StyledTableCell,
  StyledTableRow,
} from "src/components/Table/TableStyle";
import { BootstrapDialog } from "src/components/Dialog/BoostrapDialog";
import BootstrapDialogTitle from "src/components/Dialog/BoostrapDialogTitle";
import PhotoUpload from "src/components/ImageUpload/PhotoUpload";

export default function EventPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} mt={2}>
          <Button
            onClick={handleOpen}
            variant="contained"
            fullWidth
            sx={{
              padding: "8px",
              borderRadius: "10px",
              background: "var(--college-blue, #2C3878);",
            }}
          >
            Add New Event
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={12}>
          <PageTitleText
            value={"Event History"}
            sx={{ fontSize: "30px", marginTop: "40px", fontWeight: 600 }}
          ></PageTitleText>
        </Grid>
        <Grid item xs={12} md={2} mt={3}>
          <FilterTextInput type="date" title="Date" name="date" />
        </Grid>
        <Grid item xs={12} md={2} mt={3} ml={3}>
          <FilterCourseDropdown
            name="course"
            title="Course"
            // value=
            // onChange=
          />
        </Grid>
        <Grid item xs={12} md={2} mt={3} ml={3}>
          <FilterSemesterDropdown
            name="semester"
            title="Semester"
            // value=
            // onChange=
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={1}
          mt={3}
          ml={2}
          display={"flex"}
          alignItems={"center"}
        >
          <IconButton size="large">
            <SearchIcon
              sx={{
                fontSize: "35px",
                color: "#2C3878",
              }}
            />
          </IconButton>
          <IconButton size="large">
            <CancelIcon
              sx={{
                fontSize: "35px",
                color: "#808080",
              }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={12} mt={2}>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: `0px 5.338235378265381px 14.235294342041016px 0px rgba(0, 0, 0, 0.10)`,
            }}
          >
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Date</StyledTableCell>
                  <StyledTableCell align="left">Course</StyledTableCell>
                  <StyledTableCell align="left">Semester</StyledTableCell>
                  <StyledTableCell align="left">Event Name</StyledTableCell>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow hover>
                  <StyledTableCell align="left">12-12-2021</StyledTableCell>
                  <StyledTableCell align="left">All</StyledTableCell>
                  <StyledTableCell align="left">1st Sem</StyledTableCell>
                  <StyledTableCell align="left">
                    Annual Function
                  </StyledTableCell>
                  <StyledTableCell align="left">Text</StyledTableCell>
                  <StyledTableCell align="left">
                    <IconButton>
                      <DeleteIcon sx={{ color: "red" }} />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        open={open}
        aria-labelledby="popup"
      >
        <BootstrapDialogTitle id="popup" onClose={handleClose}>
          <Typography fontSize="24px" fontWeight={700} ml={1}>
            New Event
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent id="popup">
          <Grid container padding={1} width={"100%"} spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography fontSize="16px" color={"#8D8D8D"}>
                Create event for upcoming months
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <FilterTextInput type="date" title="Date" name="date" />
            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <FilterTextInput type="text" title="Title" name="title" />
            </Grid>
            <Grid item xs={12} md={12} mt={2}>
              <FilterTextInput
                type="text"
                title="Description"
                name="description"
              />
            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <FilterCourseDropdown
                name="course"
                title="Course"
                // value=
                // onChange=
              />
            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <FilterSemesterDropdown
                name="semester"
                title="Semester"
                // value=
                // onChange=
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            mt={1}
          >
            <Grid item xs={12} md={3} display="flex" alignItems="flex-end">
              <Button
                variant={"outlined"}
                sx={{
                  width: "100%",
                  height: "50%",
                  color: "var(--school-gray, #8D8D8D)",
                  borderColor: "var(--school-gray, #8D8D8D)",
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} md={3} >
              <Button
                variant={"contained"}
                sx={{
                  width: "100%",
                  height: "50%",
                  background:"#2C3878",
                }}
                // onClick={}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
