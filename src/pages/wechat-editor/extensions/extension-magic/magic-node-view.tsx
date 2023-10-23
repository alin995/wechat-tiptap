import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { ChainedCommands } from "@tiptap/core/src/types";
import { useDebouncedCallback } from "use-debounce";

import useCompletion from "@wechat-editor/hooks/use-completion/use-completion";
import { MagicBoxContent } from "./magic-box-content";
import { MagicBoxLoading } from "./magic-box-loading";
import { MagicBoxActions } from "./magic-box-actions";

export const MagicNodeView = (props: NodeViewProps) => {

    const {editor, node, deleteNode} = props

    const {prevText, selectionFrom, selectionTo, selectionText, selectionJSON} = node.attrs

    /*** 当前请求的 prompt ***/
    const [currentPrompt, setCurrentPrompt] = useState<string>()
    /*** 当前应答的消息 ***/
    const [messageList, setMessageList] = useState<string[]>([])
    /*** 当前上一次应答的消息 ***/
    const [lastMessageList, setLastMessageList] = useState<string[]>([])
    const [initialized, setInitialized] = useState(false)

    const [confirmModal, confirmModalContextHolder] = Modal.useModal();

    // 浮动框
    const boxRef = useRef<HTMLDivElement | null>()

    // 浮动框 scroll-into-view 防抖
    const debouncedScrollIntoView = useDebouncedCallback(async () => {
        if (boxRef.current) {
            boxRef.current?.scrollIntoView({
                behavior: "smooth", block: "end", inline: "end"
            })
        }
    }, 100, {maxWait: 200});

    const {completion, isLoading, stop} = useCompletion({
        onDataEvent: (currentAnswer) => {
            setMessageList(currentAnswer.split("\n"))
            debouncedScrollIntoView()
        },
        onFinish: (currentAnswer) => {
            setMessageList(currentAnswer.split("\n"))
            debouncedScrollIntoView()
        }
    })

    const message2Content = () => {
        return [...lastMessageList, ...messageList].filter(x => x && x.length > 0).map(message => {
            return {
                type: "paragraph",
                content: [{
                    type: "text", text: message
                }]
            }
        })
    }

    const recoverSelection = (chain: ChainedCommands): ChainedCommands => {
        if (!selectionJSON || selectionJSON.length === 0) {
            return chain
        }
        const range = {
            from: Number(selectionFrom), to: Number(selectionTo)
        }
        // TODO: 应该修改成 setNodeSelection
        return chain.setTextSelection(range).insertContent(selectionJSON)
    }

    const deleteSelection = (chain: ChainedCommands): ChainedCommands => {
        if (!selectionJSON || selectionJSON.length === 0) {
            return chain
        }
        const range = {
            from: Number(selectionFrom), to: Number(selectionTo)
        }
        return chain.setTextSelection(range).deleteSelection()
    }

    const handleSubmit = async (prompt) => {
        setCurrentPrompt(prompt)
        await completion({prompt})
    }

    const handleStop = () => {
        stop()
    }

    /**
     * 完成
     * - 恢复 selection
     * - 插入生成内容
     */
    const handleFinish = () => {
        deleteNode()
        recoverSelection(editor.chain())
            .focus()
            .insertContent(message2Content())
            .run()
    }

    /**
     * 替换选中
     * - 删除 selection
     * - 插入生成内容
     */
    const handleReplace = () => {
        deleteNode()
        deleteSelection(editor.chain())
            .focus()
            .insertContent(message2Content())
            .run()
    }

    /**
     * 重试
     * - 删除 lastMessageList
     * - 发送 currentPrompt
     */
    const handleRetry = async () => {
        const prompt = currentPrompt
        setLastMessageList([])
        setMessageList([])
        await complete({
            prompt
        })
    }

    /**
     * 继续
     * - 保存 messageList
     * - 发送 currentPrompt
     */
    const handleContinue = async () => {
        const prompt = [...lastMessageList, ...messageList].join("\n")
        setLastMessageList([...lastMessageList, ...messageList])
        setMessageList([])
        await complete({
            prompt
        })
    }

    /**
     * 弃用
     * -- 恢复 selection
     */
    const handleAbort = () => {
        deleteNode()
        recoverSelection(editor.chain())
            .focus()
            .run()
    }

    const handleMaskClick = async () => {
        if (messageList.length > 0 || lastMessageList.length > 0) {
            confirmModal.confirm({
                title: "是否退出 AI 助手",
                content: "确认退出后，当前生成的内容将会保留",
                okText: "确认退出",
                cancelText: "取消",
                onOk: () => handleFinish()
            })
        } else {
            deleteNode()
        }
        return false
    }

    useEffect(() => {
        setInitialized(true)
    }, [])

    return (
        <NodeViewWrapper
            as="article"
            className={`wechat-free-node`}>
            {(messageList.length > 0 || lastMessageList.length > 0) && <div className="mx-[-16px] my-6 px-4 text-base bg-stone-100 border rounded">
                {[...lastMessageList, ...messageList].map((message, idx) => {
                    return <p key={idx} className="mb-6 last:mb-0">{message}</p>
                })}
            </div>}

            <div className="z-[1000] fixed inset-0 h-full" onClick={handleMaskClick}></div>

            {initialized && <div
                className="z-[1001] absolute w-[calc(100%+2em)] mt-[-0.6666667em] mb-[1.3333333em] mx-[-1em] py-[0.3333333em] px-[1em] text-base text-stone-700 bg-stone-100 border rounded-lg shadow-lg"
                ref={x => boxRef.current = x!}>
                {isLoading && <MagicBoxLoading onStop={() => handleStop()}/>}

                {!isLoading && messageList.length > 0 && <MagicBoxActions
                    hasReplace={selectionText?.length > 0}
                    onFinish={() => handleFinish()}
                    onReplace={() => handleReplace()}
                    onRetry={() => handleRetry()}
                    onContinue={() => handleContinue()}
                    onAbort={() => handleAbort()}
                />}

                {!isLoading && messageList.length === 0 && <div className="font-bold">
                    AI
                </div>}

                {!isLoading && <MagicBoxContent
                    enableThemeSelector={messageList.length === 0}
                    prevText={prevText}
                    highlightText={selectionText}
                    onSubmit={handleSubmit}
                />}
                {confirmModalContextHolder}
            </div>}
        </NodeViewWrapper>
    );
};

export default MagicNodeView
