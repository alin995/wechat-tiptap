import React from "react"
import { Editor } from "@tiptap/core";
import useLocalStorage from "use-local-storage";
import { FontColorIcon } from "@wechat-editor/icons";
import { STORAGE_TEXT_COLOR } from "@wechat-editor/constants";

import { BubbleMenuColorSelector, BubbleMenuColorSelectorProps } from "../bubble-menu-color-selector";


export interface BubbleMenuTextColorProps extends Pick<BubbleMenuColorSelectorProps, "prompt"> {
    editor: Editor | null
}

/*
 * 文本颜色
 */
export const BubbleMenuTextColor = (props: BubbleMenuTextColorProps) => {

    const {editor, open, onOpenChange} = props

    const [color, setColor] = useLocalStorage(`${STORAGE_TEXT_COLOR}.current`, "")

    const handleColorChange = (color: string) => {
        setColor(color)
        if (!color || color === '') {
            editor && editor.chain().focus().unsetColor().run()
        } else {
            editor && editor.chain().focus().setColor(color).run()
        }
    }

    return <BubbleMenuColorSelector
        storageKey={`${STORAGE_TEXT_COLOR}.recent`}
        icon={<FontColorIcon className="w-5 h-[17px]"/>}
        open={open}
        onOpenChange={onOpenChange}
        color={color}
        onColorChange={handleColorChange}
        onClick={() => handleColorChange(color)}
    />
}
