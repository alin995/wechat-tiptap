import React from "react";
import { Editor } from "@tiptap/react";
import {
    BoldIcon,
    BulletListIcon,
    ClearFormatIcon,
    DescIndentIcon,
    FontSizeDecreaseIcon,
    FontSizeIncreaseIcon,
    FormatPaintIcon,
    IncIndentIcon,
    ItalicIcon,
    LightBlockIcon,
    MagicIcon,
    NumberedListIcon,
    QuoteIcon,
    RedoIcon,
    SearchIcon,
    StrikeThroughIcon,
    SubIcon,
    SupIcon,
    TaskListIcon,
    UnderlineIcon,
    UndoIcon
} from "@wechat-editor/icons"

import {
    ToolbarButton,
    ToolbarButtonDivider,
    ToolbarFontFamily,
    ToolbarFontSize,
    ToolbarHeading,
    ToolbarHighlight,
    ToolbarInsertImage,
    ToolbarInsertTable,
    ToolbarTextAlign,
    ToolbarTextColor
} from "./components";
import { toolbarTitle } from "./toolbar-title"

export interface ToolbarProps {
    editor: Editor
}

export const Toolbar = (props: ToolbarProps) => {
    const {editor} = props

    return <div className="w-full h-10 py-2 text-start bg-stone-100 border-b border-stone-300 shadow">
        <div className="relative justify-center box-border flex flex-row">
            <div className="flex items-center whitespace-nowrap justify-start">
                <ToolbarButton
                    icon={<UndoIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["undo"]}
                    disabled={!editor.can().undo()}
                    onClick={() => editor.chain().focus().undo().run()}
                />
                <ToolbarButton
                    icon={<RedoIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["redo"]}
                    disabled={!editor.can().redo()}
                    onClick={() => editor.chain().focus().redo().run()}
                />
                <ToolbarButton icon={<FormatPaintIcon className="w-5 h-5"/>} prompt={toolbarTitle["formatPaint"]}/>
                <ToolbarButton icon={<ClearFormatIcon className="w-5 h-5"/>} prompt={toolbarTitle["clearFormat"]}/>

                <ToolbarButtonDivider/>

                <ToolbarInsertImage editor={editor} prompt={toolbarTitle["image"]}/>
                <ToolbarInsertTable editor={editor} prompt={toolbarTitle["table"]}/>

                <ToolbarButtonDivider/>

                <ToolbarHeading editor={editor} prompt={toolbarTitle["heading"]}/>
                <ToolbarFontFamily editor={editor} prompt={toolbarTitle["fontFamily"]}/>
                <ToolbarFontSize editor={editor} prompt={toolbarTitle["fontSize"]}/>

                <ToolbarButton
                    icon={<FontSizeIncreaseIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["fontSizeIncrease"]}
                    disabled={!editor.state.selection.content().size}
                    onClick={() => editor.chain().focus().incFontSize(4).run()}
                />
                <ToolbarButton
                    icon={<FontSizeDecreaseIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["fontSizeDecrease"]}
                    disabled={!editor.state.selection.content().size}
                    onClick={() => editor.chain().focus().incFontSize(-4).run()}
                />
                <ToolbarButton
                    icon={<BoldIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["bold"]}
                    active={editor.isActive("bold")}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                />
                <ToolbarButton
                    icon={<ItalicIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["italic"]}
                    active={editor.isActive("italic")}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                />
                <ToolbarButton
                    icon={<UnderlineIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["underline"]}
                    active={editor.isActive("underline")}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                />
                <ToolbarButton
                    icon={<StrikeThroughIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["strikeThrough"]}
                    active={editor.isActive("strike")}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                />

                <ToolbarButton
                    icon={<SubIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["sub"]}
                    active={editor.isActive("subscript")}
                    onClick={() => editor.chain().focus().toggleSubscript().run()}
                />
                <ToolbarButton
                    icon={<SupIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["sup"]}
                    active={editor.isActive("superscript")}
                    onClick={() => editor.chain().focus().toggleSuperscript().run()}
                />

                {/*<ToolbarButton icon={<LetterSpacingIcon/>} prompt={toolbarTitle["letterSpacing"]}/>*/}

                <ToolbarHighlight editor={editor} prompt={toolbarTitle["fontBackgroundColor"]}/>
                <ToolbarTextColor editor={editor} prompt={toolbarTitle["fontColor"]}/>

                <ToolbarButtonDivider/>

                <ToolbarButton
                    icon={<BulletListIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["bulletList"]}
                    active={editor.isActive("bulletList")}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                />
                <ToolbarButton
                    icon={<NumberedListIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["numberedList"]}
                    active={editor.isActive("orderedList")}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                />
                <ToolbarButton
                    icon={<TaskListIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["taskList"]}
                    active={editor.isActive("taskList")}
                    onClick={() => editor.chain().focus().toggleTaskList().run()}
                />
                <ToolbarButton
                    icon={<DescIndentIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["descIndent"]}
                    onClick={() => editor.chain().focus().outdent().run()}
                />
                <ToolbarButton
                    icon={<IncIndentIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["incIndent"]}
                    onClick={() => editor.chain().focus().indent().run()}
                />

                <ToolbarTextAlign editor={editor} prompt={toolbarTitle["alignment"]}/>

                <ToolbarButtonDivider/>

                <ToolbarButton
                    icon={<QuoteIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["quote"]}
                    active={editor.isActive("blockquote")}
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                />
                <ToolbarButton
                    icon={<LightBlockIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["lightBlock"]}
                    active={editor.isActive("blockquoteHighlight")}
                    onClick={() => editor.chain().focus().toggleBlockquoteHighlight().run()}
                />

                <ToolbarButtonDivider/>

                <ToolbarButton
                    icon={<MagicIcon className="w-5 h-5"/>}
                    prompt={toolbarTitle["magic"]}
                    onClick={() => editor.chain().focus().activateMagic().run()}
                />

                <ToolbarButtonDivider/>

                <ToolbarButton icon={<SearchIcon className="w-5 h-5"/>} prompt={toolbarTitle["search"]}/>
            </div>
        </div>
    </div>
}
