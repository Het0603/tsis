import { Box, Grid, Typography, useTheme } from "@mui/material";
import DashboardPage from "../DashboardPage";
import { SetStateAction, useState } from "react";
import PageTitleText from "src/components/Typography/PageTitleText";
import { Tabs, Tab } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { withStyles } from "@mui/styles";
import ProfileTab from "./StaffProfileTab";
import NewInquiryCard from "./StudentDashboardCard";

const CustomTabs = withStyles((theme) => ({
  root: {
    position: "relative", // Set the parent container to relative positioning

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      borderBottom: `7px solid #F6F5F5`, // Color of the end-to-end line
    },
  },
  indicator: {
    backgroundColor: `var(--college-blue, #2C3878)`, // Color of the active tab indicator

    position: "absolute",
    bottom: 0,
    left: 0,
    height: "7px",
    radius: "20px", // Adjust the height of the active line
  },
}))(Tabs);

function StaffDashboard() {
  const title = `Staff Dashboard`;

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setActiveTab(newValue);
  };

  return (
    <DashboardPage documentTitle={title} hideBreadcrumbs>
      <NewInquiryCard
        minHeight={50}
        title={""}
        sx={{
          borderRadius: "20px",
          background: `var(--college-withe, #FFF)`,
          boxShadow: `0px 4px 17px 0px rgba(0, 0, 0, 0.10)`,
        }}
      >
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid item xs={12} md={2} spacing={2}>
            <Avatar
              sx={{
                width: "120px",
                height: "120px",
                border: "1px solid #ADD8E6",
              }}
            >
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid item xs={12} md={4}>
            <PageTitleText
              value="Vora Chatterji Rajvee"
              fontSize={36}
              fontWeight="bold"
            ></PageTitleText>
          </Grid>
          <Grid item xs={12} md={6}>
            <NewInquiryCard
              title={""}
              sx={{
                borderRadius: "20px",
              }}
              border={`0.3px solid var(--college-grey-1, #9C9C9C)`}
              minHeight={50}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="subtitle1"
                    color={"gray"}
                    sx={{ fontSize: "15px" }}
                  >
                    Employee Number
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: "bold" }}
                  >
                    2023
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3} >
                  <Typography
                    variant="subtitle1"
                    color={"gray"}
                    sx={{ fontSize: "15px" }}
                  >
                    Designation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: "bold" }}
                  >
                    Staff
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="subtitle1"
                    color={"gray"}
                    sx={{ fontSize: "15px" }}
                  >
                    Teaching Semester
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: "bold" }}
                  >
                    2 Sem
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography
                    variant="subtitle1"
                    color={"gray"}
                    sx={{ fontSize: "15px" }}
                  >
                    Teaching Subject
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", fontWeight: "bold" }}
                  >
                    Subject Name
                  </Typography>
                </Grid>
              </Grid>
            </NewInquiryCard>
          </Grid>
        </Grid>
      </NewInquiryCard>
      <Box marginTop={5}>
        <CustomTabs
          value={activeTab}
          onChange={handleChange}
          aria-label="Tabs"
          indicatorColor="primary"
          textColor="inherit"
          variant="standard"
        >
          <Tab
            label="Profile"
            sx={{
              color: "var(--college-grey-1, #9C9C9C)",
              fontSize: 17,
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          {/* <Tab label="Fees Record" /> */}
        </CustomTabs>
        {/* Render the corresponding content for the selected tab */}
        {activeTab === 0 && <ProfileTab />}
      </Box>
    </DashboardPage>
  );
}

export default StaffDashboard;
