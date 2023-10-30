import React, { useEffect, useRef, useState } from "react"
import { Content, Editor, EditorContent, useEditor } from "@tiptap/react";
import { useDebouncedCallback } from "use-debounce";

import { TiptapExtensions } from "@wechat-editor/extensions";
import { TiptapEditorProps } from "@wechat-editor/editor-props";
import { ImageBubbleMenu, LinkBubbleMenu, TextContentBubbleMenu } from "@wechat-editor/bubble-menu";
import { ImageClipper, ImageResizer } from "@wechat-editor/components";
import { getPrevText } from "@wechat-editor/utils";

import "./styles.scss"
import "./wechat-editor-theme.scss"

export interface WechatEditorProps {
    initialContent?: any
    editorChange?: (editor: Editor | null) => void
    contentChange?: (editor: Editor | null) => void
}

export const WechatEditor = (props: WechatEditorProps) => {

    const {initialContent, editorChange, contentChange} = props

    const [content, setContent] = useState(initialContent)

	const [cropImageMode, setCropImageMode] = useState(false)

    const containerRef = useRef<HTMLDivElement>()
    const documentRef = useRef<HTMLDivElement>()

    const debouncedUpdates = useDebouncedCallback(async (editor: Editor | null) => {
        if (editor) {
            const json = editor.getJSON();
            setContent(json);
        }
    }, 750);

    const editor: Editor | null = useEditor({
        extensions: TiptapExtensions,
        editorProps: TiptapEditorProps,
        onCreate: async ({editor}) => {
            editor.commands.setContent(content as Content);
            editor.chain().focus().setTextSelection(0).scrollIntoView().run()
        },
        onUpdate: async ({editor}) => {
            if (editor) {
                contentChange?.(editor)

                const selection = editor.state.selection;

                const lastTwo = getPrevText(editor, 2);
                if (lastTwo === "++") {
                    const r = {
                        from: selection.from - 2,
                        to: selection.from,
                    }
                    editor.chain().deleteRange(r).activateMagic().run()

                } else {
                    debouncedUpdates(editor);
                }
            }
        },
        onSelectionUpdate: ({editor}) => {
            if (editor) {
				editorChange?.(editor)
                contentChange?.(editor)
            }
        },
        autofocus: true,
    })

    useEffect(() => {
        editorChange?.(editor)
    }, [editor])

    return <div>
		{editor && <ImageBubbleMenu editor={editor} cropMode={cropImageMode} onCropModeChange={setCropImageMode}/>}
		{editor && <LinkBubbleMenu editor={editor}/>}
        {editor && <TextContentBubbleMenu editor={editor}/>}
        <div
            ref={(x) => containerRef.current = x!}
            className="w-full h-full/[-132]"
            onClick={(event) => {
                if (editor && !event.target.closest('.wechat-free-node')) {
                    editor.chain().focus().run()
                }
            }}
        >
            <div
                ref={(x) => documentRef.current = x!}
                className="table mt-4 p-24 w-[800px] bg-white border border-stone-300 shadow-xl shadow-stone-400"
            >
				{editor && editor.isActive("resizableImage") && cropImageMode && <ImageClipper editor={editor} container={documentRef}/>}
				{editor && editor.isActive("resizableImage") && !cropImageMode && <ImageResizer editor={editor} container={documentRef}/>}
                <EditorContent editor={editor} className="wechat-editor-content"/>
            </div>
        </div>
    </div>
}
