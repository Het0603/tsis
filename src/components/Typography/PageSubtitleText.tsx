import { Box, BoxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

export interface PageSubtitleTextProps {
    boxProps?: BoxProps
    children: ReactNode
}

export default function PageSubtitleText({
    children,
    boxProps
}: PageSubtitleTextProps) {
    return (
        <Box fontSize={14}
            fontWeight={400}
            component={Typography}
            marginTop={1}
            {...boxProps}>
            {children}
        </Box>
    )
}