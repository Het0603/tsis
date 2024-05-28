import React, { useState } from "react";
import { Button, Collapse, ListItem } from "@mui/material";

import PropTypes from "prop-types";
import RouterNavLink from "src/components/Router/RouterNavLink";
import BaseFontAwesomeIcon from "src/components/Icons/BaseFontAwesomeIcon";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataId: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.object,
  isBeta: PropTypes.bool,
  //   isExternalLink: PropTypes.bool,
  //   isNewFeature: PropTypes.bool,
  open: PropTypes.bool,
  //   relativeToBusiness: PropTypes.bool,
  title: PropTypes.string.isRequired,
  //   unreadMessageCount: PropTypes.number,
};

const useStyles = makeStyles((theme) => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: 20,
    fontSize: 20,
  },
  title: {
    marginRight: "auto",
  },
  button: {
    borderRadius: "15px",
    width: "100%",
    justifyContent: "center",
    padding: 10,
    color: "#9C9C9C",
    fontSize: 13,
    fontWeight: theme.typography.fontWeightSemibold,
    textTransform: "none",
    letterSpacing: 0,
    "&.active": {
      backgroundColor: "#2C3878",
      borderRadius: "15px",
      color: "var(--college-withe, #FFF)",
      "& $title": {
        fontWeight: theme.typography.fontWeightSemibold,
      },
      "& $icon": {
        color: `var(--college-withe, #FFF)`,
      },
    },
  },
  beta: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: "0 4px",
    borderRadius: 4,
    textTransform: "uppercase",
    fontSize: "12px",
  },
  messageCount: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: "0 4px",
    textTransform: "uppercase",
    fontSize: "12px",
    height: "20px",
    width: "20px",
    textAlign: "center",
    borderRadius: "50%",
    position: "relative",
    left: "-90px",
  },
}));

function NavItem({
  className,
  dataId,
  depth,
  href,
  icon: Icon,
  //   isBeta = false,
  isExternalLink = false,
  //   isNewFeature = false,
  open: defaultIsOpen = false,
  //   relativeToBusiness = false,
  title,
  //   unreadMessageCount = 0,
  children,
  ...rest
}) {
  const classes = useStyles();
  // added !defaultIsOpen in state
  const [isOpen, setIsOpen] = useState(!defaultIsOpen);
  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }
  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        disableGutters
        className={clsx(classes.item, className)}
        {...rest}
      >
        <Button
          data-id={dataId}
          style={style}
          className={classes.button}
          onClick={handleToggle}
        >
          {Icon && (
            <BaseFontAwesomeIcon
              isSquare
              className={classes.icon}
              icon={Icon}
            />
          )}

          <span className={classes.title}>{title}</span>

          {isOpen ? (
            <BaseFontAwesomeIcon isSquare icon={faChevronUp} />
          ) : (
            <BaseFontAwesomeIcon isSquare icon={faChevronDown} />
          )}
        </Button>
        <Collapse in={isOpen}>{children}</Collapse>
      </ListItem>
    );
  }
  const linkProps = {
    className: clsx(classes.button, `depth-${depth}`),
    style,
  };

  if (isExternalLink) {
    linkProps.href = href;
  } else {
    linkProps.end = href === "/"; // stricter path matching for active class name , only true for root path not for others
    linkProps.to = href;
  }

  return (
    <ListItem
      // disableGutters
      className={clsx(classes.item, className)}
      key={title}
      {...rest}
    >
      <Button
        {...linkProps}
        component={isExternalLink ? "a" : RouterNavLink}
        data-id={dataId}
        sx={{
          width: "100%",
        }}
      >
        {Icon && (
          <BaseFontAwesomeIcon isSquare className={classes.icon} icon={Icon} />
        )}
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  );
}

export default NavItem;
