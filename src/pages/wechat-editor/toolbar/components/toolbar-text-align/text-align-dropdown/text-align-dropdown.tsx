import React, { ReactNode } from "react"

import { CheckIcon } from "@wechat-editor/icons";

export interface TextAlignItem {
    title: ReactNode,
    value: string
}

export interface TextAlignDropdownProps {
    textAlignItems: Array<TextAlignItem>
    alignment?: string
    onAlignChange?: (textAlign: string) => void
}

export const TextAlignDropdown = ({textAlignItems, alignment, onAlignChange}: TextAlignDropdownProps) => {

    return <div className="text-xs max-h-[calc(100vh-180px)] overflow-scroll">
        {textAlignItems.map((item, idx) => {
            const {title, value: alignStyle} = item
            const isActive = alignment === alignStyle

            return <div key={idx}
                        className="flex flex-row items-center m-h-5 xy-[2px] py-[2px] rounded hover:bg-stone-300"
                        onClick={() => onAlignChange?.(alignStyle)}>
                <div className={`block w-4 h-4 pt-[2px] pr-2 ${isActive ? 'visible' : 'invisible'}`}>
                    <CheckIcon className="w-4 h-4"/>
                </div>
                <div>
                    {title}
                </div>
            </div>
        })}
    </div>

}
