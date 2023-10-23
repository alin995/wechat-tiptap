import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Popover, Tag } from "antd";
import { SendOutlined } from "@ant-design/icons";

import { PromptThemeSelector } from "../prompt-theme-selector";
import { getPromptTheme, PromptTheme } from "../utils";
import { TextAreaRef } from "antd/es/input/TextArea";

export interface MagicBoxContentProps {
    enableThemeSelector: boolean
    prevText?: string,
    highlightText?: string,
    onSubmit?: (prompt: string) => void
}

export const MagicBoxContent = (props: MagicBoxContentProps) => {

    const {prevText, highlightText, enableThemeSelector} = props

    const [activeTheme, setActiveTheme] = useState<PromptTheme>()
    const [prompt, setPrompt] = useState('')

    const inputRef = useRef<TextAreaRef>()

    const themes = enableThemeSelector ? getPromptTheme(highlightText, prevText, prompt) : []

    const handleThemeChange = (key: string) => {
        const theme = themes.find(x => x.key === key)
        if (!theme) {
            return;
        }

        const {immediate, magic} = theme

        setPrompt('')
        if (immediate) {
            setActiveTheme(null)
            props?.onSubmit?.(magic?.(null, highlightText))

        } else {
            setActiveTheme(theme)
        }
    }

    const handleSendClick = () => {
        const finalPrompt = activeTheme?.magic?.(prompt, highlightText) || prompt
        setPrompt('')
        setActiveTheme(null)
        props?.onSubmit?.(finalPrompt)
    }

    useEffect(() => {
        if (!enableThemeSelector) {
            setActiveTheme(null)
        }
    }, [enableThemeSelector])

    useEffect(() => {
        inputRef.current?.focus()
    }, [inputRef.current])

    return (
        <div className="flex flex-row justify-start items-center w-full whitespace-nowrap border rounded bg-white">
            {activeTheme && <Tag color="blue" className="ml-1 mr-0">{activeTheme?.title}</Tag>}

            <div className="flex justify-start items-center w-full">
                <Popover
                    placement="bottomLeft"
                    arrow={false}
                    open={!activeTheme && themes.length > 0}
                    content={<PromptThemeSelector items={themes} onThemeSelect={handleThemeChange}/>}
                >
                    <Input.TextArea
                        ref={x => inputRef.current = x!}
                        bordered={false}
                        value={prompt}
                        placeholder={activeTheme ? activeTheme.placeholder : "问点什么吧..."}
                        autoSize={{
                            minRows: 1, maxRows: 4
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Backspace' && event.keyCode === 8 && prompt.length === 0) {
                                setActiveTheme(null)
                            }
                        }}
                        onChange={({target}) => setPrompt(target.value)}
                    />
                </Popover>
                <Button
                    type="text"
                    size="small"
                    icon={<SendOutlined/>}
                    disabled={prompt.trim().length === 0}
                    onClick={() => handleSendClick()}
                >
                    Send
                </Button>
            </div>
        </div>
    )
}
