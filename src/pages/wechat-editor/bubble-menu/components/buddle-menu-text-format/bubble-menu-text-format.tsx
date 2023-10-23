import React from "react"
import { Editor } from "@tiptap/core";
import { BoldIcon, ItalicIcon, StrikeThroughIcon, UnderlineIcon } from "@wechat-editor/icons";
import { BubbleMenuItem } from "../bubble-menu-item";


export interface BubbleMenuTextFormatProps {
    editor: Editor
    onFormatChange?: (event: string) => void
}

/*
 * 粗体、斜体、下划线、删除线
 */
export const BubbleMenuTextFormat = (props: BubbleMenuTextFormatProps) => {

    const {editor, onFormatChange} = props

    return <>
        <BubbleMenuItem
            icon={<BoldIcon className="w-5 h-5"/>}
            active={editor.isActive('bold')}
            onClick={() => {
                editor.chain().focus().toggleBold().run()
                onFormatChange?.("bold-change")
            }}
        />
        <BubbleMenuItem
            icon={<ItalicIcon className="w-5 h-5"/>}
            active={editor.isActive("italic")}
            onClick={() => {
                editor.chain().focus().toggleItalic().run()
                onFormatChange?.("italic-change")
            }}
        />
        <BubbleMenuItem
            icon={<UnderlineIcon className="w-5 h-5"/>}
            active={editor.isActive("underline")}
            onClick={() => {
                editor.chain().focus().toggleUnderline().run()
                onFormatChange?.("underline-change")
            }}
        />
        <BubbleMenuItem
            icon={<StrikeThroughIcon className="w-5 h-5"/>}
            active={editor.isActive("strike")}
            onClick={() => {
                editor.chain().focus().toggleStrike().run()
                onFormatChange?.("strike-change")
            }}
        />
    </>
}
