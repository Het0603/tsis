import { Box, MenuItem, Tooltip, Typography, TypographyProps } from "@mui/material"
import { MouseEvent, ReactNode } from "react"
import BaseMenu, { BaseMenuProps } from "./BaseMenu"

export interface ActionMenuDefinition {
    key: string
    label: ReactNode
    color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    tooltip?: string
    disabled?: boolean
    hidden?: boolean
    menuItemProps?: any
}

export interface ActionMenuProps extends Omit<BaseMenuProps, 'title'> {
    actions: ActionMenuDefinition[]
    fallback?: ReactNode
    labelTypographyVariant?: TypographyProps['variant']
    title?: ReactNode
    onActionClick: (event: MouseEvent<HTMLElement>, actionKey: string) => void
}
export default function ActionMenu({
    actions,
    fallback,
    labelTypographyVariant = 'button',
    title = null,
    onActionClick,
    ...props
}: ActionMenuProps) {
    const handleActionClick = (event: MouseEvent<HTMLElement>) => {
        const actionKey = event.currentTarget.getAttribute('data-action')

        if (!actionKey) {
            return
        }

        if (onActionClick) {
            onActionClick(event, actionKey)
        }
    }

    const visibleActions = actions.filter((action) => !action.hidden)

    return (
        <>
            <BaseMenu {...props}>
                {title}

                {visibleActions.length > 0 &&
                    visibleActions.map((action) => {
                        const { key, label, color, disabled, tooltip, menuItemProps } = action

                        return (
                            <Tooltip key={key} title={tooltip || ''}>
                                <div>
                                    <MenuItem
                                        {...menuItemProps}
                                        data-action={key}
                                        disabled={disabled}
                                        onClick={handleActionClick}
                                    >
                                        {typeof label === 'string' ? (
                                            <Typography
                                                color={color || 'textPrimary'}
                                                variant={labelTypographyVariant}
                                            >
                                                {label}
                                            </Typography>
                                        ) : (
                                            label
                                        )}
                                    </MenuItem>
                                </div>
                            </Tooltip>
                        )
                    })}

                {visibleActions.length === 0 &&
                    (fallback || (
                        <Box px={3} py={1}>
                            <Typography>{`No available actions.`}</Typography>
                        </Box>
                    ))}
            </BaseMenu>
        </>
    )
}