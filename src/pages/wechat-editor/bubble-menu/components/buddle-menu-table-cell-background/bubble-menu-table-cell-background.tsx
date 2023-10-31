import React from "react"
import { Editor } from "@tiptap/core";
import useLocalStorage from "use-local-storage";
import { PaletteIcon } from "@wechat-editor/icons";
import { STORAGE_CELL_BACKGROUND } from "@wechat-editor/constants";

import { BubbleMenuColorSelector, BubbleMenuColorSelectorProps } from "../bubble-menu-color-selector";


export interface BubbleMenuTableCellBackgroundProps extends Pick<BubbleMenuColorSelectorProps, "prompt"> {
	editor: Editor | null
}

/*
 * 文本颜色
 */
export const BubbleMenuTableCellBackground = (props: BubbleMenuTableCellBackgroundProps) => {

	const {editor, open, onOpenChange} = props

	const [color, setColor] = useLocalStorage(`${STORAGE_CELL_BACKGROUND}.current`, "")

	const handleColorChange = (color: string) => {
		setColor(color)
		if (!color || color === '') {
			editor && editor.chain().focus().unsetCellBackground().run()
		} else {
			editor && editor.chain().focus().setCellBackground(color).run()
		}
	}

	return <BubbleMenuColorSelector
		storageKey={`${STORAGE_CELL_BACKGROUND}.recent`}
		icon={<PaletteIcon className="w-5 h-[17px]"/>}
		open={open}
		onOpenChange={onOpenChange}
		color={color}
		onColorChange={handleColorChange}
		onClick={() => handleColorChange(color)}
	/>
}
