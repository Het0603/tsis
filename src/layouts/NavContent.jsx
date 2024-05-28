import React from "react";
import { Box } from "@mui/material";

import NavItemTree from "./NavItemTree";
function NavContent() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow={"scroll"}
      height="100%"
    >
      <Box p={1} pb="400px">
        <NavItemTree />
      </Box>
    </Box>
  );
}

export default NavContent;
