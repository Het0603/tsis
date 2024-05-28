import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import BaseFontAwesomeIcon from "../Icons/BaseFontAwesomeIcon";
import { Autocomplete, AutocompleteProps, styled } from "@mui/material";
import { ReactNode } from "react";
import TextInput from "../TextInput/TextInput";

export interface SelectAutocompleteProps
    extends Omit<AutocompleteProps<any, any, any, any>, 'renderInput'> {
    errorText?: string
    hintText?: string
    inputAutocomplete?: string
    inputRef?: React.Ref<any>
    label?: string | ReactNode
    name: string
    startIcon?: ReactNode
    endIcon?: ReactNode
}

const classes = {
    endAdornment: `endAdornment`,
    indicator: `indicator`
}

const AutocompleteRoot = styled(Autocomplete)(({ theme }) => ({
    [`&.${classes.endAdornment}`]: {
        top: 'calc(50% - 12px)',
        right: -10,
    },
    [`&.${classes.indicator}`]: {
        margin: 0,
        padding: 2,
        // color: (props) =>
        //     props.errorText ? theme.palette.error.main : theme.palette.text.label,
        '&.Mui-disabled': {
            // color: (props) =>
            //     props.errorText ? theme.palette.error.main : theme.palette.text.label,
        },
    },
}))

function SelectAutocomplete({
    disabled,
    errorText,
    hintText,
    inputAutocomplete = 'off',
    inputRef,
    label,
    name,
    placeholder,
    popupIcon = <BaseFontAwesomeIcon icon={faChevronDown} size="sm" />,
    endIcon,
    startIcon,
    onBlur,
    ...props
}: SelectAutocompleteProps) {
    return (
        <Autocomplete
            {...props}
            // classes={{
            //     endAdornment: classes.endAdornment,
            //     clearIndicator: classes.indicator,
            //     popupIndicator: classes.indicator,
            // }}
            sx={{
                top: 'calc(50% - 12px)',
                right: 10,
                margin: 0,

            }}
            closeIcon={<BaseFontAwesomeIcon isSquare icon={faTimes} size="xs" />}
            // debug={debugEnabled}
            disabled={disabled}
            popupIcon={popupIcon}
            // Exclude InputLabelProps and InputProps because they aren't supported
            // by our TextInput.
            renderInput={({ InputLabelProps, InputProps, ...params }) => {
                return (
                    <TextInput
                        {...params}
                        endAdornment={endIcon || InputProps.endAdornment}
                        errorText={errorText}
                        hintText={hintText}
                        inputBaseRef={InputProps.ref}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: inputAutocomplete,
                        }}
                        inputRef={inputRef}
                        inputRootClassNames={InputProps.className}
                        label={label}
                        name={name}
                        placeholder={placeholder}
                        startAdornment={startIcon || InputProps.startAdornment}
                        onBlur={onBlur}
                    />
                )
            }}
        />
    )
}
export default SelectAutocomplete