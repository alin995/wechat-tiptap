import React, { useState } from "react";
import { notification } from "antd";
import { BubbleMenu, Editor, findChildrenInRange } from "@tiptap/react";
import { CopyLinkIcon, EditIcon, UnlinkIcon } from "@wechat-editor/icons";
import { copyToClipboard } from "@wechat-editor/utils";

import { BubbleMenuItem, BubbleMenuItemDivider } from "../components/bubble-menu-item";
import { LinkModal, LinkModelFormFields } from "../components/link-modal/link-modal";

// import styles from "./index.module.less"

const styles = {

}


export interface LinkBubbleMenuProps {
    editor: Editor
}

export const LinkBubbleMenu = (props: LinkBubbleMenuProps) => {

    const {editor = null} = props

    const [isLinkModalOpen, setLinkModalOpen] = useState(false);
    const [linkModalFieldsValue, setLinkModalFieldsValue] = useState<LinkModelFormFields>({})

    const findActiveNodePos = () => {
        const nodesWithPos = findChildrenInRange(editor.state.doc, {
            from: editor.state.selection.from - 1,
            to: editor.state.selection.to,
        }, node => node.isText)

        return nodesWithPos.length > 0 ? nodesWithPos[0] : {}
    }

    const shouldShow = ({editor}) => {
        if (editor.state.selection.from !== editor.state.selection.to) {
            return false
        }
        return editor.getAttributes("link")?.href
    }

    const tippyOptions = {
        moveTransition: "transform 0.15s ease-out",
    }

    return <>
        <BubbleMenu
            className={styles.haydnBubbleMenu}
            editor={editor}
            shouldShow={shouldShow}
            tippyOptions={tippyOptions}
        >
            <BubbleMenuItem
                title="打开链接"
                onClick={() => {
                    const href = editor?.getAttributes("link")?.href
                    if (href) {
                        window.open(href, "_blank")
                    }
                }}
            />

            <BubbleMenuItemDivider/>

            <BubbleMenuItem
                icon={<CopyLinkIcon/>}
                onClick={() => {
                    const href = editor?.getAttributes("link")?.href
                    if (href) {
                        copyToClipboard(href).then(() => {
                            notification.info({
                                message: '链接已复制'
                            })
                        })
                    }
                }}
            />

            <BubbleMenuItem
                icon={<EditIcon/>}
                onClick={() => {
                    const {node} = findActiveNodePos()

                    setLinkModalFieldsValue({
                        text: node?.text || '',
                        href: editor.getAttributes("link")?.href,
                        target: editor.getAttributes("link")?.target === '_blank',
                    })
                    setLinkModalOpen(true)
                }}
            />
            <BubbleMenuItemDivider/>

            <BubbleMenuItem icon={<UnlinkIcon/>} onClick={() => {
                editor.chain().focus().unsetLink().run()
            }}/>

        </BubbleMenu>

        {isLinkModalOpen && <LinkModal
            initialValues={linkModalFieldsValue}
            onCancel={() => {
                setLinkModalOpen(false)
                editor.chain().focus().run()
            }}
            onSubmit={({text, href, target}) => {
                setLinkModalOpen(false)
                if (!editor) {
                    return
                }

                if (!href) {
                    editor.chain().focus().unsetLink().run()
                    return
                }

                const attrs = {
                    href, target: target ? '_blank' : ''
                }
                editor.chain().focus().setLink(attrs).run()

                if (text && text !== linkModalFieldsValue?.text) {
                    // 无选中内容，选最近的link
                    const {node, pos} = findActiveNodePos()
                    if (node) {
                        editor.chain().focus()
                            .setNodeSelection(pos)
                            .deleteSelection()
                            .insertContent({
                                type: "text", text,
                                marks: [{
                                    type: "link", attrs,
                                }],
                            })
                            .run()
                    }
                }
            }}
        />}
    </>

};
