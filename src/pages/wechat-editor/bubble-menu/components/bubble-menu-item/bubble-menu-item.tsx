import React, { ReactNode } from "react"

export interface BubbleMenuItemProps {
    className?: string
    title?: string | ReactNode
    icon?: ReactNode
    suffix?: ReactNode
    disabled?: boolean
    active?: boolean
    onClick?: () => void
}

/**
 * 按钮
 */
export const BubbleMenuItem = (props: BubbleMenuItemProps) => {
    const {className = '', title, icon, suffix, disabled, active, onClick} = props

    return <button className={`${className} flex flex-nowrap whitespace-nowrap justify-content mx-1 rounded ${disabled ? 'opacity-50' : ''} ${active ? 'bg-slate-200' : ''} hover:bg-stone-300`} onClick={() => {
        if (!disabled) {
            onClick?.()
        }
    }}>
        {icon && <div className="w-6 h-6 p-[2px]">
            {icon}
        </div>}
        {title && <div className="h-6 py-1">
            {title}
        </div>}
        {suffix && <div className="h-6 pr-1">
            {suffix}
        </div>}
    </button>
}

/**
 * 按钮分割线
 */
export const BubbleMenuItemDivider = () => {
    return <div className="w-[1px] h-4 m-1 shrink opacity-25 bg-slate-700"></div>
}
