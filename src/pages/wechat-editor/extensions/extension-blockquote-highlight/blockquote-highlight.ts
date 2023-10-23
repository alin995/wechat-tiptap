import { mergeAttributes, Node, wrappingInputRule } from '@tiptap/core'

export interface BlockquoteHighlightOptions {
    HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        blockQuoteHighlight: {
            /**
             * Set a blockquote node
             */
            setBlockquoteHighlight: () => ReturnType,
            /**
             * Toggle a blockquote node
             */
            toggleBlockquoteHighlight: () => ReturnType,
            /**
             * Unset a blockquote node
             */
            unsetBlockquoteHighlight: () => ReturnType,
        }
    }
}

export const inputRegex = /^\s*>\s$/

export const BlockquoteHighlight = Node.create<BlockquoteHighlightOptions>({

    name: 'blockquoteHighlight',

    addOptions() {
        return {
            HTMLAttributes: {
                class: "blockquote-highlight"
            },
        }
    },

    content: 'block+',

    group: 'block',

    defining: true,

    parseHTML() {
        return [
            {
                tag: 'div.blockquote-highlight',
            },
        ]
    },

    renderHTML({HTMLAttributes}) {
        return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
    },

    addCommands() {
        return {
            setBlockquoteHighlight: () => ({commands}) => {
                return commands.wrapIn(this.name)
            },
            toggleBlockquoteHighlight: () => ({commands}) => {
                return commands.toggleWrap(this.name)
            },
            unsetBlockquoteHighlight: () => ({commands}) => {
                return commands.lift(this.name)
            },
        }
    },

    addInputRules() {
        return [
            wrappingInputRule({
                find: inputRegex,
                type: this.type,
            }),
        ]
    },
})
