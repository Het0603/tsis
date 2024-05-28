import { To } from "react-router-dom";
import BaseCard, { BaseCardProps } from "./BaseCard";
import { ReactNode } from "react";

interface ConfirmRecordCard extends Omit<BaseCardProps, "title"> {
  linkTo?: To;
  title: ReactNode;
}
export default function ConfirmRecordCard({
  title,
  children,
  minHeight = 150,
  maxWidth = 150,
  linkTo,
  ...props
}: ConfirmRecordCard) {
  return (
    <BaseCard
      minHeight={minHeight}
      p="20px"
      position="relative"
      style={{
        border: "1px solid #8D8D8D",
        borderRadius: "20px",
      }}
      {...props}
    >
      {children}
    </BaseCard>
  );
}
