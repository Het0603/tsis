import { Avatar } from "@mui/material";
import { ReactNode } from "react";
import { styled } from '@mui/material/styles';

export interface AvatarImageProps {
    width?: number,
    height?: number,
    marginBottom?: number,
    url?: string,
    children?: ReactNode
}

const classes = {
    avatar: `avatar`
}
const AvatarRoot = styled(Avatar)(({ theme }) => ({
    [`&.${classes.avatar}`]: {
        width: '100%',
        height: '100%',
        borderRadius: 0
    }
})) as typeof Avatar

export default function AvatarImage({
    width,
    height,
    marginBottom,
    url,
    children,
    ...props
}: AvatarImageProps) {

    return (
        <AvatarRoot
            className={classes.avatar}
            {...props}
            src={url}
            style={{ width, height,marginBottom }}
        >
            {children}
        </AvatarRoot>
    )
}