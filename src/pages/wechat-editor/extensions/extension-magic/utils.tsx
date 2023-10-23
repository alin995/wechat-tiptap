import React from "react";
import {
    AiCompleteIcon,
    AiExtendIcon,
    AiRephraseIcon,
    AiShortenIcon,
    AiSummarizeIcon,
    EditIcon,
    MagicIcon,
    NumberedListIcon,
    TaskListIcon
} from "@wechat-editor/icons";

export interface PromptTheme {
    /**
     * disabled: 是否禁用，禁用则过滤
     * placeholder: 输入框提示词
     * immediate: 选中即请求
     * magic: 提示词生成器
     */
    key: string,
    // 主题名称
    title?: string,
    // 主题图标
    icon?: React.ReactNode
    disabled?: boolean | (() => boolean)
    placeholder?: string
    immediate?: boolean
    magic?: (prompt?: string, selectedText?: string) => (string | null)
}

export const getPromptTheme = (selectionText = '', prevText = '', themePrefix = ''): Array<PromptTheme> => {

    prevText = prevText.trim()
    themePrefix = themePrefix.trim()

    const hasTextSelection = (minSize = 0) => selectionText.length > minSize

    const themes: Array<PromptTheme> = [{
        key: "complete",
        title: "续写",
        icon: <AiCompleteIcon className="w-4 h-4"/>,
        disabled: prevText.length < 4,
        placeholder: "从下方选择功能或直接输入",
        immediate: true,
        magic: () => selectionText ? selectionText : prevText
    }, {
        key: "divider",
    }, {
        key: "generate-news",
        title: "新闻稿",
        icon: <EditIcon className="w-4 h-4"/>,
        disabled: hasTextSelection(),
        placeholder: "输入新闻的主题",
        magic: (inputText) => `写一篇新闻稿，内容如下：\n${inputText}`
    }, {
        key: "generate-outline",
        title: "文章大纲",
        icon: <EditIcon className="w-4 h-4"/>,
        disabled: hasTextSelection(),
        placeholder: "输入一个主题",
        magic: (inputText) => `写一篇文章提纲，内容如下：\n${inputText}`
    }, {
        key: "generate-meeting-outline",
        title: "会议提纲",
        icon: <EditIcon className="w-4 h-4"/>,
        disabled: hasTextSelection(),
        placeholder: "输入会议的主题",
        magic: (inputText) => `写一篇会议提纲，内容如下：\n${inputText}`
    }, {
        key: "generate-task-list",
        title: "代办列表",
        icon: <EditIcon className="w-4 h-4"/>,
        disabled: hasTextSelection(),
        magic: (inputText) => `完成以下内容，需要那些事项：\n${inputText}，`
    }, {
        key: "generate-advert",
        title: "广告文案",
        icon: <EditIcon className="w-4 h-4"/>,
        disabled: hasTextSelection(),
        magic: (inputText) => `写一篇广告文案，内容如下：\n${inputText}`
    }, {
        key: "divider",
    }, {
        key: "summarize",
        title: "总结",
        icon: <AiSummarizeIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(100),
        immediate: true,
        magic: (_, selectedText) => `为以下内容提取摘要：\n${selectedText}`
    }, {
        key: "shorten",
        title: "缩短篇幅",
        icon: <AiShortenIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(30),
        immediate: true,
        magic: (_, selectedText) => `精简以下内容：\n${selectedText}`
    }, {
        key: "extend",
        title: "扩充篇幅",
        icon: <AiExtendIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(10),
        immediate: true,
        magic: (_, selectedText) => `扩充以下内容：\n${selectedText}`
    }, {
        key: "rephrase",
        title: "润色",
        icon: <AiRephraseIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(10),
        immediate: true,
        magic: (_, selectedText) => `润色以下内容：\n${selectedText}`
    }, {
        key: "divider",
    }, {
        key: "format-meeting-summary",
        title: "整理会议纪要",
        icon: <TaskListIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(30),
        immediate: true,
        magic: (_, selectedText) => `将以下内容整理成会议纪要：\n${selectedText}`
    }, {
        key: "format-notes",
        title: "整理笔记",
        icon: <NumberedListIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(30),
        immediate: true,
        magic: (_, selectedText) => `整理以下内容：\n${selectedText}`
    }, {
        key: "divider",
    }, {
        key: "tone-written",
        title: "正式",
        icon: <MagicIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(10),
        immediate: true,
        magic: (_, selectedText) => `用正式口吻重新编写以下文本：\n${selectedText}`
    }, {
        key: "tone-colloquialism",
        title: "口语化",
        icon: <MagicIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(10),
        immediate: true,
        magic: (_, selectedText) => `用口语化口吻重新编写以下文本：\n${selectedText}`
    }, {
        key: "tone-artist",
        title: "文艺",
        icon: <MagicIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(10),
        immediate: true,
        magic: (_, selectedText) => `用文艺口吻重新编写以下文本：\n${selectedText}`
    }, {
        key: "tone-lively",
        title: "活泼",
        icon: <MagicIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(10),
        immediate: true,
        magic: (_, selectedText) => `用活泼口吻重新编写以下文本：\n${selectedText}`
    }, {
        key: "divider",
    }, {
        key: "translate-to-chinese",
        title: "译成中文",
        icon: <MagicIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(1),
        immediate: true,
        magic: (_, selectedText) =>
            `你是一名翻译家，你的目标是把任何语言翻译成中文，请翻译时不要带翻译腔，而是要翻译得自然、流畅和地道，使用优美和高雅的表达方式。请翻译下面这段话：\n\`\`\`\n${selectedText}\`\`\`\n`
    }, {
        key: "translate-to-english",
        title: "译成英文",
        icon: <MagicIcon className="w-4 h-4"/>,
        disabled: !hasTextSelection(1),
        immediate: true,
        magic: (_, selectedText) =>
            `我希望你能担任英语翻译、拼写校对和修辞改进的角色。我会用任何语言和你交流，你会识别语言，将其翻译并用更为优美和精炼的英语回答我。请将我简单的词汇和句子替换成更为优美和高雅的表达方式，确保意思不变，但使其更具文学性。请仅回答更正和改进的部分，不要写解释。请翻译下面这段话：\n\`\`\`\n${selectedText}\`\`\`\n`
    }]

    const normalizedThemes = themes
        // 过滤 disabled 项
        .filter(({title}) => !title || title.startsWith(themePrefix))
        .filter(({disabled}) => !disabled || (typeof disabled === 'function' && !disabled()))
        // 过滤相邻的 divider 项
        .reduce((items, item) => {
            if (item.key !== 'divider') {
                return [...items, item]
            }
            if (items.length === 0 || items[items.length - 1].key === 'divider') {
                return [...items]
            }
            return [...items, item]
        }, [])

    // 过滤最后一个 divider 项
    if (normalizedThemes.length > 0 && normalizedThemes[normalizedThemes.length - 1].key === 'divider') {
        normalizedThemes.pop()
    }

    return normalizedThemes
}
