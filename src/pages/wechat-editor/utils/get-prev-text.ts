import { Editor } from "@tiptap/react";

export const getPrevText = (editor: Editor, chars: number, offset = 0) => {
    return editor.state.doc.textBetween(
        Math.max(0, editor.state.selection.from - chars),
        editor.state.selection.from - offset,
        "\n",
    );
};

