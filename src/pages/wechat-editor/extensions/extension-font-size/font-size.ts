import '@tiptap/extension-text-style'

import { Extension } from '@tiptap/core'

export type FontSizeOptions = {
    types: string[],
    baseSize: string
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size
             */
            setFontSize: (fontSize: string) => ReturnType,
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType,
            /**
             * Increase the font size
             */
            incFontSize: (delta: number) => ReturnType,
        }
    }
}

// @ts-ignore
export const FontSize = Extension.create<FontSizeOptions>({
    name: 'fontSize',

    addOptions() {
        return {
            types: ['textStyle'],
            baseSize: '18px'
        }
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: element => {
                            return element.style.fontSize?.replace(/['"]+/g, '')
                        },
                        renderHTML: attributes => {
                            if (!attributes.fontSize) {
                                return {}
                            }
                            return {
                                style: `font-size: ${attributes.fontSize}`,
                            }
                        },
                    },
                },
            },
        ]
    },

    addCommands() {
        return {
            setFontSize: fontSize => ({chain}) => {
                return chain()
                    .setMark('textStyle', {fontSize})
                    .run()
            },
            unsetFontSize: () => ({chain}) => {
                return chain()
                    .setMark('textStyle', {fontSize: null})
                    .removeEmptyTextStyle()
                    .run()
            },
            incFontSize: delta => () => {
                console.warn(`undefined function: incFontSize(${delta})`)
                return chain().run()
            },
        }
    },
})
