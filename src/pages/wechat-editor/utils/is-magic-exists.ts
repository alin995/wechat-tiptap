import { Editor, findChildren } from "@tiptap/react";


export const findMagicPos = (editor: Editor) => {
    const nodeWithPos = findChildren(editor.state.doc, ({type}) => type.name === 'magic')
    return nodeWithPos.length > 0 ? nodeWithPos[0].pos : -1;
}

export const isMagicExists = (editor: Editor) => {
    return findMagicPos(editor) >= 0
}
