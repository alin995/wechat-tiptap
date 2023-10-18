import { Editor } from "@tiptap/react";
import { CellSelection } from "@tiptap/pm/tables";

export const isCellSelection = (editor: Editor) => {
    return editor.state.selection instanceof CellSelection
}

export const analyzeCellSelection = (editor: Editor) => {
    const selection = editor.state.selection as CellSelection

    let cellCount = 0
    let mergedCellCount = 0

    selection.forEachCell(cell => {
        cellCount++
        if (cell.attrs.colspan > 1 || cell.attrs.rowspan > 1) {
            mergedCellCount++
        }
    })

    return {
        isRowSelection: selection.isRowSelection(),
        isColSelection: selection.isColSelection(),
        cellCount,
        mergedCellCount,
    }
}
