import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface PageTitleTextProps extends TypographyProps {
    value: string
}

const PREFIX = 'PageTitleText'

const classes = {
    typography: `${PREFIX}-root`,
}

const TypographyRoot = styled(Typography)(({ theme }) => ({
    [`&.${classes.typography}`]: {
        // backgroundColor: theme.palette.primary.main,
        // fontSize: 30
    }
})) as typeof Typography

export default function PageTitleText({
    value, ...props
}: PageTitleTextProps) {
    return (
        <>
            <TypographyRoot {...props} variant='h1' className={classes.typography}>
                {value}
            </TypographyRoot>
        </>
    )
}