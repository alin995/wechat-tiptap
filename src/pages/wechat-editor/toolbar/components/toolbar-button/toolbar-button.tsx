import React, { ReactNode, useMemo } from "react"
import { Popover, PopoverProps } from "antd";

export interface ToolbarButtonProps {
    className?: string
    title?: string | ReactNode | undefined
    prompt?: React.ReactNode
    icon?: React.ReactNode
    suffix?: React.ReactNode
    disabled?: boolean
    active?: boolean
    onClick?: () => void
    popoverProps?: PopoverProps
}

export const ToolbarButton = (props: ToolbarButtonProps) => {
    const {className = '', title, prompt, icon, suffix, disabled, active, onClick, popoverProps = {}} = props

    const normalizedPrompt = useMemo(() => {
        return <div className="text-xs">
            {prompt}
        </div>
    }, [prompt])

    return <Popover placement="bottom" content={normalizedPrompt} {...popoverProps}>
        <div className={`${className} flex flex-nowrap justify-center whitespace-nowrap mx-1 rounded ${disabled ? 'opacity-40' : ''} ${active ? 'bg-stone-300' : ''} hover:bg-stone-400`} onClick={() => {
            if (!disabled) {
                onClick?.()
            }
        }}>
            {icon && <div className="w-6 h-6 p-[2px]">
                {icon}
            </div>}
            {title && <div className="w-full h-6 ml-[2px] whitespace-nowrap px-1 text-center text-stone-600 leading-6 text-xs text-ellipsis">
                {title}
            </div>}
            {suffix && <div className="h-6 pr-1">
                {suffix}
            </div>}
        </div>
    </Popover>
}

export const ToolbarButtonDivider = () => {
    return <div className="w-[1px] h-4 m-1 shrink opacity-25 bg-slate-700"></div>
}
