import React, { useMemo } from "react"

import useLocalStorage from "use-local-storage";

import { paletteColors, standardColors } from "./utils";


interface ColorGroupProps {
    label?: string
    colors: Array<string>
    onColorClick?: (color: string) => void
}

const ColorGroup = ({label, colors, onColorClick}: ColorGroupProps) => {
    return <div className="flex flex-col w-full pt-1">
        {label && <div className="text-stone-600">
            {label}
        </div>}
        <div className="flex flex-row flex-wrap w-full">
            {colors.map((x, idx) => {

                return <div key={idx}
                            className="w-5 h-5 mb-[2px] mr-[2px] border border-stone-300 cursor-pointer hover:border-stone-500"
                            style={{
                                backgroundColor: x === '' ? 'transparent' : x
                            }}
                            onClick={() => onColorClick?.(x)}
                />
            })}
        </div>
    </div>
}

export interface ColorSelectorProps {
    storageKey: string
    onColorClick?: (color: string) => void
}

export const ColorSelector = ({storageKey, onColorClick}: ColorSelectorProps) => {

    const [recentColors, setRecentColors] = useLocalStorage(storageKey, [])

    const normalizedRecentColors: Array<string> = useMemo(() => {
        if (!Array.isArray(recentColors)) {
            return standardColors
        }
        return [...recentColors, ...standardColors].slice(0, standardColors.length)
    }, [recentColors])

    const handleColorClick = (color: string) => {
        setRecentColors([color, ...normalizedRecentColors.filter(x => x !== color)])
        onColorClick?.(color)
    }

    return <div className="flex flex-col w-[220px] text-sm text-stone-500">
        <button className="flex flex-row flex-nowrap justify-center py-[2px] items-center border rounded hover:bg-stone-200 cursor-pointer"
                onClick={() => handleColorClick?.('')}>无颜色
        </button>

        <ColorGroup colors={paletteColors} onColorClick={handleColorClick}/>

        <ColorGroup label="标准色" colors={standardColors} onColorClick={handleColorClick}/>

        <ColorGroup label="最近使用" colors={normalizedRecentColors} onColorClick={handleColorClick}/>
    </div>
}
