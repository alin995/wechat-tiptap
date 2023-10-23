import { mergeAttributes, Node, nodeInputRule, } from '@tiptap/core'

export interface ResizableImageOptions {
    inline: boolean,
    HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        resizableImage: {
            /**
             * Add an image
             */
            setResizableImage: (options: {
                src: string,
                alt?: string,
                width?: number,
                height?: number,
                viewTop?: number,
                viewLeft?: number,
                viewWidth?: number,
                viewHeight?: number,
                rotate?: number,
            }) => ReturnType,
        }
    }
}

export const inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/

// @ts-ignore
export const ResizableImage = Node.create<ResizableImageOptions>({
    name: 'resizableImage',

    addOptions() {
        return {
            inline: false,
            HTMLAttributes: {},
        }
    },

    inline() {
        return this.options.inline
    },

    group() {
        return this.options.inline ? 'inline' : 'block'
    },

    draggable: true,

    addAttributes() {
        return {
            src: {
                default: null,
            },
            alt: {
                default: null,
            },
            width: {
                default: null,
            },
            height: {
                default: null,
            },
            viewTop: {
                default: 0
            },
            viewLeft: {
                default: 0
            },
            viewWidth: {
                default: null
            },
            viewHeight: {
                default: null
            },
            rotate: {
                default: 0,
            },
        }
    },

    parseHTML() {
        return [
            {
                tag: 'span img[src]'
            },
        ]
    },

    renderHTML({HTMLAttributes}) {
        const {src, alt, width, height, viewTop, viewLeft, rotate} = HTMLAttributes

        const emptyDOMSpec = ['span', this.options.HTMLAttributes, ['img', {
            src, alt,
        }]]

        if (!src) {
            return emptyDOMSpec
        }

        if (!width || !height) {
            return emptyDOMSpec
        }

        const viewWidth = HTMLAttributes.viewWidth || width
        const viewHeight = HTMLAttributes.viewHeight || height

        const containerAttrs = mergeAttributes(this.options.HTMLAttributes, {
            style: [
                `overflow: hidden`,
                `width: ${viewWidth}px`,
                `height: ${viewHeight}px`,
            ].join("; ")
        })

        return ['div', containerAttrs, ['div', {style: `width: ${width}px; height: ${height}px;`}, ['img', {
            src, alt, style: [
                `width: ${width}px`,
                `height: ${height}px`,
                `margin-left: ${-viewLeft}px`,
                `margin-top: ${-viewTop}px`,
                `transform-origin: center center`,
                `transform: rotate(${rotate}deg)`,
            ].join("; "),
            "data-width": width,
            "data-height": height,
            "data-view-top": viewTop,
            "data-view-left": viewLeft,
            "data-view-width": viewWidth,
            "data-view-height": viewHeight,
            "data-rotate": rotate,
        }]]]
    },

    addCommands() {
        return {
            setResizableImage: options => ({commands}) => {
                return commands.insertContent({
                    type: this.name,
                    attrs: options,
                })
            },
        }
    },

    addInputRules() {
        return [
            nodeInputRule({
                find: inputRegex,
                type: this.type,
                getAttributes: match => {
                    const [, , alt, src, title] = match
                    console.log(match)

                    return {src, alt, title}
                },
            }),
        ]
    },
})
