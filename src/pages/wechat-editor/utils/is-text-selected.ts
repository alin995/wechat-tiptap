import { Editor, findChildrenInRange } from "@tiptap/react";
import { isCellSelection } from "./is-cell-selection";
import { CellSelection } from "@tiptap/pm/tables";

export const isTextSelected = (editor: Editor) => {
    if (editor.state.selection.content().size === 0) {
        return false
    }


    if (isCellSelection(editor)) {
        let textContent = '';

        (editor.state.selection as CellSelection).forEachCell(node => {
            textContent = textContent + (node.textContent || '')
        })

        return textContent.trim().length > 0
    }

    const activeNodePos = findChildrenInRange(editor.state.doc, {
        from: editor.state.selection.from,
        to: editor.state.selection.to,
    }, node => {
        return node.isText
    })

    return activeNodePos.length > 0
}
