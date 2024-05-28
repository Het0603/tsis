import React from "react";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography } from "@mui/material";

export function ToastNotificationContainer() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#333",
          color: "white",
          padding: 10,
        },

        success: {
          duration: 3000,
          style: {
            background: "#66bb6a",
            color: "white",
          },
        },

        error: {
          duration: 600000,
          style: {
            background: "#f44336",
            color: "white",
          },
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <Box alignItems={"center"} display="flex">
              {t.type === "loading" && icon}
              {t.type === "success" && (
                <CheckCircleOutlineIcon fontSize="14px" />
              )}

              {t.type === "error" && (
                <ErrorIcon
                  fontSize="medium"
                  style={{
                    padding: 1,
                  }}
                />
              )}

              <Typography
                component={"div"}
                style={{ color: "inherit", fontSize: "14px" }}
              >
                {message}
              </Typography>

              <Button
                size="sm"
                onClick={() => {
                  toast.dismiss(t.id);
                }}
                sx={{
                  backgroundColor: "inherit",
                  padding: 1,
                  borderRadius: 50,
                  "&:hover": {
                    backgroundColor: "inherit",
                  },

                  "&:focus": {
                    backgroundColor: "inherit",
                  },
                }}
              >
                <CloseIcon />
              </Button>
            </Box>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
