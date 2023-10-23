// @ts-nocheck
import { Node as ProseMirrorNode } from '@tiptap/pm/model'
import { NodeView } from '@tiptap/pm/view'

import { createElementWithAttributes, stopEvent } from "./utilities";

export interface TableViewActions {
    selectTable?: () => void
    insertColumn?: (col: number) => void
    selectColumn?: (col: number) => void
    insertRow?: (col: number) => void
    selectRow?: (row: number) => void
}


export class TableView implements NodeView {
    node: ProseMirrorNode

    cellMinWidth: number

    actions: TableViewActions

    dom: Element

    table: Element

    colgroup: Element

    contentDOM: Element

    tableHead: Element
    tableHeadRow: Element
    rowActions: Element

    constructor(node: ProseMirrorNode, cellMinWidth: number, actions: TableViewActions) {
        this.node = node
        this.cellMinWidth = cellMinWidth
        this.actions = actions

        this.dom = createElementWithAttributes('div', {
            class: 'wechat-editor-table-wrapper'
        })

        this.dom.appendChild(createElementWithAttributes('div', {
            class: 'wechat-editor-table-actions'
        }, {
            click: (event) => {
                stopEvent(event)
                actions.selectTable?.()
            }
        }))

        this.table = this.dom.appendChild(document.createElement('table'))

        this.colgroup = this.table.appendChild(document.createElement('colgroup'))
        updateColumns(node, this.colgroup, this.table, this.cellMinWidth)

        this.tableHead = this.table.appendChild(document.createElement('thead'))
        this.tableHeadRow = this.tableHead.appendChild(document.createElement('tr'))
        updateColumnControls(node, this.tableHeadRow, this.actions)

        this.rowActions = this.dom.appendChild(createElementWithAttributes('div', {
            class: 'wechat-editor-table-row-actions'
        }))
        updateRowControls(node, this.rowActions, this.actions)

        this.contentDOM = this.table.appendChild(document.createElement('tbody'))

        repositionRowSize(this.contentDOM, this.rowActions)
    }

    update(node: ProseMirrorNode) {
        if (node.type !== this.node.type) {
            return false
        }

        this.node = node
        updateColumns(node, this.colgroup, this.table, this.cellMinWidth)
        updateColumnControls(node, this.tableHeadRow, this.actions)
        updateRowControls(node, this.rowActions, this.actions)
        repositionRowSize(this.contentDOM, this.rowActions)

        return true
    }

    ignoreMutation(mutation: MutationRecord | { type: 'selection'; target: Element }) {
        if (mutation.target.classList.contains('row-action-container')) {
            return true
        }
        return mutation.type === 'attributes' && (mutation.target === this.table || this.colgroup.contains(mutation.target))
    }

}

export const updateColumns = (node: ProseMirrorNode, colgroup: Element, table: Element, cellMinWidth: number) => {
    let totalWidth = 0
    let fixedWidth = true
    let nextDOM = colgroup.firstChild
    const row = node.firstChild

    if (row) {
        for (let i = 0, col = 0; i < row.childCount; i += 1) {
            const {colspan, colwidth} = row.child(i).attrs

            for (let j = 0; j < colspan; j += 1, col += 1) {
                const hasWidth = colwidth ? colwidth[j] : false
                const cssWidth = hasWidth ? `${hasWidth}px` : ''

                totalWidth += hasWidth || cellMinWidth

                if (!hasWidth) {
                    fixedWidth = false
                }

                if (!nextDOM) {
                    colgroup.appendChild(document.createElement('col')).style.width = cssWidth
                } else {
                    if (nextDOM["style"].width !== cssWidth) {
                        nextDOM["style"].width = cssWidth
                    }
                    nextDOM = nextDOM.nextSibling
                }
            }
        }
    }

    while (nextDOM) {
        const after = nextDOM.nextSibling

        nextDOM.parentNode.removeChild(nextDOM)
        nextDOM = after
    }

    if (fixedWidth) {
        table["style"].width = `${totalWidth}px`
        table["style"].minWidth = ''
    } else {
        table["style"].width = ''
        table["style"].minWidth = `${totalWidth}px`
    }
}

// 为 table -> thead -> tr 装配 th
export const updateColumnControls = (node: ProseMirrorNode, tableHeadRow: Element, actions: TableViewActions) => {
    let nextDOM = tableHeadRow.firstChild
    const row = node.firstChild
    if (row) {
        for (let i = 0, col = 0; i < row.childCount; i += 1) {
            const {colspan} = row.child(i).attrs

            for (let j = 0; j < colspan; j += 1, col += 1) {
                if (nextDOM) {
                    nextDOM = nextDOM.nextSibling

                } else {
                    const th = tableHeadRow.appendChild(createElementWithAttributes("th"))

                    const overlay = th.appendChild(createElementWithAttributes("div", {
                        "class": "column-action-overlay",
                    }))

                    const insertBeforeContainer = overlay.appendChild(createElementWithAttributes("div", {
                        "class": "column-action-container",
                        "data-col": col,
                    }, {
                        click: (event) => {
                            stopEvent(event)
                            actions.selectColumn?.(Number(event.target.dataset["col"]))
                        }
                    }))

                    insertBeforeContainer.appendChild(createElementWithAttributes("div", {
                        "class": "column-action-insert-before",
                        "data-col": col,
                    }, {
                        click: (event) => {
                            stopEvent(event)
                            actions.insertColumn?.(Number(event.target.dataset["col"]))
                        }
                    }))

                    const insertAfterContainer = overlay.appendChild(createElementWithAttributes("div", {
                        "class": "column-action-container",
                        "data-col": col,
                    }, {
                        click: (event) => {
                            stopEvent(event)
                            actions.selectColumn?.(Number(event.target.dataset["col"]))
                        }
                    }))

                    insertAfterContainer.appendChild(createElementWithAttributes("div", {
                        "class": "column-action-insert-after",
                        "data-col": col + 1,
                    }, {
                        click: (event) => {
                            stopEvent(event)
                            actions.insertColumn?.(Number(event.target.dataset["col"]))
                        }
                    }))
                }
            }
        }
    }

    while (nextDOM) {
        const after = nextDOM.nextSibling

        nextDOM.parentNode.removeChild(nextDOM)
        nextDOM = after
    }
}


// 为 table -> thead -> tr 装配 th
export const updateRowControls = (node: ProseMirrorNode, rowActions: Element, actions: TableViewActions) => {
    let nextDOM = rowActions.firstChild
    const row = node.firstChild
    if (row) {
        for (let row = 0; row < node.childCount; row += 1) {
            if (nextDOM) {
                nextDOM = nextDOM.nextSibling

            } else {
                const overlay = rowActions.appendChild(createElementWithAttributes("div", {
                    class: "row-action-overlay",
                }))

                const insertBeforeContainer = overlay.appendChild(createElementWithAttributes("div", {
                    class: "row-action-container",
                    "data-row": row,
                }, {
                    click: (event) => {
                        stopEvent(event)
                        actions.selectRow?.(Number(event.target.dataset["row"]))
                    }
                }))

                insertBeforeContainer.appendChild(createElementWithAttributes("div", {
                    class: "row-action-insert-before",
                    "data-row": row,
                }, {
                    click: (event) => {
                        stopEvent(event)
                        actions.insertRow?.(Number(event.target.dataset["row"]))
                    }
                }))

                const insertAfterContainer = overlay.appendChild(createElementWithAttributes("div", {
                    class: "row-action-container",
                    "data-row": row,
                }, {
                    click: (event) => {
                        stopEvent(event)
                        actions.selectRow?.(Number(event.target.dataset["row"]))
                    }
                }))

                insertAfterContainer.appendChild(createElementWithAttributes("div", {
                    class: "row-action-insert-after",
                    "data-row": row + 1,
                }, {
                    click: (event) => {
                        stopEvent(event)
                        actions.insertRow?.(Number(event.target.dataset["row"]))
                    }
                }))
            }
        }
    }

    while (nextDOM) {
        const after = nextDOM.nextSibling

        nextDOM.parentNode.removeChild(nextDOM)
        nextDOM = after
    }
}

const repositionRowSize = (contentDOM: Element, rowActions: Element) => {
    setTimeout(() => {
        const rowElements = contentDOM.getElementsByTagName("tr")
        const actionElements = rowActions.getElementsByClassName("row-action-container")

        for (let idx = 0; idx < rowElements.length && idx < (actionElements.length / 2); idx += 1) {
            const rowElement = rowElements[idx]
            const coords = rowElement.getBoundingClientRect();
            const height = coords.height - 1

            actionElements[idx * 2]["style"].height = `${height / 2}px`;
            actionElements[idx * 2 + 1]["style"].height = `${height / 2}px`;
        }
    });
};
