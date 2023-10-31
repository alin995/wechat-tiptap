import React from "react";
import { BubbleMenu, Editor, findChildrenInRange } from "@tiptap/react";
import { CropIcon, DeleteIcon, ReturnIcon } from "@wechat-editor/icons";
import { readAsImage } from "@wechat-editor/utils";
import { BubbleMenuItem, BubbleMenuItemDivider } from "../components/bubble-menu-item";


interface ImageBubbleMenuProps {
	editor: Editor
	cropMode: boolean
	onCropModeChange: (model: boolean) => void
}

export const ImageBubbleMenu = (props: ImageBubbleMenuProps) => {

	const {editor, cropMode, onCropModeChange} = props

	const findSingleNodeWithPos = () => {
		const nodesWithPos = findChildrenInRange(editor.state.doc, {
			from: editor.state.selection.from,
			to: editor.state.selection.to,
		}, node => node.type.name === 'resizableImage')

		return nodesWithPos.length === 1 ? nodesWithPos[0] : {}
	}

	const shouldShow = () => {
		const {node} = findSingleNodeWithPos()
		return node && node.type.name === 'resizableImage'
	}

	const tippyOptions = {
		moveTransition: "transform 0.15s ease-out",
	}

	const handleReset = async () => {
		const element = document.querySelector(".ProseMirror-selectednode img") as HTMLImageElement;
		if (element && editor.isActive("resizableImage")) {
			const image = await readAsImage(element.src)
			editor.chain().focus()
				.setResizableImage({
					src: element.src,
					alt: element.alt,
					title: element.title,
					width: image.width,
					height: image.height,
				})
				.run()
		}
	}

	return <>
		<BubbleMenu
			className="flex pt-2 pb-2 pl-3 pr-3 rounded bg-stone-200 shadow-lg"
			editor={editor!}
			shouldShow={shouldShow}
			tippyOptions={tippyOptions}
		>
			<BubbleMenuItem
				icon={<CropIcon className="w-5 h-5"/>}
				active={cropMode}
				onClick={() => onCropModeChange(!cropMode)}
			/>

			<BubbleMenuItem
				icon={<ReturnIcon className="w-5 h-5"/>}
				onClick={() => handleReset()}
			/>
			<BubbleMenuItemDivider/>

			<BubbleMenuItem
				icon={<DeleteIcon className="w-5 h-5"/>}
				onClick={() => {
					editor.chain().focus().deleteSelection().run()
				}}
			/>

		</BubbleMenu>

	</>

};
