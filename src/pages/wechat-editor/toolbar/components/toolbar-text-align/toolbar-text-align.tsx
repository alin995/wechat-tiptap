import React, { useMemo, useState } from "react";
import { Popover } from "antd";
import { Editor } from "@tiptap/react";

import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, DropDownArrowIcon } from "@wechat-editor/icons";

import { TextAlignDropdown } from "./text-align-dropdown";

export interface ToolbarTextAlignProps {
    prompt?: string
    editor: Editor
}

const textAlignList = [
    {
        title: <AlignLeftIcon className="w-5 h-5"/>, value: "left",
    },
    {
        title: <AlignCenterIcon className="w-5 h-5"/>, value: "center",
    },
    {
        title: <AlignRightIcon className="w-5 h-5"/>, value: "right",
    },
    {
        title: <AlignJustifyIcon className="w-5 h-5"/>, value: "justify",
    }
]

export const ToolbarTextAlign = (props: ToolbarTextAlignProps) => {
    const {editor, prompt} = props

    const [isOpen, setOpen] = useState(false)

    const [isDropdown, setDropdown] = useState(false)

    const activeTextAlign = (() => {
        return textAlignList.find(({value}) => {
            return editor.isActive({
                textAlign: value
            })
        }) || textAlignList[0]
    })()

    const normalizedPrompt = useMemo(() => {
        if (!isDropdown) {
            return <div className="text-xs">
                {prompt}
            </div>
        }

        const handleAlignChange = (textAlign: string) => {
            setDropdown(false)
            setOpen(false)
            if (editor) {
                editor.chain().focus().setTextAlign(textAlign).run()
            }
        }

        return <div className="text-xs">
            <TextAlignDropdown textAlignItems={textAlignList} alignment={activeTextAlign.value} onAlignChange={handleAlignChange}/>
        </div>
    }, [editor, prompt, isDropdown, activeTextAlign])

    const handleUnsetAlign = () => {
        setDropdown(false)
        setOpen(false)
        if (editor) {
            editor.chain().focus().unsetTextAlign().run()
        }
    }

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
        <div className="flex flex-nowrap justify-center whitespace-nowrap mx-1 rounded hover:bg-stone-400">
            <div className="w-6 h-6 p-[2px]" onClick={() => handleUnsetAlign()}>
                <div className="w-5 h-5">
                    {activeTextAlign.title}
                </div>
            </div>
            <div className="h-6 pr-1" onClick={() => handleDropdownClick()}>
                <DropDownArrowIcon/>
            </div>
        </div>
    </Popover>
}
