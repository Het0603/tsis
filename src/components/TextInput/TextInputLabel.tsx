import { FormLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface TextInputLabelProps {
    disabled?: boolean
    noMarginBottom?: boolean
    htmlFor?: string
    value?: string | number | ReactNode
}

const classes = {
    root: `root`,
    label: `label`,
    noMarginBottom: `noMarginBottom`,
    disabled: `disabled`
}

const TextInputLabelRoot = styled(FormLabel)(({ theme }) => ({
    [`&.${classes.root}`]: {
        marginBottom: 14,
    },
    [`&.${classes.label}`]: {
        color: theme.palette.text.primary,
        display: 'flex',
        fontSize: 16,
        fontWeight: 600,
    },
    [`&.${classes.noMarginBottom}`]: {
        marginBottom: 0,
    },
    [`&.${classes.disabled}`]: {
        opacity: 0.5,
        pointerEvents: 'none',
    },
})) as typeof FormLabel


export default function TextInputLabel({
    disabled = false,
    noMarginBottom = false,
    htmlFor,
    value,
    ...props
}: TextInputLabelProps) {
    return (
        <>
            <TextInputLabelRoot {...props}>
                {htmlFor ? (
                    <label className={classes.label} htmlFor={htmlFor}>{value}</label>
                ) : (
                    <span className={classes.label}>{value}</span>
                )}
            </TextInputLabelRoot>
        </>
    )
}