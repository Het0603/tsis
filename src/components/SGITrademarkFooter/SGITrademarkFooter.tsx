import { Box, BoxProps } from "@mui/material";
import { APP_FOOTER_HEIGHT } from "src/config/constant";

interface SGITrademarkFooterProps {
  boxProps?: BoxProps;
}

export default function SGITrademarkFooter({
  boxProps,
}: SGITrademarkFooterProps) {
  return (
    <Box
      component="footer"
      height={APP_FOOTER_HEIGHT}
      width="100%"
      {...boxProps}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        fontSize={12}
        height="100%"
        justifyContent="center"
        textAlign="center"
        width="100%"
      >
        {/* No translation here intentionally, not sure if this legal jargon needs to be translated. */}
        <div>
          Sunshine Group of Institutions - Staff ERP - Version 1.1
          {/* ©{new Date().getFullYear()} All Rights Reserved. SGI is a
                    registered trademark of SGI, Inc. */}
        </div>
      </Box>
    </Box>
  );
}
