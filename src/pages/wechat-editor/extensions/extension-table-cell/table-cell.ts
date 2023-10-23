import { mergeAttributes, Node } from '@tiptap/core'
import { Plugin } from "@tiptap/pm/state";

import { doubleClickHandler } from "./helpers/double-click-handler";

export interface TableCellOptions {
    colspan?: number,
    rowspan?: number,
    colwidth?: number,
    HTMLAttributes: Record<string, any>,
}

// @ts-ignore
export const TableCell = Node.create<TableCellOptions>({
    name: 'tableCell',

    addOptions() {
        return {
            HTMLAttributes: {},
        }
    },

    content: 'block+',

    addAttributes() {
        return {
            colspan: {
                default: 1,
            },
            rowspan: {
                default: 1,
            },
            colwidth: {
                default: null,
                parseHTML: element => {
                    const colwidth = element.getAttribute('colwidth')
                    return colwidth
                        ? [parseInt(colwidth, 10)]
                        : null
                },
            },
        }
    },

    tableRole: 'cell',

    isolating: true,

    parseHTML() {
        return [
            {tag: 'td'},
        ]
    },

    renderHTML({HTMLAttributes}) {
        return ['td', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },

    addProseMirrorPlugins() {
        const plugins: Plugin[] = []

        plugins.push(
            doubleClickHandler({
                editor: this.editor,
                type: this.type,
            }),
        )

        return plugins
    }
})
