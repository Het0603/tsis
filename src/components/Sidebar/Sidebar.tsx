import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { SIDE_DRAWER_WIDTH_DESKTOP } from "src/config/constant";
import RouterLink from "../Router/RouterLink";
import AvatarImage from "../AvatarImageInput/AvatarImage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Fragment } from "react";

export default function Sidebar({ ...props }) {
  const { icon, title, subheader, route, setSelectedRoute } = props;
  return (
    <Box
      padding={1}
      bgcolor={"#F9F9F9"}
      height="100%"
      position="fixed"
      // style={{ overflowY: 'auto' }}
      width={SIDE_DRAWER_WIDTH_DESKTOP}
    >
      {route?.map((group: any, index: any) => {
        return (
          <Fragment key={index}>
            <List
              key={index}
              sx={{
                padding: 0,
                "& .css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root": {
                  // padding: "10px",
                  borderRadius: "15px",
                  "&:hover": {
                    backgroundColor: "#60A9FF",
                    // padding: "10px",
                    borderRadius: "15px",
                    color: "white",
                  },
                },
              }}
            >
              {group.subheader && (
                <ListSubheader
                  role="presentation"
                  sx={{
                    marginLeft: "-15px",
                    backgroundColor: "#F9F9F9",
                  }}
                >
                  {" "}
                  <ListItemText>
                    <Typography fontWeight={"bold"} fontSize={13}>
                      {group.subheader}
                    </Typography>
                  </ListItemText>
                </ListSubheader>
              )}
              {/* <RouterLink to={group.href} > */}
              <ListItem
                disablePadding
                onClick={() => {
                  setSelectedRoute(group.title);
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{group.icon && <>{group.icon}</>}</ListItemIcon>
                  {group.title && <ListItemText primary={group.title} />}
                </ListItemButton>
              </ListItem>
              {/* </RouterLink> */}
            </List>
          </Fragment>
        );
      })}
    </Box>
  );
}
