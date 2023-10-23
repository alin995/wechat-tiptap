import React from "react";

export interface PromptThemeSelectorProps {
    items: Array<{
        key: string,
        title?: string,
        icon?: React.ReactNode
    }>
    onThemeSelect?: (key: string) => void
}

/**
 * 提示词选择器
 */
export const PromptThemeSelector = ({items, onThemeSelect}: PromptThemeSelectorProps) => {
    return <div className="max-h-[calc(50vh - 120px)] text-sm text-stone-600 overflow-scroll">
        {items.map((item, idx) => {
            const {key, title, icon} = item
            if (key === 'divider') {
                return <div key={idx} className="h-[1px] bg-stone-300"></div>
            }

            return <div key={idx} className="flex flex-row items-center min-h-5 my-[2px] py-1 px-2 first:mt-0 last:mb-0 rounded hover:bg-stone-200" onClick={() => onThemeSelect?.(key)}>
                <div className="mt-1 mr-1">{icon}</div>
                <div>{title}</div>
            </div>
        })}
    </div>
}
