import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NewInquiryCard from "src/pages/Dashboard/StudentDashboardCard";
import CakeIcon from "@mui/icons-material/Cake";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const StaffProfileTab = () => {
  const theme = useTheme();
  const isLessThanSmBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box
        alignItems="flex-start"
        display={isLessThanSmBreakpoint ? "flex" : "block"}
        justifyContent="space-between"
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} style={{ marginTop: "15px" }}>
            <NewInquiryCard
              title={""}
              border={`1px solid var(--college-grey-1, #9C9C9C)`}
              sx={{
                borderRadius: "20px",
              }}
            >
              <Grid container direction="column" spacing={2}>
                <Grid item xs={12} md={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    Contact Info
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography
                    variant="subtitle1"
                    color={"#9C9C9C"}
                    sx={{ fontSize: "15px" }}
                  >
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#7D7D7D" }}>
                    rudadiyadhruvi123@gmail.com
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography
                    variant="subtitle1"
                    color={"#9C9C9C"}
                    sx={{ fontSize: "15px" }}
                  >
                    Other Phone Numbers
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#7D7D7D" }}>
                    +91 99988 56230
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography
                    variant="subtitle1"
                    color={"#9C9C9C"}
                    sx={{ fontSize: "15px" }}
                  >
                    home phone number 2
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#7D7D7D" }}>
                    +91 71985 28991, +91 88652 21022
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography
                    variant="subtitle1"
                    color={"#9C9C9C"}
                    sx={{ fontSize: "15px" }}
                  >
                    Address
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#7D7D7D" }}>
                    Mandvi Chowk,Soni Bazar, Java Nagar, Old walled City,
                    Rajkot, Gujarat 360001
                  </Typography>
                </Grid>
              </Grid>
            </NewInquiryCard>
          </Grid>
          <Grid item xs={12} md={5} style={{ marginTop: "15px" }}>
            <Grid container direction={"row"} spacing={3}>
              <Grid item xs={12} md={9} >
                <Box width={"100%"}>
                  <NewInquiryCard
                    minHeight={100}
                    minWidth={100}
                    title={undefined}
                    border={"1px solid #FF6D6D"}
                    sx={{
                      borderRadius: "20px",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"space-around"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <CakeIcon
                        style={{ color: "#F87474", fontSize: "50px" }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#F87474",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        20-09-2019
                      </Typography>
                    </Stack>
                  </NewInquiryCard>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box minWidth={"100%"} >
                  <NewInquiryCard
                    minHeight={100}
                    minWidth={100}
                    title={undefined}
                    border={"1px solid #9C9C9C"}
                    sx={{
                      borderRadius: "20px",
                    }}
                  >
                    <Stack
                      direction={"column"}
                      justifyContent={"space-between"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#000000",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Joining
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#7D7D7D",
                          fontSize: "18px",
                          marginTop:"3px",
                        }}
                      >
                        21/12/2016
                      </Typography>
                    </Stack>
                  </NewInquiryCard>
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box width={"100%"}>
                  <NewInquiryCard
                    minHeight={100}
                    minWidth={100}
                    title={undefined}
                    border={"1px solid #2FB15C"}
                    sx={{
                      borderRadius: "20px",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      display={"flex"}
                      alignItems={"center"}
                      spacing={5}
                    >
                      <BloodtypeIcon
                        style={{ color: "#2FB15C", fontSize: "50px" }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#2FB15C",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        A+
                      </Typography>
                    </Stack>
                  </NewInquiryCard>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box width={"100%"}>
                  <NewInquiryCard
                    minHeight={100}
                    minWidth={100}
                    title={undefined}
                    border={"1px solid #7BA0FF"}
                    sx={{
                      borderRadius: "20px",
                    }}
                  >
                    <Stack
                      direction={"column"}
                      justifyContent={"space-between"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#7BA0FF",
                          fontSize: "13px",
                          fontWeight: "bold",
                          marginRight: "25px",
                        }}
                      >
                        Cast
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#7BA0FF",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        OBC
                      </Typography>
                    </Stack>
                  </NewInquiryCard>
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Box width={"100%"}>
                  <NewInquiryCard
                    minHeight={100}
                    minWidth={100}
                    title={undefined}
                    border={"1px solid #FFAB6D"}
                    sx={{
                      borderRadius: "20px",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      display={"flex"}
                      alignItems={"center"}
                      spacing={2}
                    >
                      <LocationOnIcon
                        style={{ color: "#FFAB6D", fontSize: "50px" }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#FFAB6D",
                          fontSize: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        Indian
                      </Typography>
                    </Stack>
                  </NewInquiryCard>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StaffProfileTab;
