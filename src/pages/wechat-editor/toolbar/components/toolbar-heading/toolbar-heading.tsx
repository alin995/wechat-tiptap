import React from "react";
import { Editor } from "@tiptap/react";

import { ToolbarDropdownList, ToolbarDropdownListItem } from "../toolbar-dropdown-list";


export interface ToolbarHeadingProps {
    prompt?: string
    editor: Editor
}

export const ToolbarHeading = (props: ToolbarHeadingProps) => {
    const {prompt, editor} = props

    const toggleHeading = (level: number) => {
        editor.chain().focus().toggleHeading({level}).run()
    }

    const menuItems: Array<ToolbarDropdownListItem> = [{
        title: "正文",
        command: () => editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
        isActive: () => editor.isActive("paragraph"),
        render: (x) => <div className="text-base">{x.title}</div>
    }, {
        title: "divider",
    }, {
        title: "标题 1",
        command: () => toggleHeading(1),
        isActive: () => editor.isActive("heading", {level: 1}),
        render: (x) => <h1 className="text-5xl">{x.title}</h1>
    }, {
        title: "标题 2",
        command: () => toggleHeading(2),
        isActive: () => editor.isActive("heading", {level: 2}),
        render: (x) => <h2 className="text-3xl">{x.title}</h2>
    }, {
        title: "标题 3",
        command: () => toggleHeading(3),
        isActive: () => editor.isActive("heading", {level: 3}),
        render: (x) => <h3 className="text-2xl">{x.title}</h3>
    }, {
        title: "标题 4",
        command: () => toggleHeading(4),
        isActive: () => editor.isActive("heading", {level: 4}),
        render: (x) => <h4 className="text-lg">{x.title}</h4>
    }, {
        title: "标题 5",
        command: () => toggleHeading(5),
        isActive: () => editor.isActive("heading", {level: 5}),
        render: (x) => <h5 className="text-lg">{x.title}</h5>
    }, {
        title: "标题 6",
        command: () => toggleHeading(6),
        isActive: () => editor.isActive("heading", {level: 6}),
        render: (x) => <h6 className="text-lg">{x.title}</h6>
    }]

    return <ToolbarDropdownList
        className="w-30"
        buttonClassName="text-sm"
        prompt={prompt}
        items={menuItems}
    />
}

