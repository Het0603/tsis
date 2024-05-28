import { Alert } from "@mui/material";

export function ErrorAlert({ children }: any) {
    return (
        <Alert id='sgiErrorAlert' color="error">
            {children}
        </Alert>
    )
}