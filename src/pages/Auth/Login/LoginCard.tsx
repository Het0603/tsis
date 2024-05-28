import { useTheme } from "@mui/styles";
import { ReactNode } from "react";
import { To } from "react-router-dom";
import BaseCard, { BaseCardProps } from "src/components/Card/BaseCard";

interface LoginCardProps extends Omit<BaseCardProps, 'title'> {
    linkTo?: To
    title: ReactNode
}

export default function LoginCard({
    title,
    children,
    minHeight = 140,
    linkTo,
    ...props
}: LoginCardProps) {
    const theme = useTheme();
    return (
        <BaseCard
            minHeight={minHeight}
            p="20px"
            position="relative"
            style={{
                border: 'none',
                boxShadow:
                    '0px 6px 16px rgba(0, 0, 0, 0.1)',
                borderRadius : '20px'
            }}
            {...props}
        >
            {children}
        </BaseCard>
    )
}