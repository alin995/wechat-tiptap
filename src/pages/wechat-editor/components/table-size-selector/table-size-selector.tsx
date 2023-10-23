import React, { useMemo, useState } from "react"

const MAX_ROW = 8
const MAX_COL = 10

export interface TableSize {
    row: number
    col: number
}

export interface TableSizeSelectorProps {
    onCellClick?: (cell: TableSize) => void
    onCustomClick?: () => void
}

export const TableSizeSelector = ({onCellClick, onCustomClick}: TableSizeSelectorProps) => {

    const [currentRow, setCurrentRow] = useState(-1)
    const [currentCol, setCurrentCol] = useState(-1)

    const label = useMemo(() => {
        if (currentRow < 0 || currentCol < 0) {
            return "插入表格"
        }
        return `${currentRow} X ${currentCol} 表格`
    }, [currentRow, currentCol])

    const cells = useMemo<Array<TableSize>>(() => {
        const items = []
        for (let row = 1; row <= MAX_ROW; row += 1) {
            for (let col = 1; col <= MAX_COL; col += 1) {
                items.push({row, col})
            }
        }
        return items
    }, [])

    return <div className="flex flex-row flex-wrap w-[220px] text-xs text-stone-500">
        <div className="flex flex-col flex-nowrap w-full pt-1">
            <div>{label}</div>
            <div className="flex flex-row flex-wrap w-full">
                {cells.map((cell, idx) => {
                    const {row, col} = cell
                    const active = row <= currentRow && col <= currentCol
                    return <div
                        key={idx}
                        className={`w-5 h-5 mb-[1px] mr-[1px] border cursor-pointer ${active ? 'bg-stone-300' : ''}`}
                        onMouseEnter={() => {
                            setCurrentRow(row)
                            setCurrentCol(col)
                        }}
                        onMouseLeave={() => {
                            setCurrentRow(-1)
                            setCurrentCol(-1)
                        }}
                        onClick={() => {
                            onCellClick?.(cell)
                        }}
                    />
                })}
            </div>
        </div>
        <div className="flex flow-row justify-center items-center w-full mt-1 py-[2px] border rounded cursor-pointer" onClick={() => onCustomClick?.()}>
            <span>自定义行列数</span>
        </div>
    </div>
}
