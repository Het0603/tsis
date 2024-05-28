import { Container, Typography, useTheme } from "@mui/material";
import { Helmet } from "react-helmet";
import PageBreadcrumbs from "src/components/PageBreadcrumbs/PageBreadcrumbs";
import PageTitleText from "src/components/Typography/PageTitleText";
import PropTypes from "prop-types";
import React, { ReactNode } from "react";

interface DashboardPageProps {
  avatar?: string;
  avatarUrl?: string;
  breadcrumb?: string;
  documentTitle: string;
  head?: ReactNode;
  hideBreadcrumbs?: boolean;
  pageTitle?: string;
  subTitle?: string;
  children: ReactNode;
}

function DashboardPage({
  breadcrumb,
  documentTitle,
  subTitle,
  head = null,
  hideBreadcrumbs = false,
  pageTitle,
  children,
}: DashboardPageProps): JSX.Element {

  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>{documentTitle}</title>
        {head}
      </Helmet>
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            // paddingLeft: 64,
            // paddingRight: 64,
            // marginTop : -2
          },
        }}
        maxWidth={false}
      >
        {!hideBreadcrumbs && <PageBreadcrumbs breadcrumb={breadcrumb} />}

        {(!!pageTitle || !!subTitle) && (
          <div>
            {pageTitle && (
              <PageTitleText
                // noMarginBottom={!!subTitle}
                value={pageTitle}
                fontSize={25}
              />
            )}

            {subTitle && (
              <Typography sx={{ marginBottom: 30 }} variant="h6">
                {subTitle}
              </Typography>
            )}
          </div>
        )}

        {children}
      </Container>
    </>
  );
}

DashboardPage.propTypes = {
  avatar: PropTypes.string,
  avatarUrl: PropTypes.string,
  breadcrumb: PropTypes.string,
  documentTitle: PropTypes.string.isRequired,
  head: PropTypes.element,
  hideBreadcrumbs: PropTypes.bool,
  pageTitle: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DashboardPage;
