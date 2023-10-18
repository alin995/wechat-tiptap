import React, { useEffect, useRef, useState } from "react"
import { Content, Editor, EditorContent, Range, useEditor } from "@tiptap/react";
import { useDebouncedCallback } from "use-debounce";

import { TiptapExtensions } from "@wechat-editor/extensions";
import { TiptapEditorProps } from "@wechat-editor/editor-props";
import { getPrevText } from "./utils";

import "./styles.scss"

export interface WechatEditorProps {
    initialContent?: any
    editorChange?: (editor: Editor | null) => void
    contentChange?: (editor: Editor | null) => void
}

export const WechatEditor = (props: WechatEditorProps) => {

    const {initialContent, editorChange, contentChange} = props

    const [content, setContent] = useState(initialContent)

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
            if (!editor) {
                return
            }

            contentChange?.(editor)

            const selection = editor.state.selection;

            const lastTwo = getPrevText(editor, 2);
            if (lastTwo === "++") {
                const r: Range = {
                    from: selection.from - 2,
                    to: selection.from,
                }
                editor.chain().deleteRange(r).activateMagic().run()

            } else {
                debouncedUpdates(editor);
            }
        },
        onSelectionUpdate: ({editor}) => {
            editor && contentChange?.(editor)
        },
        autofocus: true,
    })

    useEffect(() => {
        editorChange?.(editor)
    }, [editor])

    return <div>
        <div
            ref={(x) => containerRef.current = x!}
            className="w-full h-full/[-132]"
            onClick={(event) => {
                if (editor && !event.target.closest('.haydn-free-node')) {
                    editor.chain().focus().run()
                }
            }}
        >
            <div
                ref={(x) => documentRef.current = x!}
                className=""
            >
                <EditorContent editor={editor} className="wechat-editor-content"/>
            </div>
        </div>
    </div>
}
