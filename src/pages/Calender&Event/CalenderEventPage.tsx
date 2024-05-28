import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import DashboardPage from "../DashboardPage";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitleText from "src/components/Typography/PageTitleText";
import { Tabs, Tab } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import { withStyles } from "@mui/styles";
import Calender from "./CalenderPage";
import EventPage from "./EventPage";


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

export default function CalenderEventPage() {
  const title = `Calender & Events`;

  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setActiveTab(newValue);
  };
  return (
    <>
      <DashboardPage documentTitle={title} hideBreadcrumbs>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <CustomTabs
              value={activeTab}
              onChange={handleChange}
              aria-label="Tabs"
              indicatorColor="primary"
              textColor="inherit"
              variant="standard"
            >
              <Tab
                label="Event "
                sx={{
                  color: "var(--college-grey-1, #9C9C9C)",
                  fontSize: 17,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              />
              <Tab
                label="Calender"
                sx={{
                  color: "var(--college-grey-1, #9C9C9C)",
                  fontSize: 17,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              />
            </CustomTabs>
            {/* Render the corresponding content for the selected tab */}
            {activeTab === 0 && <EventPage />}
            {activeTab === 1 && <Calender />}
          </Grid>
        </Grid>
      </DashboardPage>
    </>
  );
}
