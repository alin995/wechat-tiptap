import React, { useEffect, useState } from "react";
import { BubbleMenu, Editor } from "@tiptap/react";
import { ChainedCommands } from "@tiptap/core/src/types";
import { CellSelection } from "@tiptap/pm/tables";
import { DeleteIcon, LinkIcon, MagicIcon, MergeCellIcon, SplitCellIcon } from "@wechat-editor/icons";
import { analyzeCellSelection, isCellSelection, isMagicExists, isTableSelection, isTextSelected } from "@wechat-editor/utils";

import { BubbleMenuItem, BubbleMenuItemDivider } from "../components/bubble-menu-item";
import { BubbleMenuTextFormat } from "../components/buddle-menu-text-format";
import { BubbleMenuTextColor } from "../components/buddle-menu-text-color";
import { BubbleMenuHighlight } from "../components/bubble-menu-highlight";
import { LinkModal, LinkModelFormFields } from "../components/link-modal/link-modal";
import { BubbleMenuTableCellBackground } from "../components/buddle-menu-table-cell-background";

interface TextContentBubbleMenuProps {
    editor: Editor
}

interface ActionStatus {
    tableGroup?: boolean,
    removeTable?: boolean,
    removeTableRow?: boolean,
    removeTableColumn?: boolean,
    mergeCell?: boolean,
    splitCell?: boolean,
    cellBackground?: boolean,

    textFormatter?: boolean,
    link?: boolean,
    magic?: boolean,
}

export const TextContentBubbleMenu = (props: TextContentBubbleMenuProps) => {

    const {editor} = props

    const [isTextColorOpen, setTextColorOpen] = useState(false);
    const [isHighlightOpen, setHighlightOpen] = useState(false);
    const [isCellBackgroundOpen, setCellBackgroundOpen] = useState(false);

    const [isLinkModalOpen, setLinkModalOpen] = useState(false);
    const [linkModalFieldsValue, setLinkModalFieldsValue] = useState<LinkModelFormFields>({})

    const [actionStatus, setActionStatus] = useState<ActionStatus>({});

    useEffect(() => {
        const status: ActionStatus = {}

        status.textFormatter = isTextSelected(editor)

        status.removeTable = isTableSelection(editor)
        if (isCellSelection(editor)) {
            const {isRowSelection, isColSelection, cellCount, mergedCellCount} = analyzeCellSelection(editor)
            status.removeTableRow = isRowSelection
            status.removeTableColumn = isColSelection && !isRowSelection
            status.mergeCell = cellCount > 1
            status.splitCell = mergedCellCount > 0
            status.cellBackground = true
        }
        status.tableGroup = status.removeTable || status.removeTableRow || status.removeTableColumn || status.mergeCell || status.splitCell

        status.link = !status.tableGroup
        status.magic = !status.tableGroup

        setActionStatus(status)

    }, [editor.state.selection])

    const closeAllPopup = () => {
        setTextColorOpen(false)
        setHighlightOpen(false)
        setCellBackgroundOpen(false)
    }

    const shouldShow = ({editor}) => {
        // 有 magic，肯定没 bubble-menu
        if (isMagicExists(editor)) {
            return false
        }

        if (isTextSelected(editor) || isTableSelection(editor)) {
            return true
        }

        if (isCellSelection(editor)) {
            const {isRowSelection, isColSelection, cellCount, mergedCellCount} = analyzeCellSelection(editor)
            if (isRowSelection || isColSelection || cellCount > 1 || mergedCellCount > 0) {
                return true
            }
        }

        return false
    }

    const tippyOptions = {
        moveTransition: "transform 0.15s ease-out",
        onHidden: () => {
            closeAllPopup()
        },
    }

    return <>
        <BubbleMenu
            className="flex pt-2 pb-2 pl-3 pr-3 rounded bg-stone-100 shadow-lg"
            editor={editor}
            shouldShow={shouldShow}
            tippyOptions={tippyOptions}
        >
            {actionStatus.tableGroup && <>
                {actionStatus.mergeCell && <BubbleMenuItem icon={<MergeCellIcon/>} onClick={() => editor.chain().focus().mergeCells().run()}/>}
                {actionStatus.splitCell && <BubbleMenuItem
                    icon={<SplitCellIcon/>}
                    onClick={() => {
                        if (isCellSelection(editor)) {
                            const posQueue: Array<number> = [];
                            (editor.state.selection as CellSelection).forEachCell((cell, pos) => {
                                if (cell.attrs.colspan > 1 || cell.attrs.rowspan > 1) {
                                    posQueue.push(pos)
                                }
                            })
                            let chain: ChainedCommands = editor.chain();
                            posQueue.sort((x, y) => y - x).forEach(pos => {
                                chain = chain.setCellSelection({anchorCell: pos}).splitCell()
                            })
                            chain.run()
                        }
                    }}
                />}
                {actionStatus.cellBackground && <BubbleMenuTableCellBackground editor={editor} open={isCellBackgroundOpen} onOpenChange={(open) => {
                    closeAllPopup()
                    setCellBackgroundOpen(open)
                }}/>}
                {actionStatus.removeTable && <BubbleMenuItem icon={<DeleteIcon/>} onClick={() => editor.chain().focus().deleteSelection().run()}/>}
                {actionStatus.removeTableRow && <BubbleMenuItem icon={<DeleteIcon/>} onClick={() => editor.chain().focus().deleteRow().run()}/>}
                {actionStatus.removeTableColumn && <BubbleMenuItem icon={<DeleteIcon/>} onClick={() => editor.chain().focus().deleteColumn().run()}/>}
            </>}

            {actionStatus.textFormatter && <>
                {actionStatus.tableGroup && <BubbleMenuItemDivider/>}

                <BubbleMenuTextFormat editor={editor} onFormatChange={() => closeAllPopup()}/>
                <BubbleMenuTextColor editor={editor} open={isTextColorOpen} onOpenChange={(open) => {
                    closeAllPopup()
                    setTextColorOpen(open)
                }}/>
                <BubbleMenuHighlight editor={editor} open={isHighlightOpen} onOpenChange={(open) => {
                    closeAllPopup()
                    setHighlightOpen(open)
                }}/>
            </>}

            {actionStatus.link && <>
                {actionStatus.tableGroup || actionStatus.textFormatter && <BubbleMenuItemDivider/>}

                <BubbleMenuItem
                    icon={<LinkIcon className="w-5 h-5"/>}
                    onClick={() => {
                        closeAllPopup()
                        const selection = editor.state.selection;
                        setLinkModalFieldsValue({
                            text: editor.state.doc.textBetween(selection.from, selection.to),
                            href: editor.getAttributes("link")?.href,
                            target: editor.getAttributes("link")?.target === '_blank',
                        })
                        setLinkModalOpen(true)
                    }}
                />
            </>}

            {actionStatus.magic && <>
                {actionStatus.tableGroup || actionStatus.textFormatter && <BubbleMenuItemDivider/>}

                <BubbleMenuItem icon={<MagicIcon className="w-5 h-5"/>} onClick={() => {
                    closeAllPopup()
                    editor && editor.chain().focus().activateMagic().run()
                }}/>
            </>}
        </BubbleMenu>

        {isLinkModalOpen && <LinkModal
            initialValues={linkModalFieldsValue}
            onCancel={() => {
                setLinkModalOpen(false)
                editor.chain().focus().run()
            }}
            onSubmit={({text, href, target}) => {
                if (!href) {
                    editor.chain().focus().unsetLink().run()

                } else {
                    const attributes = {
                        href, target: target ? '_blank' : ''
                    }
                    editor.chain().focus().setLink(attributes).run()

                    if (text && text !== linkModalFieldsValue?.text) {
                        editor.chain().focus()
                            .deleteSelection()
                            .insertContent({
                                type: "text", text,
                                marks: [{
                                    type: "link",
                                    attrs: attributes,
                                }],
                            })
                            .run()
                    }
                }
                setLinkModalOpen(false)
            }}
        />}
    </>

}
