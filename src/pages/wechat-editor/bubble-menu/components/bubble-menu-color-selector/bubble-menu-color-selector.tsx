import React, { ReactNode } from "react"

import { ToolbarButtonProps } from "@wechat-editor/toolbar/components";
import { ColorSelector } from "@wechat-editor/components";
import { DropDownArrowIcon } from "@wechat-editor/icons";

export interface BubbleMenuColorSelectorProps extends Pick<ToolbarButtonProps, "icon" | "onClick"> {
	storageKey: string,
	icon?: ReactNode
	onClick?: () => void
	color: string
	onColorChange: (color: string) => void
	open: boolean
	onOpenChange: (isOpen: boolean) => void
}

/**
 * 颜色选择器
 */
export const BubbleMenuColorSelector = (props: BubbleMenuColorSelectorProps) => {

	const {storageKey, icon, onClick, color, onColorChange, open, onOpenChange} = props

	const handleButtonClick = () => {
		onOpenChange(!open)
		onClick?.()
	}

	return <div className="flex flex-col flex-nowrap">
		<div className="flex flex-nowrap justify-center whitespace-nowrap mx-1 rounded hover:bg-stone-100">
			<div className="w-6 h-6 p-[2px] rounded hover:bg-stone-300" onClick={() => handleButtonClick()}>
				<div className="w-5 h-[17px]">
					{icon}
				</div>
				<div className="w-[14px] h-1 ml-[3px] mt-[-2px] border border-stone-300" style={{
					backgroundColor: color === '' ? 'transparent' : color
				}}/>
			</div>
			<div className="h-6 px-1 rounded hover:bg-stone-300" onClick={() => onOpenChange(!open)}>
				<DropDownArrowIcon/>
			</div>
		</div>
		<div className="z-99 fixed flex flex-col mt-10 ml-[-8px] p-3 bg-white border rounded-lg shadow-lg" style={{
			display: open ? 'block' : 'none'
		}}>
			<ColorSelector storageKey={`${storageKey}`} onColorClick={(color) => {
				onOpenChange(false)
				onColorChange?.(color)
			}}/>
		</div>
	</div>
}
