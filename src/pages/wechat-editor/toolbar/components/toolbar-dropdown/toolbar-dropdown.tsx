import React, { ReactNode, useState } from "react"
import { DropDownArrowIcon } from "@wechat-editor/icons";
import { ToolbarButton, ToolbarButtonProps } from "../toolbar-button";


export interface ToolbarDropdownProps extends ToolbarButtonProps {
    children?: ReactNode
}

export const ToolbarDropdown = (props: ToolbarDropdownProps) => {

    const {prompt, children, popoverProps, ...restProps} = props

    const [isOpen, setOpen] = useState(popoverProps?.open)

    const [isDropdown, setDropdown] = useState(false)

    const onOpenChange = (open: boolean) => {
        setOpen(open)
        if (!open) {
            setDropdown(false)
        }
    }

    const handleClick = () => {
        setDropdown(!isDropdown)
    }

    return <ToolbarButton
        {...restProps}
        prompt={isDropdown ? children : prompt}
        suffix={<DropDownArrowIcon/>}
        onClick={() => handleClick()}
        popoverProps={{
            ...popoverProps,
            open: isOpen,
            onOpenChange
        }}
    />
}
