import { Box, LinearProgress } from "@mui/material";
import { APP_BAR_HEIGHT } from "src/config/constant";
import { styled } from "@mui/material/styles";

interface LoadingScreenProps {
  isFullScreen?: boolean;
}

const PREFIX = "LoadingScreen";

const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.root}`]: {
    display: "flex",
    height: `calc(100vh - ${APP_BAR_HEIGHT})`,
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.cta}`]: {
    borderRadius: theme.shape.borderRadius,
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    fontSize: 16,
    lineHeight: 1.7,
  },
}));

export default function LoadingScreen({
  isFullScreen = false,
}: LoadingScreenProps) {
  return (
    <Root className={classes.root}>
      <LinearProgress />
    </Root>
  );
}
