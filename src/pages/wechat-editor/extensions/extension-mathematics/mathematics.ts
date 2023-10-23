import { Editor, Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet, } from "@tiptap/pm/view";

import * as plainKatex from "katex";

const interopDefaultLegacy = (x) => {
    return x && typeof x === 'object' && 'default' in x ? x : {'default': x};
}

const katex = interopDefaultLegacy(plainKatex);

export type MathematicsOptions = {
    regex: RegExp;
    katexOptions?: katex.KatexOptions;
};

export type MathematicsOptionsWithEditor = MathematicsOptions & {
    editor: Editor;
};


// @ts-ignore
export const MathematicsPlugin = (options: MathematicsOptionsWithEditor): Plugin<DecorationSet> => {
    const {regex, katexOptions = {}, editor} = options;

    return new Plugin({
        key: new PluginKey("mathematics"),

        state: {
            init: () => DecorationSet.empty,

            apply(tr, decorationSet, oldState, newState) {
                const {selection} = newState
                const decorations = [];
                newState.doc.descendants(((node, pos) => {
                    if (node.isText && node.text) {
                        let arr;
                        while ((arr = regex.exec(node.text))) {
                            const expressionStart = pos + arr.index
                            const expressionEnd = expressionStart + arr[0].length
                            const expression = arr[1];
                            if (expression) {
                                const selectRange = selection.$from.pos - selection.$to.pos
                                const hasAnchor = selection.$anchor.pos >= expressionStart && selection.$anchor.pos <= expressionEnd
                                const hasSelection = selection.$from.pos >= expressionStart && selection.$to.pos <= expressionEnd

                                const isPlainExpression = selectRange === 0 && hasAnchor || hasSelection;

                                if (!isPlainExpression || !editor.isEditable) {
                                    decorations.push(Decoration.widget(expressionStart, (() => {
                                        const element = document.createElement("span");
                                        element.classList.add("mathematics-render")
                                        editor.isEditable && element.classList.add("Tiptap-mathematics-render--editable");
                                        try {
                                            katex.default.render(expression, element, katexOptions)
                                        } catch (e) {
                                            element.innerHTML = expression
                                        }
                                        return element
                                    })))

                                    decorations.push(Decoration.inline(expressionStart, expressionEnd, {
                                        class: "Tiptap-mathematics-editor Tiptap-mathematics-editor--hidden",
                                        style: "display: inline-block; height: 0; opacity: 0; overflow: hidden; position: absolute; width: 0;"
                                    }))

                                } else {
                                    decorations.push(Decoration.inline(expressionStart, expressionEnd, {
                                        class: "Tiptap-mathematics-editor"
                                    }))
                                }
                            }
                        }
                    }
                }))

                return decorations.length > 0 ? DecorationSet.create(newState.doc, decorations) : DecorationSet.empty
            },
        },

        props: {
            decorations(state) {
                return this.getState(state)
            }
        }
    })
}

// @ts-ignore
export const Mathematics = Extension.create<MathematicsOptions>({

    name: "mathematics",

    addOptions: () => ({
        regex: /\$([^$]*)\$/gi,
        katexOptions: null,
    }),

    addProseMirrorPlugins() {
        return [
            MathematicsPlugin({
                ...this.options,
                editor: this.editor
            })
        ]
    }
});

