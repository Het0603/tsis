import {
  Avatar,
  Button,
  MenuItem,
  Menu,
  alpha,
  useTheme,
  useMediaQuery,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { useRef, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/styles";

import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "src/redux/auth/authActions";
import { useNavigate } from "react-router-dom";
import BaseFontAwesomeIcon from "src/components/Icons/BaseFontAwesomeIcon";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import RouterLink from "src/components/Router/RouterLink";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 20,
    marginTop: theme.spacing(1),
    minWidth: 230,
    padding: "15px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
  "& .MuiMenuItem-root": {
    padding: "10px",
    "&:hover": {
      backgroundColor: "#60A9FF",
      padding: "10px",
      borderRadius: "15px",
      color: "white",
    },
  },
}));

export default function UserMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseStyle = () => {
    setAnchorEl(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await dispatch(logout());

    setTimeout(() => {
      location.reload();
    }, 200);
  };
  // const handleLogout = async () => {
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 200);
  // };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<Avatar>A</Avatar>}
        sx={{
          borderRadius: "50px",
          border: `1px solid var(--college-blue, #2C3878)`,
          background: `var(--college-withe, #FFF)`,
          // height: "60px",
          backgroundColor: "#FFF",
          color: "black",
          "&:hover": {
            backgroundColor: "#EEF6FF",
            // color: '#EEF6FF',
          },
        }}
      >
        {!isMobile ? <>Andrew Woston</> : <></>}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseStyle}
      >
        <RouterLink to={"/"}>
          <MenuItem onClick={handleCloseStyle} disableRipple>
            <SpaceDashboardOutlinedIcon fontSize="large" />
            Dashboard
          </MenuItem>
        </RouterLink>
        {/* <RouterLink to={"/master-setting"}>
          <MenuItem onClick={handleCloseStyle} disableRipple>
            <SettingsRoundedIcon />
            Master Settings
          </MenuItem>
        </RouterLink> */}
        <MenuItem onClick={handleLogout} disableRipple>
          <LogoutIcon />
          Logout
        </MenuItem>
      </StyledMenu>
    </>
  );
}
