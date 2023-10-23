import React, { useMemo } from "react";
import { Editor } from "@tiptap/react";

import { ToolbarDropdownList, ToolbarDropdownListItem } from "../toolbar-dropdown-list";
import { fontSizeList } from "./utils";


export interface ToolbarFontSizeProps {
    prompt?: string
    editor: Editor
}

export const ToolbarFontSize = (props: ToolbarFontSizeProps) => {
    const {prompt, editor} = props

    const menuItems: Array<ToolbarDropdownListItem> = useMemo(() => {
        return fontSizeList.map(({title, value: fontSize}) => {
            return {
                title,
                command: () => {
                    if (editor) {
                        editor.commands.unsetFontSize();
                        if (fontSize && fontSize !== 'default') {
                            editor.chain().focus().setFontSize(fontSize).run();
                        }
                    }
                },
                isActive: () => editor.isActive("textStyle", {fontSize}),
                render: (x) => <div>{x.title}</div>,
            } as ToolbarDropdownListItem
        })
    }, [editor])

    return <ToolbarDropdownList
        className="text-sm"
        buttonClassName="w-14"
        prompt={prompt} items={menuItems}
    />
}
