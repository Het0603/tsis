import { lazy } from "react";
import { Navigate } from "react-router-dom";

import DashboardLayout from "src/pages/DashboardLayout";
import StaffDashboardLayout from "src/pages/StaffDashboardLayout"
const Login = lazy(() => import("src/pages/Auth/Login"));

const Error404 = lazy(() => import("src/components/Errors/Error404"));
const Error401 = lazy(() => import("src/components/Errors/Error401"));
const Error403 = lazy(() => import("src/components/Errors/Error403"));

const AuthGuard = lazy(() => import("src/Guards/AuthGuard"));
const ForgotPassword = lazy(
  () => import("src/pages/Auth/ForgotPassword/ForgotPassword")
);
const OTPVerify = lazy(() => import("src/pages/Auth/ForgotPassword/OTPVerify"));
const NewPassword = lazy(
  () => import("src/pages/Auth/ForgotPassword/NewPassword")
);

const StaffDashboardPage = lazy(
  () => import("src/pages/Dashboard/Dashboard")
);

const CalenderAndEvent = lazy(
  () => import ("src/pages/Calender&Event/CalenderEventPage")
);

const InternalExam = lazy(
  () => import("src/pages/InternalExam/InternalExamMain")
);

const MaterialUpload = lazy(
  () => import("src/pages/MaterialUpload/MaterialUploadMain")
);

export const routes = [
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify",
    element: <OTPVerify />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/401",
    element: <Error401 />,
  },
  {
    path: "/403",
    element: <Error403 />,
  },

  // {
  //     path: '/',
  //     element: <Navigate replace to="/login" />
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      // <AuthGuard>
        <DashboardLayout />
      // </AuthGuard>
    ),
    children: [
      {
        index: true,
        element: (
          // <AuthGuard>
            <StaffDashboardPage />
          // </AuthGuard>
        ),
      },
      {
        path: "/calender-event",
        children: [
          {
            index: true,
            element: (
              // <AuthGuard>
                <CalenderAndEvent />
              // </AuthGuard>
            ),
          },
        ],
      },
      {
        path: "/internalExam",
        children: [
          {
            index: true,
            element: (
              // <AuthGuard>
                <InternalExam />
              // </AuthGuard>
            ),
          },
        ],
      },
      {
        path: "/materialUpload",
        children: [
          {
            index: true,
            element: (
              // <AuthGuard>
                <MaterialUpload />
              // </AuthGuard>
            ),
          },
        ],
      },
    ],
  },

  {
    //if url pattern not matched than redirect to no page found
    path: "*",
    element: <Error404 />,
  },
];
