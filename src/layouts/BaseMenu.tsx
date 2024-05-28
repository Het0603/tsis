import { Menu, MenuProps } from "@mui/material";

export interface BaseMenuProps extends MenuProps { }

export default function BaseMenu({ children, ...props }: BaseMenuProps) {
    return (
        <Menu PaperProps={{ style: { borderRadius: 8 } }} {...props}>
            {children}
        </Menu>
    )
}
