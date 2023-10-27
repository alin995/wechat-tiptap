import { callOrReturn, getExtensionField, mergeAttributes, Node, ParentConfig, } from '@tiptap/core'
import { findChildren } from "@tiptap/react";
import { NodeSelection, TextSelection } from '@tiptap/pm/state'
import {
    addColumn,
    addColumnAfter,
    addColumnBefore,
    addRowAfter,
    addRowBefore,
    CellSelection,
    columnResizing,
    deleteColumn,
    deleteRow,
    deleteTable,
    fixTables,
    goToNextCell,
    mergeCells,
    selectedRect,
    setCellAttr,
    splitCell,
    tableEditing,
    TableMap,
    toggleHeader,
    toggleHeaderCell
} from '@tiptap/pm/tables'
import { NodeView } from '@tiptap/pm/view'
import { TableView } from './table-view'
import { createTable, deleteTableWhenAllCellsSelected } from './utilities'

export interface TableOptions {
    HTMLAttributes: Record<string, any>
    resizable: boolean
    handleWidth: number
    cellMinWidth: number
    View: NodeView
    lastColumnResizable: boolean
    allowTableNodeSelection: boolean
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        table: {
            insertTable: (options?: {
                rows?: number
                cols?: number
                withHeaderRow?: boolean
            }) => ReturnType
            addColumnBefore: () => ReturnType
            addColumnAfter: () => ReturnType
            deleteColumn: () => ReturnType
            addRowBefore: () => ReturnType
            addRowAfter: () => ReturnType
            deleteRow: () => ReturnType
            deleteTable: () => ReturnType
            mergeCells: () => ReturnType
            splitCell: () => ReturnType
            toggleHeaderColumn: () => ReturnType
            toggleHeaderRow: () => ReturnType
            toggleHeaderCell: () => ReturnType
            mergeOrSplit: () => ReturnType
            setCellAttribute: (name: string, value: any) => ReturnType
            goToNextCell: () => ReturnType
            goToPreviousCell: () => ReturnType
            fixTables: () => ReturnType
            setCellSelection: (position: { anchorCell: number; headCell?: number }) => ReturnType
        }
    }

    interface NodeConfig<Options, Storage> {
        /**
         * Table Role
         */
        tableRole?:
            | string
            | ((this: {
            name: string
            options: Options
            storage: Storage
            parent: ParentConfig<NodeConfig<Options, Storage>>['tableRole']
        }) => string)
    }
}

// @ts-ignore
export const Table = Node.create<TableOptions>({
    name: 'table',

    // @ts-ignore
    addOptions() {
        return {
            HTMLAttributes: {},
            resizable: false,
            handleWidth: 5,
            cellMinWidth: 25,
            // TODO: fix
            // View: TableView,
            lastColumnResizable: true,
            allowTableNodeSelection: false,
        }
    },

    content: 'tableRow+',

    tableRole: 'table',

    isolating: true,

    group: 'block',

    parseHTML() {
        return [{tag: 'table'}]
    },

    renderHTML({HTMLAttributes}) {
        return ['table', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), ['tbody', 0]]
    },

    addNodeView() {
        return ({editor, node, getPos,}) => {
            const selectTable = () => {
                editor.chain().focus().setNodeSelection(getPos()).run()
            }

            const selectColumn = (col: number) => {
                const tablePos = getPos()
                const table = editor.state.tr.doc.nodeAt(tablePos)
                const {width, height, map} = TableMap.get(table);
                const first = tablePos + map[col] + 1
                const last = tablePos + map[width * (height - 1) + col] + 1
                const selection = CellSelection.create(editor.state.tr.doc, first, last)
                editor.view.dispatch(editor.state.tr.setSelection(selection))
            }

            const insertColumn = (col: number) => {
                const tr = editor.state.tr.setSelection(NodeSelection.create(editor.state.doc, getPos()))
                addColumn(tr, selectedRect(editor.state), col)
                editor.view.dispatch(tr)
                selectColumn(col)
            }

            const selectRow = (row: number) => {
                const tableStart = getPos()
                const table = editor.state.doc.nodeAt(tableStart)
                const nodesWithPos = findChildren(table, x => x.type.name === 'tableRow')

                if (row >= 0 && row < nodesWithPos.length) {
                    const selection = NodeSelection.create(editor.state.doc, tableStart + nodesWithPos[row].pos + 1)
                    editor.view.dispatch(editor.state.tr.setSelection(selection));
                    return true
                }

                return false
            }

            const insertRow = (row: number) => {
                if (selectRow(row)) {
                    editor.chain().focus().addRowBefore().run()
                } else if (selectRow(row - 1)) {
                    editor.chain().focus().addRowAfter().run()
                }
            }

            return new TableView(node, this.options.cellMinWidth, {
                selectTable, selectColumn, insertColumn, selectRow, insertRow
            })
        }
    },

    addCommands() {
        return {
            insertTable:
                ({rows = 3, cols = 3, withHeaderRow = true} = {}) => ({tr, dispatch, editor}) => {
                    const node = createTable(editor.schema, rows, cols, withHeaderRow)

                    if (dispatch) {
                        const offset = tr.selection.anchor + 1

                        tr.replaceSelectionWith(node)
                            .scrollIntoView()
                            .setSelection(TextSelection.near(tr.doc.resolve(offset)))
                    }

                    return true
                },
            addColumnBefore:
                () => ({state, dispatch}) => {
                    return addColumnBefore(state, dispatch)
                },
            addColumnAfter:
                () => ({state, dispatch}) => {
                    return addColumnAfter(state, dispatch)
                },
            deleteColumn:
                () => ({state, dispatch}) => {
                    return deleteColumn(state, dispatch)
                },
            addRowBefore:
                () => ({state, dispatch}) => {
                    return addRowBefore(state, dispatch)
                },
            addRowAfter:
                () => ({state, dispatch}) => {
                    return addRowAfter(state, dispatch)
                },
            deleteRow:
                () => ({state, dispatch}) => {
                    return deleteRow(state, dispatch)
                },
            deleteTable:
                () => ({state, dispatch}) => {
                    return deleteTable(state, dispatch)
                },
            mergeCells:
                () => ({state, dispatch}) => {
                    return mergeCells(state, dispatch)
                },
            splitCell:
                () => ({state, dispatch}) => {
                    return splitCell(state, dispatch)
                },
            toggleHeaderColumn:
                () => ({state, dispatch}) => {
                    return toggleHeader('column')(state, dispatch)
                },
            toggleHeaderRow:
                () => ({state, dispatch}) => {
                    return toggleHeader('row')(state, dispatch)
                },
            toggleHeaderCell:
                () => ({state, dispatch}) => {
                    return toggleHeaderCell(state, dispatch)
                },
            mergeOrSplit:
                () => ({state, dispatch}) => {
                    if (mergeCells(state, dispatch)) {
                        return true
                    }

                    return splitCell(state, dispatch)
                },
            setCellAttribute:
                (name, value) => ({state, dispatch}) => {
                    return setCellAttr(name, value)(state, dispatch)
                },
            goToNextCell:
                () => ({state, dispatch}) => {
                    return goToNextCell(1)(state, dispatch)
                },
            goToPreviousCell:
                () => ({state, dispatch}) => {
                    return goToNextCell(-1)(state, dispatch)
                },
            fixTables:
                () => ({state, dispatch}) => {
                    if (dispatch) {
                        fixTables(state)
                    }

                    return true
                },
            setCellSelection:
                position => ({tr, dispatch}) => {
                    if (dispatch) {
                        const selection = CellSelection.create(tr.doc, position.anchorCell, position.headCell)

                        // @ts-ignore
                        tr.setSelection(selection)
                    }

                    return true
                },
        }
    },

    addKeyboardShortcuts() {
        return {
            Tab: () => {
                if (this.editor.commands.goToNextCell()) {
                    return true
                }

                if (!this.editor.can().addRowAfter()) {
                    return false
                }

                return this.editor.chain().addRowAfter().goToNextCell().run()
            },
            'Shift-Tab': () => this.editor.commands.goToPreviousCell(),
            Backspace: deleteTableWhenAllCellsSelected,
            'Mod-Backspace': deleteTableWhenAllCellsSelected,
            Delete: deleteTableWhenAllCellsSelected,
            'Mod-Delete': deleteTableWhenAllCellsSelected,
        }
    },

    addProseMirrorPlugins() {
        const isResizable = this.options.resizable && this.editor.isEditable

        return [
            ...(isResizable
                ? [
                    columnResizing({
                        handleWidth: this.options.handleWidth,
                        cellMinWidth: this.options.cellMinWidth,
                        // @ts-ignore (incorrect type)
                        View: this.options.View,
                        // TODO: PR for @types/prosemirror-tables
                        // @ts-ignore (incorrect type)
                        lastColumnResizable: this.options.lastColumnResizable,
                    }),
                ]
                : []),
            tableEditing({
                allowTableNodeSelection: this.options.allowTableNodeSelection,
            }),
        ]
    },

    extendNodeSchema(extension) {
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage,
        }

        return {
            tableRole: callOrReturn(getExtensionField(extension, 'tableRole', context)),
        }
    },
})
