import { Extensions, InputRule } from "@tiptap/core";
import { Blockquote } from "@tiptap/extension-blockquote";
import { Bold } from "@tiptap/extension-bold";
import { CharacterCount } from "@tiptap/extension-character-count";
import { Code } from "@tiptap/extension-code";
import { CodeBlock } from "@tiptap/extension-code-block";
import { Color } from "@tiptap/extension-color";
import { Document } from "@tiptap/extension-document";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { FontFamily } from "@tiptap/extension-font-family";
import { HardBreak } from "@tiptap/extension-hard-break";
import { Heading } from "@tiptap/extension-heading";
import { History } from "@tiptap/extension-history";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { Italic } from "@tiptap/extension-italic";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Strike } from "@tiptap/extension-strike";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { Text } from "@tiptap/extension-text";
import { TextStyle } from "@tiptap/extension-text-style";
import { Underline } from "@tiptap/extension-underline";
import { Highlight } from "@tiptap/extension-highlight";
import { TextAlign } from "@tiptap/extension-text-align";
import { BulletList } from "@tiptap/extension-bullet-list";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { ListItem } from "@tiptap/extension-list-item";

import { BlockquoteHighlight } from "@wechat-editor/extensions/extension-blockquote-highlight";
import { FontSize } from "@wechat-editor/extensions/extension-font-size";
import { Indent } from "@wechat-editor/extensions/extension-indent";
import { Link } from "@wechat-editor/extensions/extension-link";
import { Magic } from "@wechat-editor/extensions/extension-magic";
import { Mathematics } from "@wechat-editor/extensions/extension-mathematics";
import { ResizableImage } from "@wechat-editor/extensions/extension-resizable-image";
import { Table } from "@wechat-editor/extensions/extension-table";
import { TableCell } from "@wechat-editor/extensions/extension-table-cell";
import { TableRow } from "@wechat-editor/extensions/extension-table-row";
import { TableHeader } from "@wechat-editor/extensions/extension-table-header";
import { TableCellBackground } from "@wechat-editor/extensions/extension-table-cell-background";
import { SlashCommand } from "@wechat-editor/extensions/slash-command";

export const TiptapExtensions: Extensions = (() => {
    return [
        Document,
        History,
        CharacterCount,
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

        BlockquoteHighlight.configure({
            HTMLAttributes: {},
        }),
        FontSize,
        Indent.configure({
            defaultLevel: 0,
            minLevel: 0,
            maxLevel: 10,
        }),
        Link.configure({
            autolink: true,
            openOnClick: true,
            clickJointKey: ["altKey"],
            HTMLAttributes: {
                class: "",
            },
        }),
        Magic,
		Mathematics,
        ResizableImage.configure({
            inline: true,
            HTMLAttributes: {
                class: "resizable-image",
            },
        }),
        Table.configure({
            resizable: true,
            allowTableNodeSelection: true,
        }),
        TableHeader,
        TableRow,
        TableCell,
        TableCellBackground,
        SlashCommand,
    ]
})()

