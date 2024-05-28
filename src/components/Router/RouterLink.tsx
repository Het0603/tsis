import { Box, BoxProps } from "@mui/material";
import { forwardRef, useEffect } from "react";
import { Link, LinkProps } from "react-router-dom";

export interface RouterLinkProps extends LinkProps {
  boxProps?: Omit<BoxProps, "component" | "ref">;
  enableUnderline?: boolean;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => {
    const {
      boxProps,
      enableUnderline = false,
      style,
      to,
      ...linkProps
    } = props;
    const isObject = typeof to === "object";

    const pathname = isObject ? to.pathname : to;
    const linkPath = pathname;
    const linkTo = isObject ? { ...to, pathname: linkPath } : linkPath;

    const styleProp = {
      textDecoration: enableUnderline ? "underline" : "none",
      ...style,
    };

    return (
      <Box
        color={"black"}
        {...boxProps}
        component={Link}
        ref={ref}
        to={linkTo}
        {...linkProps}
        style={styleProp}
      ></Box>
    );
  }
);

export default RouterLink;
