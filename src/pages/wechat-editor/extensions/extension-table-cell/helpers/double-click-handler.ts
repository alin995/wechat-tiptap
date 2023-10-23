import { Editor } from '@tiptap/core'
import { MarkType } from '@tiptap/pm/model'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export type ClickHandlerOptions = {
    editor: Editor
    type: MarkType
}

export function doubleClickHandler(options: ClickHandlerOptions): Plugin {
    return new Plugin({
        key: new PluginKey('handleDoubleClickCell'),
        props: {
            handleDoubleClick: (view, pos, event) => {
                if (event.button !== 0) {
                    return false
                }

                let cellPos = -1
                view.state.doc.nodesBetween(pos, pos, (node, pos) => {
                    if (node.type.name === options.type.name) {
                        cellPos = pos
                        return false
                    }
                    return true
                })

                if (cellPos >= 0) {
                    options.editor.commands.setCellSelection({
                        anchorCell: cellPos
                    })
                }

                return false
            },
        },
    })
}
