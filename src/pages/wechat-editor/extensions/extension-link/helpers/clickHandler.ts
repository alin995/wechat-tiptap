import { getAttributes } from '@tiptap/core'
import { MarkType } from '@tiptap/pm/model'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export type ClickHandlerOptions = {
    type: MarkType
    jointKey?: ["altKey" | "ctrlKey" | "metaKey"]
}

export function clickHandler(options: ClickHandlerOptions): Plugin {
    return new Plugin({
        key: new PluginKey('handleClickLink'),
        props: {
            handleClick: (view, pos, event) => {
                if (event.button !== 0) {
                    return false
                }

                if (options.jointKey?.length > 0 && !options.jointKey.find(key => event[key])) {
                    return false
                }

                const attrs = getAttributes(view.state, options.type.name)
                const link = (event.target as HTMLLinkElement)

                const href = link?.href ?? attrs.href
                const target = link?.target ?? attrs.target

                if (link && href) {
                    if (view.editable) {
                        window.open(href, target)
                    }

                    return true
                }

                return false
            },
        },
    })
}
