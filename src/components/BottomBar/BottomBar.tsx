import { AppBar, Typography } from "@mui/material";

export default function BottomBar() {
  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        sx={{ top: "auto", bottom: 0, zIndex: 0, background: "#F8F8F8" }}
      >
        <Typography padding={1} textAlign={"center"} fontSize={"13px"}>
          SGI ERP - Version 1.1
          {/* - &copy; {moment().format("YYYY")} */}
        </Typography>
      </AppBar>
    </>
  );
}
