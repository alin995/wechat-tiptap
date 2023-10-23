import React from "react"
import { Editor } from "@tiptap/core";
import useLocalStorage from "use-local-storage";

import { FontBackgroundColorIcon } from "@wechat-editor/icons";
import { STORAGE_TEXT_HIGHLIGHT_COLOR } from "@wechat-editor/constants";
import { BubbleMenuColorSelector, BubbleMenuColorSelectorProps } from "../bubble-menu-color-selector";


export interface BubbleMenuHighlightProps extends Pick<BubbleMenuColorSelectorProps, "prompt"> {
    editor: Editor | null
}

/*
 * 文本背景色
 */
export const BubbleMenuHighlight = (props: BubbleMenuHighlightProps) => {

    const {editor, open, onOpenChange} = props

    const [color, setColor] = useLocalStorage(`${STORAGE_TEXT_HIGHLIGHT_COLOR}.current`, "")

    const handleColorChange = (color: string) => {
        setColor(color)
        if (!color || color === '') {
            editor && editor.chain().focus().unsetHighlight().run()
        } else {
            editor && editor.chain().focus().setHighlight({color}).run()
        }
    }

    return <BubbleMenuColorSelector
        storageKey={`${STORAGE_TEXT_HIGHLIGHT_COLOR}.recent`}
        icon={<FontBackgroundColorIcon className="w-5 h-[17px]"/>}
        open={open}
        onOpenChange={onOpenChange}
        color={color}
        onColorChange={handleColorChange}
        onClick={() => handleColorChange(color)}
    />
}
