import { Box, Tab, Tabs } from "@mui/material";
import DashboardPage from "../DashboardPage";
import { withStyles } from "@mui/styles";
import { SetStateAction, useState } from "react";
import ExamSchedule from "./InternalExamTabs/ExamSchedule/ExamSchedule";
import ExamArrangement from "./InternalExamTabs/ExamArrangement/ExamArrangement";
import ExamPaper from "./InternalExamTabs/ExamPaper/Exampaper";
import UploadMarks from "./InternalExamTabs/UploadMarks/UploadMarks";
import StudentResults from "./InternalExamTabs/StudentResult/StudentResult";

const tab_array = [
    {
        id: 1,
        name: "Exam Schedule",
    },
    {
        id: 2,
        name: "Exam Arrangements",
    },
    {
        id: 3,
        name: "Exam Papers",
    },
    {
        id: 4,
        name: "Marks Upload",
    },
    {
        id: 5,
        name: "Student Results",
    },
];

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

export default function StudentStudyMaterial() {
    const title = `Student Study Material`;
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event: any, newValue: SetStateAction<number>) => {
        setActiveTab(newValue);
    };

    return (
        <>
            <DashboardPage documentTitle={title}>
                <Box>
                    <CustomTabs
                        value={activeTab}
                        onChange={handleChange}
                        aria-label="Tabs"
                        indicatorColor="primary"
                        textColor="inherit"
                        variant="standard"
                    >
                        {tab_array?.map((row) => {
                            return (
                                <Tab
                                    key={row.id}
                                    label={row.name}
                                    sx={{
                                        color: "var(--college-grey-1, #9C9C9C)",
                                        fontSize: 17,
                                        textTransform: "none",
                                        fontWeight: "bold",
                                    }}
                                />
                            );
                        })}
                    </CustomTabs>
                    {/* Render the corresponding content for the selected tab */}
                    {activeTab === 0 && <ExamSchedule />}
                    {activeTab === 1 && <ExamArrangement />}
                    {activeTab === 2 && <ExamPaper />}
                    {activeTab === 3 && <UploadMarks />}
                    {activeTab === 4 && <StudentResults />}
                </Box>
            </DashboardPage>
        </>
    );
}
