import { mergeAttributes, Node, ReactNodeViewRenderer } from "@tiptap/react";

import { MagicNodeView } from "./magic-node-view";


export interface MagicOptions {
    selectionFrom: number;
    selectionTo: number;
    selectionText: string;
    selectionJSON: Record<string, any> | Array<Record<string, any>>;
    HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        magic: {
            /**
             * Add an image
             */
            activateMagic: () => ReturnType,
        }
    }
}

// @ts-ignore
export const Magic = Node.create<MagicOptions>({

    name: "magic",

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

    inline: false,

    group: "block",

    editable: false,

    draggable: false,

    addAttributes() {
        return {
            selectionFrom: {
                default: -1,
            },
            selectionTo: {
                default: -1,
            },
            selectionText: {
                default: '',
            },
            selectionJSON: {
                default: null,
            },
            prevText: {
                default: '',
            },
        };
    },

    selectable: true,

    parseHTML() {
        return [{
            tag: 'magic-component',
        }];
    },

    renderHTML({HTMLAttributes}) {
        return [
            "magic-component", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
        ];
    },

    addNodeView() {
        return ReactNodeViewRenderer(MagicNodeView);
    },

    addCommands() {
        return {
            activateMagic: () => (props) => {
                const {chain, state} = props

                const selectionFrom = state.selection.from
                const selectionTo = state.selection.to
                const selectionText = state.doc.textBetween(selectionFrom, selectionTo)
                const selectionJSON = selectionText.length === 0 ? null : state.selection.content().content.toJSON()
                const prevText = state.doc.textBetween(Math.max(0, selectionTo - 5000), selectionTo, "\n",);
                return chain()
                    .setHighlight({
                        color: "var(--text-blue-600)"
                    })
                    .setTextSelection({from: selectionTo, to: selectionTo})
                    .insertContent({
                        type: this.name,
                        attrs: {
                            selectionFrom, selectionTo, selectionText, selectionJSON, prevText
                        }
                    })
                    .run()
            },
        }
    },

});
