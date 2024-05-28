import {
  AppBar,
  AppBarProps,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MouseEventHandler } from "react";
import { APP_BAR_HEIGHT } from "src/config/constant";
import Avatar from "src/static/Images/college_logo.png";
import Notification from "src/static/Images/notification_bell.png";
import MenuIcon from "@mui/icons-material/Menu";
import RouterLink from "src/components/Router/RouterLink";
import AvatarImage from "src/components/AvatarImageInput/AvatarImage";
import InputSearchMobile from "./InputSearchMobile";
import InputSearch from "./InputSearch";
import UserMenu from "./UserMenu";
interface HeaderProps extends AppBarProps {
  onMenuClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Header({ onMenuClick, ...props }: HeaderProps) {
  const theme = useTheme();
  // change md to lg
  const isLessThanMdBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  const isLessThanXsBreakpoint = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar
      sx={{
        // backgroundColor: "initial",
        // borderBottom: '5px inset #F9F9F9',
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.09)",
        height: "80px",
      }}
      color="inherit"
      {...props}
      elevation={0}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: APP_BAR_HEIGHT,
          padding: "15px 40px",
          border: `1px solid "initial"`,
          // [theme.breakpoints.down('xs')]: {
          //     padding: 15,
          // },
        }}
      >
        {isLessThanMdBreakpoint ? (
          <Box alignItems="center" display="flex">
            <IconButton
              aria-label="Open mobile navigation menu"
              color="inherit"
              edge="start"
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          <Box alignItems="center" display="flex">
            <RouterLink to="/">
              <AvatarImage url={Avatar} height={50} width={150} />
            </RouterLink>
          </Box>
        )}
        {isLessThanMdBreakpoint ? (
          <Box alignItems="center" display="flex">
            <RouterLink to="/">
              <AvatarImage url={Avatar} height={50} width={150} />
            </RouterLink>
          </Box>
        ) : (
          <></>
        )}

        <Box flexGrow={1} />

        {/* {isLessThanXsBreakpoint ? (
          <InputSearchMobile />
        ) : (
          <Box mr="15px" width={60}>
            <InputSearch />
          </Box>
        )}

        <Box mr="10px" width={60}>
          <AvatarImage url={Notification} height={30} width={30} />
        </Box> */}

        <UserMenu />
      </div>
    </AppBar>
  );
}
