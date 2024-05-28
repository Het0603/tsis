import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { To } from "react-router-dom";
import BaseCard, { BaseCardProps } from "src/components/Card/BaseCard";
import RouterLink from "src/components/Router/RouterLink";
import PageTitleText from "src/components/Typography/PageTitleText";

interface NewInquiryCardProps extends Omit<BaseCardProps, "title"> {
  linkTo?: To;
  title: ReactNode;
}

export default function NewInquiryCard({
  title,
  children,
  minHeight,
  linkTo,
  ...props
}: NewInquiryCardProps) {
  const theme = useTheme();

  return (
    <>
      {/* <RouterLink color="text.primary" to={linkTo}> */}
        <BaseCard
          minHeight={minHeight}
          p="20px"
          position="relative"
          style={{
            border: props.border ?? "none",
            // boxShadow: "0px 5.25311px 14.0083px rgba(0, 0, 0, 0.1)",
          }}
          {...props}
        >
          {title && (
            <PageTitleText value={title} fontSize={18} fontWeight={"bold"} />
          )}
          {linkTo && (
            <Box
              display="flex"
              justifyContent="space-between"
              position="absolute"
              right="20px"
              top="20px"
            ></Box>
          )}
          {children}
        </BaseCard>
      {/* </RouterLink> */}
    </>
  );
}
