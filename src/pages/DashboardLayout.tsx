import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import LoadingScreen from "src/components/LoadingScreen/LoadingScreen";
import SGITrademarkFooter from "src/components/SGITrademarkFooter/SGITrademarkFooter";
import { APP_BAR_HEIGHT, SIDE_DRAWER_WIDTH_DESKTOP } from "src/config/constant";
import Header from "src/layouts/Header";
import NavigationMenu from "src/layouts/NavigationMenu";

export default function DashboardLayout() {
  const theme = useTheme();
  const location = useLocation();

  const isLessThanSmBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  // change md to ld
  const isMoreThanLgBreakpoint = useMediaQuery(theme.breakpoints.up("lg"));
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    if (isMobileDrawerOpen) {
      setIsMobileDrawerOpen(false);
    }
  }, [location.pathname]);

  const [data, setData] = useState({});
  const [selectedRoute, setSelectedRoute] = useState("");

  useEffect(() => {
    setData({
      ...data,
      master: "test",
    });
  }, []);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header
          onMenuClick={() => {
            setIsMobileDrawerOpen(true);
          }}
        />

        <main
          style={{
            display: "flex",
            flex: "1 0 auto",
            paddingTop: APP_BAR_HEIGHT,
          }}
        >
          <NavigationMenu
            isDrawerOpen={isMobileDrawerOpen}
            onDrawerClose={() => {
              setIsMobileDrawerOpen(false);
            }}
          />

          <div
            style={{
              width: "100%",
              flexGrow: 1,
              paddingLeft: isMoreThanLgBreakpoint
                ? SIDE_DRAWER_WIDTH_DESKTOP
                : 0,
              paddingBottom: theme.spacing(15),
            }}
          >
            <Suspense fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </div>
        </main>

        <SGITrademarkFooter
          boxProps={{
            pl: isMoreThanLgBreakpoint ? `${SIDE_DRAWER_WIDTH_DESKTOP}px` : 0,
          }}
        />
      </div>
    </>
  );
}
