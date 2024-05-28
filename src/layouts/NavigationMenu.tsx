import {
  Box,
  Drawer,
  ModalProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  SIDE_DRAWER_WIDTH_DESKTOP,
  SIDE_DRAWER_WIDTH_MOBILE,
} from "src/config/constant";
import NavContent from "./NavContent";
import Sidebar from "src/components/Sidebar/Sidebar";

interface NavigationMenuProps {
  isDrawerOpen: boolean;
  onDrawerClose: ModalProps["onClose"];
}

export default function NavigationMenu({
  isDrawerOpen,
  onDrawerClose,
}: NavigationMenuProps) {
  const theme = useTheme();
  // change md to lg
  const isLessThanMdBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));

  const content = <NavContent />;
  return isLessThanMdBreakpoint ? (
    <Drawer
      anchor="left"
      // sx={{
      //   width: SIDE_DRAWER_WIDTH_MOBILE,
      //   // backgroundColor: "#F9F9F9",
      // }}
      
      open={isDrawerOpen}
      variant="temporary"
      onClose={onDrawerClose}
    >
      {content}
    </Drawer>
  ) : (
    <Box
      bgcolor={"#F9F9F9"}
      mt={-2}
      height="100%"
      position="fixed"
      // style={{ overflowY: 'auto' }}
      // width={SIDE_DRAWER_WIDTH_DESKTOP}
    >
      {content}
    </Box>
  );
}
