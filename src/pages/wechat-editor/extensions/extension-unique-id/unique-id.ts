import { combineTransactionSteps, Extension, findChildren, findChildrenInRange, findDuplicates, getChangedRanges, removeDuplicates } from "@tiptap/core";
import { Plugin, PluginKey, Transaction } from "@tiptap/pm/state";
import { Fragment as ProseMirrorFragment, Slice as ProseMirrorSlice } from "@tiptap/pm/model"

import { v4 as generateUuidV4 } from "uuid";


const uniqueDuplicates = (array: []) => {
    return removeDuplicates(findDuplicates(array))
}

export interface UniqueIDOptions {
    attributeName: string;
    types: string[];
    generateID: () => any;
    filterTransaction: ((transaction: Transaction) => boolean) | null;
}

// @ts-ignore
export const UniqueID = Extension.create<UniqueIDOptions>({

    name: "uniqueID",

    priority: 10000,

    addOptions: () => {
        return {
            attributeName: "id",
            types: [],
            generateID: () => generateUuidV4(),
            filterTransaction: null
        }
    },

    addGlobalAttributes() {
        return [{
            types: this.options.types,
            attributes: {
                [this.options.attributeName]: {
                    default: null,
                    parseHTML: element => element.getAttribute(`data-${this.options.attributeName}`),
                    renderHTML: props => props[this.options.attributeName] ? {[`data-${this.options.attributeName}`]: props[this.options.attributeName]} : {}
                }
            }
        }]
    },

    onCreate() {
        if (this.editor.extensionManager.extensions.find(({name}) => "collaboration" === name)) {
            return;
        }

        const {view, state} = this.editor
        const {tr, doc} = state
        const {types, attributeName, generateID} = this.options;

        findChildren(doc, node => types.includes(node.type.name) && node.attrs[attributeName])
            .forEach(({node: t, pos: e}) => {
                tr.setNodeMarkup(e, null, {
                    ...t.attrs,
                    [attributeName]: generateID()
                })
            })
        tr.setMeta("addToHistory", false)
        view.dispatch(tr)
    },

    addProseMirrorPlugins() {
        let targetElement = null
        let documentChanged = false;

        return [new Plugin({

            key: new PluginKey("uniqueID"),

            appendTransaction: (transactions, oldState, newState) => {
                const docChanges = transactions.some(transaction => transaction.docChanged) && !oldState.doc.eq(newState.doc)
                if (!docChanges) {
                    return
                }

                const customDocChanges = this.options.filterTransaction && transactions.some(transaction => {
                    return !this.options.filterTransaction.call(this.options, transaction)
                });
                if (!customDocChanges) {
                    return;
                }

                const {tr} = newState
                const {types, attributeName, generateID} = this.options

                const transform = combineTransactionSteps(oldState.doc, transactions)
                const {mapping} = transform

                getChangedRanges(transform).forEach(({newRange}) => {
                    const nodesWithPos = findChildrenInRange(newState.doc, newRange, node => types.includes(node.type.name))

                    const uuids = nodesWithPos.map(({node}) => node.attrs[attributeName]).filter(uuid => uuid);

                    nodesWithPos.forEach(({node, pos}, idx) => {
                        const uuid = tr.doc.nodeAt(pos)?.attrs[attributeName];
                        if (!uuid) {
                            tr.setNodeMarkup(pos, null, {
                                ...node.attrs,
                                [attributeName]: generateID()
                            });
                            return
                        }

                        if (node.content.size === 0 && nodesWithPos.length > idx + 1) {
                            const nextNodeWithPos = nodesWithPos[idx + 1];
                            tr.setNodeMarkup(nextNodeWithPos.pos, null, {
                                ...nextNodeWithPos.node.attrs,
                                [attributeName]: uuid
                            })

                            uuids[idx + 1] = uuid;
                            const newUuid = generateID();
                            tr.setNodeMarkup(pos, null, {
                                ...node.attrs,
                                [attributeName]: newUuid
                            })
                            uuids[idx] = newUuid
                            return tr
                        }

                        const duplicateUuids = uniqueDuplicates(uuids)
                        const {deleted} = mapping.invert().mapResult(pos);
                        deleted && duplicateUuids.includes(uuid) && tr.setNodeMarkup(pos, null, {
                            ...node.attrs,
                            [attributeName]: generateID()
                        })
                    })
                })
                return tr.steps.length ? tr : null
            },

            view(view) {
                const onDragStart = event => {
                    const parentElement = view.dom.parentElement
                    targetElement = parentElement?.contains(event.target) ? parentElement : null
                };

                window.addEventListener("dragstart", onDragStart)

                return {
                    destroy() {
                        window.removeEventListener("dragstart", onDragStart)
                    }
                }
            },

            props: {
                handleDOMEvents: {
                    drop: (view, event) => {
                        const dataTransfer = event.dataTransfer
                        if (targetElement !== view.dom.parentElement || dataTransfer?.effectAllowed === "copy") {
                            targetElement = null
                            documentChanged = true
                        }
                        return false
                    },
                    paste: () => {
                        documentChanged = true
                        return false
                    }
                },

                transformPasted: (slice: ProseMirrorSlice) => {
                    if (!documentChanged) {
                        return slice;
                    }

                    const {types, attributeName} = this.options

                    const normalizeNodes = nodes => {
                        const normalizedNodes = [];
                        nodes.forEach(node => {
                            if (node.isText) {
                                normalizedNodes.push(node);

                            } else if (!types.includes(node.type.name)) {
                                normalizedNodes.push(node.copy(uniqueDuplicates(node.content)));

                            } else {
                                const n = node.type.create({
                                        ...node.attrs,
                                        [attributeName]: null
                                    },
                                    normalizeNodes(node.content),
                                    node.marks
                                );
                                normalizedNodes.push(n)
                            }
                        })
                        return ProseMirrorFragment.from(normalizedNodes)
                    };

                    documentChanged = false

                    return new ProseMirrorSlice(normalizeNodes(slice.content), slice.openStart, slice.openEnd)
                }
            }
        })]
    }
});
