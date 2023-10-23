import React from "react"
import { Editor } from "@tiptap/core";
import useLocalStorage from "use-local-storage";
import { FontColorIcon } from "@wechat-editor/icons";
import { STORAGE_TEXT_COLOR } from "@wechat-editor/constants";

import { ToolbarColorSelector, ToolbarColorSelectorProps } from "../toolbar-color-selector";


export interface ToolbarTextColorProps extends Pick<ToolbarColorSelectorProps, "prompt"> {
    editor: Editor
}

export const ToolbarTextColor = (props: ToolbarTextColorProps) => {

    const {editor, prompt} = props

    const [color, setColor] = useLocalStorage(`${STORAGE_TEXT_COLOR}.current`, "")

    const handleColorChange = (color: string) => {
        setColor(color)
        if (editor) {
            if (!color || color === '') {
                editor.commands.unsetColor()
            } else {
                editor.commands.setColor(color)
            }
        }
    }

    return <ToolbarColorSelector
        storageKey={`${STORAGE_TEXT_COLOR}.recent`}
        icon={<FontColorIcon className="w-5 h-[17px]"/>}
        prompt={prompt}
        color={color}
        onColorChange={handleColorChange}
        onClick={() => handleColorChange(color)}
    />
}
