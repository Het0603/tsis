import { useMemo } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { parsePathname } from "./parsePathname";
import { Breadcrumbs, Typography } from "@mui/material";
import BaseFontAwesomeIcon from "../Icons/BaseFontAwesomeIcon";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import RouterLink from "../Router/RouterLink";
import React from "react";
import PropTypes from "prop-types";

PageBreadcrumbs.propsTypes = {
  breadcrumb: PropTypes.string,
};

function PageBreadcrumbs({ breadcrumb }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const crumbs = useMemo(() => {
    const paths = parsePathname(location.pathname);
    if (breadcrumb) {
      paths[paths.length - 1].title = breadcrumb;
    }
    //special cases
    // const isCheckInPage = location.pathname.includes('');

    // if (isCheckInPage) {
    //   paths[paths.length - 1] = {
    //     isLink: true,
    //     title: "Enrollment Schedule",
    //     href: "/enrollment-schedule",
    //   };
    // }

    return paths;
  }, [breadcrumb, location.pathname]);

  if (crumbs.length <= 1) {
    return null;
  }

  // Include the date in the schedule link so it goes back to the original day that was being viewed (instead of today).
  const getFullHref = (crumb) => {
    const isCheckInPage =
      location.pathname.includes("/schedule/class") ||
      location.pathname.includes("/schedule/enrollment");

    if (isCheckInPage && crumb.title === "Schedule") {
      const search = buildUrlSearchFromObj({ date: searchParams.get("date") });

      return `${crumb.href}${search}`;
    }

    return crumb.href;
  };

  return (
    <Breadcrumbs
      aria-label="Navigation breadcrumbs"
      sx={{
        // marginTop: 3,
        fontSize: 20,
        // marginLeft: 12,
        // marginRight: 12,
      }}
      separator={
        <BaseFontAwesomeIcon isSquare icon={faChevronRight} size="sm" />
      }
    >
      {crumbs.map((crumb) =>
        crumb.isLink ? (
          <RouterLink key={crumb.href} to={getFullHref(crumb)}>
            <Typography
              color="textPrimary"
              sx={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              {crumb.title}
            </Typography>
          </RouterLink>
        ) : (
          <Typography
            color="textPrimary"
            sx={{
              fontSize: 20,
              fontWeight: "bold",
            }}
            key={crumb.href}
          >
            {crumb.title}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}

export default PageBreadcrumbs;
