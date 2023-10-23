import React, { ReactNode, useState } from "react"

import { CheckIcon, DropDownArrowIcon } from "@wechat-editor/icons";
import { ToolbarDropdown, ToolbarDropdownProps } from "../toolbar-dropdown";

export interface ToolbarDropdownListItem {
    title: string | ReactNode | undefined
    command?: () => void
    isActive?: () => boolean | null
    isDefault?: () => boolean | null
    render?: (item: ToolbarDropdownListItem) => ReactNode
}

export interface ToolbarDropdownListProps extends ToolbarDropdownProps {
    buttonClassName?: string
    className?: string
    items: Array<ToolbarDropdownListItem>
}


export const ToolbarDropdownList = (props: ToolbarDropdownListProps) => {
    const {buttonClassName, className, items, title, ...restProps} = props

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const handleItemClick = ({command}: ToolbarDropdownListItem) => {
        command?.()
    }

    let activeItem = items.find(({isActive}) => isActive && isActive())
    if (!activeItem) {
        activeItem = items.find(({isDefault}) => {
            return isDefault && isDefault()
        }) || items[0]
    }

    return <ToolbarDropdown
        className={buttonClassName}
        title={title || activeItem.title}
        suffix={<DropDownArrowIcon/>}
        dropdownOpen={dropdownOpen}
        onDropdownOpenChange={setDropdownOpen}
        {...restProps}
    >
        <div className={`text-sm max-h-[calc(100vh-180px)] overflow-scroll ${className}`}>
            {items.map((item, idx) => {
                const {title, render, isActive} = item
                if (title === 'divider') {
                    return <div key={idx} className="h-[1px] bg-stone-300"></div>
                }

                return <div key={idx}
                            className="flex flex-row my-[2px] py-[2px] px-2 items-center h-min-5 rounded cursor-pointer hover:bg-stone-300"
                            onClick={() => handleItemClick(item)}>
                    <div className={`block w-4 h-4 pt-[2px] pr-2 ${isActive && isActive() ? 'visible' : 'invisible'}`}>
                        <CheckIcon className="w-4 h-4"/>
                    </div>
                    {render?.(item)}
                </div>
            })}
        </div>
    </ToolbarDropdown>
}
