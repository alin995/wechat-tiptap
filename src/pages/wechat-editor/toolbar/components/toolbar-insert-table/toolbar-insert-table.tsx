import React, { useMemo, useState } from "react"
import { Editor } from "@tiptap/react";

import { DropDownArrowIcon, TableIcon } from "@wechat-editor/icons";
import { TableSizeSelector, } from "@wechat-editor/components";
import { ToolbarButton } from "@wechat-editor/toolbar/components";

import { TableSizeModal } from "./table-size-modal";

export interface ToolbarInsertTableProps {
    prompt?: string
    editor: Editor
}

export const ToolbarInsertTable = (props: ToolbarInsertTableProps) => {

    const {editor, prompt} = props

    const [isOpen, setOpen] = useState(false)
    const [isDropdown, setDropdown] = useState(false)

    const [isModalOpen, setModalOpen] = useState(false)

    const disabled = (() => !editor || editor.isActive("table"))();

    const handleCellClick = ({row, col}) => {
        setOpen(false)
        setDropdown(false)
        if (editor) {
            editor.chain().focus().insertTable({
                rows: row, cols: col, withHeaderRow: false
            }).run()
        }
    }

    const handleCustomClick = () => {
        setOpen(false)
        setDropdown(false)
        setModalOpen(true)
    }

    const onOpenChange = (open: boolean) => {
        setOpen(open)
        if (!open) {
            setDropdown(false)
        }
    }

    const normalizedPrompt = useMemo(() => {
        if (!isDropdown) {
            return prompt
        }
        return <TableSizeSelector onCellClick={(cell) => handleCellClick(cell)} onCustomClick={() => handleCustomClick()}/>
    }, [isDropdown])

    return <>
        <ToolbarButton
            icon={<TableIcon className="w-5 h-5"/>}
            prompt={normalizedPrompt}
            suffix={<DropDownArrowIcon/>}
            disabled={disabled}
            onClick={() => setDropdown(!isDropdown)}
            popoverProps={{
                open: isOpen,
                onOpenChange: onOpenChange
            }}
        />
        {isModalOpen && <TableSizeModal
            initialValues={{
                row: 2,
                col: 5,
            }}
            onCancel={() => {
                setModalOpen(false)
                editor.chain().focus().run()
            }}
            onSubmit={({col, row}) => {
                setModalOpen(false)
                if (editor && col >= 1 && row >= 1) {
                    editor.chain().focus().insertTable({
                        rows: row, cols: col, withHeaderRow: false
                    }).run()
                }
            }}
        />}
    </>
}
