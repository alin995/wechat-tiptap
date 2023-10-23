import React, { useMemo } from "react";
import { Editor } from "@tiptap/react";

import { ToolbarDropdownList, ToolbarDropdownListItem } from "../toolbar-dropdown-list";
import { fontFamilyList } from "./utils";

export interface ToolbarFontFamilyProps {
    prompt?: string
    editor: Editor | null
}

export const ToolbarFontFamily = (props: ToolbarFontFamilyProps) => {
    const {prompt, editor} = props

    const menuItems: Array<ToolbarDropdownListItem> = useMemo(() => {
        return fontFamilyList.map(({title, value: fontFamily}) => {
            if (title === 'divider') {
                return {
                    title
                }
            }
            return {
                title,
                command: () => {
                    console.log('command')
                    console.log(editor)
                    if (editor) {
                        console.log('unsetFontFamily')
                        editor.commands.unsetFontFamily();
                        if (fontFamily && fontFamily !== 'default') {
                            console.log('setFontFamily', fontFamily)
                            editor.chain().focus().setFontFamily(fontFamily).run();
                        }
                    }
                },
                isActive: () => editor && editor.isActive("textStyle", {fontFamily}),
                isDefault: () => fontFamily === 'default',
                render: (x) => {
                    return <div style={fontFamily === 'default' ? {} : {fontFamily}}>
                        {x.title}
                    </div>
                }
            } as ToolbarDropdownListItem
        })
    }, [editor])

    return <ToolbarDropdownList
        className="text-sm"
        buttonClassName="w-20 overflow-hidden"
        prompt={prompt}
        items={menuItems}
    />
}
