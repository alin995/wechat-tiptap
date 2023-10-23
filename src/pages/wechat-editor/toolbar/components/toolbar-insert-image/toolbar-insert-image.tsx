import React, { useMemo } from "react";
import { Popover, Upload } from "antd";
import { Editor } from "@tiptap/react";
import { ImageIcon } from "@wechat-editor/icons";

import { readAsImage, readFileAsDataURL } from "@wechat-editor/utils";

export interface ToolbarInsertImageProps {
    prompt?: string
    editor: Editor
}

export const ToolbarInsertImage = (props: ToolbarInsertImageProps) => {

    const {prompt, editor} = props

    const normalizedPrompt = useMemo(() => {
        return <div className="text-xs">
            {prompt}
        </div>
    }, [prompt])

    const handleImageUpload = async (file) => {
        const dateUrl = await readFileAsDataURL(file)
        const image = await readAsImage(dateUrl)

        if (editor) {
            const extension = editor.extensionManager.extensions.find(({name}) => name === 'image' || name === 'resizableImage')
            editor.chain().focus().insertContent({
                type: extension.name,
                attrs: {
                    src: dateUrl,
                    width: image.width,
                    height: image.height,
                },
            }).run()
        }

        return dateUrl
    }

    return <Popover placement="bottom" content={normalizedPrompt}>
        <Upload
            className="flex flex-nowrap justify-center whitespace-nowrap mx-1 rounded hover:bg-stone-400"
            multiple
            showUploadList={false}
            accept=".png, .jpg, .jpeg, .svg"
            action={handleImageUpload}
        >
            <div className="w-6 h-6 p-[2px]">
                <ImageIcon className="w-5 h-5"/>
            </div>
        </Upload>
    </Popover>
}
