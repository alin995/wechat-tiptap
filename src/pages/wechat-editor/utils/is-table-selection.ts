import { Editor } from "@tiptap/react";
import { NodeSelection } from "@tiptap/pm/state";

export const isTableSelection = (editor: Editor) => {
    if (editor.state.selection instanceof NodeSelection) {
        return editor.state.selection.node.type.name === 'table'
    }

    return false
}
