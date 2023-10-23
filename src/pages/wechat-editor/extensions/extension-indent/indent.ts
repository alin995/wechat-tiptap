import { Command, Extension } from '@tiptap/core'
import { Node } from 'prosemirror-model'
import { AllSelection, TextSelection, Transaction } from 'prosemirror-state'

type IndentOptions = {
    types: string[];
    defaultLevel: number;

    minLevel: number;
    maxLevel: number;

    HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        indent: {
            /**
             * Set the indent attribute
             */
            indent: () => ReturnType;
            /**
             * Unset the indent attribute
             */
            outdent: () => ReturnType;
        };
    }
}

export function clamp(val: number, min: number, max: number): number {
    return Math.max(Math.min(max, val), min)
}

export enum IndentProps {
    more = 1,
    less = -1
}

export function isBulletListNode(node: Node): boolean {
    return node.type.name === 'bullet_list'
}

export function isOrderedListNode(node: Node): boolean {
    return node.type.name === 'order_list'
}

export function isTodoListNode(node: Node): boolean {
    return node.type.name === 'todo_list'
}

export function isListNode(node: Node): boolean {
    return isBulletListNode(node) ||
        isOrderedListNode(node) ||
        isTodoListNode(node)
}

export function setNodeIndentMarkup(tr: Transaction, pos: number, delta: number, minIndent: number, maxIndent: number): Transaction {
    if (!tr.doc) return tr

    const node = tr.doc.nodeAt(pos)
    if (!node) return tr

    const indent = clamp(
        (node.attrs.indent || 0) + delta,
        minIndent,
        maxIndent
    )

    if (indent === node.attrs.indent) return tr

    const nodeAttrs = {
        ...node.attrs,
        indent
    }

    return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks)
}

export function updateIndentLevel(tr: Transaction, options: IndentOptions, delta: number): Transaction {
    const {doc, selection} = tr

    if (!doc || !selection) return tr

    if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
        return tr
    }

    const {from, to} = selection

    doc.nodesBetween(from, to, (node, pos) => {
        const nodeType = node.type

        if (nodeType.name === 'paragraph' || nodeType.name === 'heading') {
            tr = setNodeIndentMarkup(tr, pos, delta, options.minLevel, options.maxLevel)
            return false
        }

        return !isListNode(node);
    })

    return tr
}

export function createIndentCommand(delta: number, options: IndentOptions): Command {
    return ({tr, state, dispatch}) => {
        const {selection} = state
        tr = tr.setSelection(selection)
        tr = updateIndentLevel(tr, options, delta)

        if (tr.docChanged) {
            dispatch && dispatch(tr)
            return true
        }

        return false
    }
}

// @ts-ignore
export const Indent = Extension.create<IndentOptions>({
    name: 'indent',

    priority: 99,

    addOptions() {
        return {
            types: ['heading', 'paragraph'],
            defaultLevel: 0,

            minLevel: 0,
            maxLevel: 8,
            HTMLAttributes: {}
        }
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    indent: {
                        default: this.options.defaultLevel,
                        parseHTML: element => {
                            return (parseInt(element.style.textIndent?.replace(/[e|m]+/g, '')) / 2) || this.options.defaultLevel
                            // return parseInt(element.dataset.indent || '0') || this.options.defaultLevel
                        },
                        renderHTML: attributes => {
                            if (attributes.indent === 0) {
                                return {}
                            } else {
                                return {
                                    style: `text-indent: ${attributes.indent * 2}em`,
                                    // 'data-indent': attributes.indent
                                }
                            }
                        },
                    }
                }
            }
        ]
    },

    addCommands() {
        return {
            indent: () => createIndentCommand(IndentProps.more, this.options),
            outdent: () => createIndentCommand(IndentProps.less, this.options)
        }
    },

    addKeyboardShortcuts() {
        return {
            Tab: () => this.editor.commands.indent(),
            'Shift-Tab': () => this.editor.commands.outdent()
        }
    }
})
