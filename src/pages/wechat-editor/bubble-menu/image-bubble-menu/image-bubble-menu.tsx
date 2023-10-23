import React from "react";
import { BubbleMenu, Editor, findChildrenInRange } from "@tiptap/react";
import { CropIcon, DeleteIcon, ReturnIcon } from "@wechat-editor/icons";
import { readAsImage } from "@wechat-editor/utils";
import { BubbleMenuItem, BubbleMenuItemDivider } from "../components/bubble-menu-item";

// import styles from "./index.module.less"

const styles = {

}

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

    // const handleRotate = () => {
    //     const element = document.querySelector(".ProseMirror-selectednode") as HTMLImageElement;
    //     if (element && editor.isActive("resizableImage")) {
    //         const style = window.getComputedStyle(element)
    //
    //         const transform = element.style.transform
    //
    //         console.log(transform)
    //
    //         const selection = editor.state.selection;
    //         editor.chain().focus()
    //             .setResizableImage({
    //                 src: element.src,
    //                 alt: element.alt,
    //                 title: element.title,
    //                 style: `width: ${style.width}; height:${style.height}; transform: rotate(270deg)`
    //             })
    //             .run()
    //         editor.chain().focus().setNodeSelection(selection.from).run()
    //     }
    // }

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
            className={styles.haydnBubbleMenu}
            editor={editor!}
            shouldShow={shouldShow}
            tippyOptions={tippyOptions}
        >
            <BubbleMenuItem
                icon={<CropIcon/>}
                active={cropMode}
                onClick={() => onCropModeChange(!cropMode)}
            />

            {/*<BubbleMenuItem*/}
            {/*    icon={<RotateIcon/>}*/}
            {/*    onClick={() => handleRotate()}*/}
            {/*/>*/}

            <BubbleMenuItem
                icon={<ReturnIcon/>}
                onClick={() => handleReset()}
            />
            <BubbleMenuItemDivider/>

            <BubbleMenuItem
                icon={<DeleteIcon/>}
                onClick={() => {
                    editor.chain().focus().deleteSelection().run()
                }}
            />

        </BubbleMenu>

    </>

};
