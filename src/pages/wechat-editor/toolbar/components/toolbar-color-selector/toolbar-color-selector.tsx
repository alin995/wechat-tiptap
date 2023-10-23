import React, { useMemo, useState } from "react"
import { Popover } from "antd";

import { ToolbarButtonProps } from "@wechat-editor/toolbar/components";
import { DropDownArrowIcon } from "@wechat-editor/icons";
import { ColorSelector } from "@wechat-editor/components";


export interface ToolbarColorSelectorProps extends Pick<ToolbarButtonProps, "icon" | "prompt" | "onClick"> {
    color: string
    onColorChange?: (color: string) => void
    storageKey: string
}

export const ToolbarColorSelector = (props: ToolbarColorSelectorProps) => {

    const {icon, prompt, onClick, color, onColorChange, storageKey} = props

    const [isOpen, setOpen] = useState(false)
    const [isDropdown, setDropdown] = useState(false)

    const normalizedPrompt = useMemo(() => {
        if (!isDropdown) {
            return <div className="text-xs">
                {prompt}
            </div>
        }

        return <div className="text-xs">
            <ColorSelector storageKey={`${storageKey}`} onColorClick={(color) => {
                setDropdown(false)
                setOpen(false)
                onColorChange?.(color)
            }}/>
        </div>
    }, [prompt, isDropdown])

    const onOpenChange = (open: boolean) => {
        setOpen(open)
        if (!open) {
            setDropdown(false)
        }
    }

    const handleDropdownClick = () => {
        setDropdown(!isDropdown)
    }

    return <Popover placement="bottom" content={normalizedPrompt} open={isOpen} onOpenChange={onOpenChange}>
        <div className={`flex flex-nowrap whitespace-nowrap justify-center mx-1 rounded text-xs hover:bg-stone-300`}>
            <div className="w-6 h-6 p-[2px] rounded align-top hover:bg-stone-400" onClick={() => onClick?.()}>
                <div className="w-5 h-[17px]">
                    {icon}
                </div>
                <div className="w-[14px] h-1 ml-[3px] mt-[-2px] border border-stone-300" style={{
                    backgroundColor: color === '' ? 'transparent' : color
                }}/>
            </div>
            <div className="h-6 px-1 rounded hover:bg-stone-400" onClick={() => handleDropdownClick()}>
                <DropDownArrowIcon/>
            </div>
        </div>
    </Popover>
}
