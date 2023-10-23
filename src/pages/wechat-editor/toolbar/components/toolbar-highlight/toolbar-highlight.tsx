import React from "react"
import { Editor } from "@tiptap/core";
import useLocalStorage from "use-local-storage";
import { FontBackgroundColorIcon } from "@wechat-editor/icons";
import { STORAGE_TEXT_HIGHLIGHT_COLOR } from "@wechat-editor/constants";

import { ToolbarColorSelector, ToolbarColorSelectorProps } from "../toolbar-color-selector";


export interface ToolbarHighlightProps extends Pick<ToolbarColorSelectorProps, "prompt"> {
    editor: Editor
}

export const ToolbarHighlight = (props: ToolbarHighlightProps) => {

    const {editor, prompt} = props

    const [color, setColor] = useLocalStorage(`${STORAGE_TEXT_HIGHLIGHT_COLOR}.current`, "")

    const handleColorChange = (color: string) => {
        setColor(color)
        if (editor) {
            if (!color || color === '') {
                editor.commands.unsetHighlight()
            } else {
                editor.commands.setHighlight({
                    color
                })
            }
        }
    }

    return <ToolbarColorSelector
        storageKey={`${STORAGE_TEXT_HIGHLIGHT_COLOR}.recent`}
        icon={<FontBackgroundColorIcon className="w-5 h-[17px]"/>}
        prompt={prompt}
        color={color}
        onColorChange={handleColorChange}
        onClick={() => handleColorChange(color)}
    />
}
