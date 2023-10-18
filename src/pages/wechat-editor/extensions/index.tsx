import { Extensions, InputRule } from "@tiptap/core";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { Heading } from "@tiptap/extension-heading";
import { History } from "@tiptap/extension-history";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Underline } from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { FontFamily } from "@tiptap/extension-font-family";
import { Highlight } from "@tiptap/extension-highlight";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TextAlign } from "@tiptap/extension-text-align";
import { Bold } from "@tiptap/extension-bold";
import { Document } from "@tiptap/extension-document";
import { HardBreak } from "@tiptap/extension-hard-break";
import { Italic } from "@tiptap/extension-italic";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Strike } from "@tiptap/extension-strike";
import { Text } from "@tiptap/extension-text";
import { BulletList } from "@tiptap/extension-bullet-list";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { ListItem } from "@tiptap/extension-list-item";
import { Blockquote } from "@tiptap/extension-blockquote";
import { CodeBlock } from "@tiptap/extension-code-block";
import { Code } from "@tiptap/extension-code";
import { Dropcursor } from "@tiptap/extension-dropcursor";

import { Link } from "@wechat-editor/extensions/extension-link";

export const TiptapExtensions: Extensions = (() => {
    return [
        Document,
        History,
        Heading,
        Paragraph,
        Text,
        Bold,
        Italic,
        Strike,
        Underline,
        HardBreak,
        BulletList,
        OrderedList.configure({
            defaultOptions: null,
            HTMLAttributes: {
                class: "",
            },
        }),
        ListItem.configure({
            HTMLAttributes: {
                class: "",
            },
        }),
        Blockquote.configure({
            HTMLAttributes: {
                class: "",
            },
        }),
        CodeBlock.configure({
            HTMLAttributes: {
                class: "rounded-sm bg-stone-100 p-5 font-mono font-medium text-stone-800",
            },
        }),
        Code.configure({
            HTMLAttributes: {
                class: "rounded-md bg-stone-200 px-1.5 py-1 font-mono font-medium text-stone-900",
            },
        }),
        Dropcursor.configure({
            color: "#DBEAFE",
            width: 4,
        }),
        HorizontalRule.extend({
            addInputRules() {
                return [
                    new InputRule({
                        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
                        handler: ({state, range}) => {
                            const attributes = {};

                            const {tr} = state;
                            const start = range.from;
                            const end = range.to;

                            tr.insert(start - 1, this.type.create(attributes)).delete(
                                tr.mapping.map(start),
                                tr.mapping.map(end),
                            );
                        },
                    }),
                ];
            },
        }).configure({
            HTMLAttributes: {
                class: "border-stone-300",
            },
        }),
        Placeholder.configure({
            placeholder: ({node, editor}) => {
                if (node.type.name === "heading") {
                    return `输入标题 ${node.attrs.level}`;
                }

                if (editor.isActive("table")) {
                    return "请输入";
                }

                return "输入 '/' 召唤菜单, 或者 '++' 召唤 AI ...";
            },
            includeChildren: true,
        }),
        FontFamily,
        TextStyle,
        TextAlign.configure({
            types: ['heading', 'paragraph']
        }),
        Color,
        Highlight.configure({
            multicolor: true,
        }),
        Subscript,
        Superscript,
        TaskList.configure({
            HTMLAttributes: {
                class: "",
            },
        }),
        TaskItem.configure({
            HTMLAttributes: {
                class: "",
            },
            nested: true,
        }),

        Link.configure({
            autolink: true,
            openOnClick: true,
            clickJointKey: ["altKey"],
            HTMLAttributes: {
                class: "",
            },
        }),
    ]
})()

