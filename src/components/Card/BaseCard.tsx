import { Box, BoxProps, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { KeyboardEventHandler, ReactNode } from "react";

export interface BaseCardProps extends BoxProps {
  disabled?: boolean;
  hoverable?: boolean;
  noBorder?: boolean;
  children: ReactNode;
  onClick?: (args: { currentTarget: EventTarget & HTMLElement }) => void;
}

const classes = {
  card: `card`,
  clickable: `clickable`,
  hoverable: `hoverable`,
  disabled: `disabled`,
  noBorder: `noBorder`,
};

const BoxRoot = styled(Card)(({ theme }) => ({
  [`&.${classes.card}`]: {
    border: `1px solid white`,
    borderRadius: 16,
    backgroundColor: "white",
  },
  [`&.${classes.clickable}`]: {
    cursor: "pointer",
  },
  [`&.${classes.hoverable}`]: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
    },
    "&:active": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
  },
  [`&.${classes.disabled}`]: {
    backgroundColor: "black",
  },
  [`&.${classes.noBorder}`]: {
    border: "none",
  },
})) as typeof Card;

export default function BaseCard({
  className,
  disabled = false,
  hoverable = false,
  noBorder = false,
  children,
  onClick,
  onKeyDown,
  ...props
}: any) {
  const clickable = !!onClick;

  const cardClassNames = clsx(classes.card, className, {
    [classes.clickable]: clickable,
    [classes.hoverable]: hoverable || clickable,
    [classes.disabled]: disabled,
    [classes.noBorder]: noBorder,
  });

  const divProps = { ...props };

  if (onClick) {
    divProps.role = "button";
    divProps.tabIndex = 0;
  }
  const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    if (!onClick) {
      return;
    }

    if (event.key === "Enter") {
      onClick({ currentTarget: event.currentTarget });
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <Box
      className={cardClassNames}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...divProps}
    >
      {children}
    </Box>
    // <Card sx={{
    //     borderRadius: '15px',

    // }} {...props}>
    //     <CardContent>
    //         {children}
    //     </CardContent>
    // </Card>
  );
}
