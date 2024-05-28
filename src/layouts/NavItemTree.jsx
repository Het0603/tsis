import React from "react";
import { List, ListSubheader } from "@mui/material";
import { matchPath, useLocation } from "react-router-dom";
import useNavItemGroups from "./useNavItemGroups";
import NavItem from "./NavItem";

function NavItemTree() {
  const location = useLocation();
  const navItemGroups = useNavItemGroups();

  return navItemGroups.map((group) => {
    return (
      <List
        disablePadding
        key={group.id}
        subheader={
          <ListSubheader
          // comment addedd
            // disableGutters
            disableSticky
            sx={{
              color: "#7D7D7D",
              // textTransform: "uppercase",
              // marginLeft: "5px",
              // added
              display : 'flex',
              justifyContent : 'center',
              fontWeight: 600,
              lineHeight: "40px",
              fontSize: "13px",
            }}
            data-id={group.id}
          >
            {group.subheader}
          </ListSubheader>
        }
      >
        {renderNavItems({
          items: group.children,
          pathname: location.pathname,
        })}
      </List>
    );
  });
}

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  );
}
function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  if (item.children) {
    const match = matchPath({ path: item.href }, pathname);
    const isOpen = !!match;

    acc.push(
      <NavItem
        dataId={item.id}
        depth={depth}
        icon={item.icon}
        key={item.id}
        open={isOpen}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.children,
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        dataId={item.id}
        depth={depth}
        href={item.href}
        icon={item.icon}
        // isBeta={!!item.isBeta}
        isExternalLink={!!item.isExternalLink}
        // isNewFeature={!!item.isNewFeature}
        key={item.id}
        // relativeToBusiness={item.relativeToBusiness}
        title={item.title}
        // unreadMessageCount={item.unreadMessageCount}
      />
    );
  }

  return acc;
}

export default NavItemTree;
