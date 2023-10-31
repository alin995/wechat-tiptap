import React, { CSSProperties, useEffect, useState } from "react";
import { Editor } from "@tiptap/react";

import "./outline.scss"

export interface OutlineProps {
	editor: Editor
}

export const Outline = (props: OutlineProps) => {

	const {editor} = props

	const [isOutlineVisible, setOutlineVisible] = useState(true)
	const [closedHeadings, setClosedHeading] = useState([])
	const [headings, setHeadings] = useState([])

	const refreshHeadings = () => {
		const headings = []
		editor.state.doc.descendants((node, pos) => {
			if (node.type.name === 'heading') {
				headings.push({
					text: node.textContent, level: node.attrs["level"], id: node.attrs["data-toc-id"], pos: pos
				})
			}
		})

		const selectionFrom = editor.state.selection.from;

		// 更新 hasChild 标记
		for (let idx = 0; idx < headings.length - 1; idx += 1) {
			const current = headings[idx]
			const next = headings[idx + 1]
			current.hasChild = current.level < next.level
			current.active = current.pos <= selectionFrom && next.pos > selectionFrom
		}

		// 更新 collapsed 和 visible 标记
		for (let idx = 0; idx < headings.length; idx += 1) {
			const current = headings[idx]
			if (closedHeadings.includes(current.id)) {
				current.collapsed = true
			}

			// 一级标题，一定显示，其他找到最近的 parent
			current.invisible = false
			if (current.level > 1) {
				for (let descIdx = idx - 1; descIdx >= 0; descIdx -= 1) {
					const prev = headings[descIdx]
					if (prev.level < current.level) {
						current.invisible = !!(prev.invisible || prev.collapsed)
						break
					}
				}
			}
		}

		setHeadings(headings.filter(({invisible}) => !invisible))
	}

	const handleTriangleClick = ({id}) => {
		if (closedHeadings.includes(id)) {
			setClosedHeading([closedHeadings.filter(x => x !== id)])
		} else {
			setClosedHeading([id, ...closedHeadings])
		}
	}

	const handleHeadlineClick = ({pos}) => {
		editor.chain().focus()
			.setNodeSelection(pos)
			.scrollIntoView()
			.run()

		editor.chain().focus()
			.setTextSelection({
				from: editor.state.selection.from,
				to: editor.state.selection.from
			})
			.run()

		setTimeout(() => {
			refreshHeadings()
		}, 100)
	}

	useEffect(() => {
		if (isOutlineVisible) {
			refreshHeadings()
		}
	}, [editor, closedHeadings, isOutlineVisible])

	useEffect(() => {
		const handleUpdate = () => {
			refreshHeadings()
		}

		editor.on("selectionUpdate", handleUpdate)
		editor.on("update", handleUpdate)

		return () => {
			editor.off("selectionUpdate", handleUpdate)
			editor.off("update", handleUpdate)
		}
	}, [])

	return <div className="outline-container">
		{isOutlineVisible && <>
			<div className="outline-header">
				<div className="outline-title">目录</div>
				<div className="outline-close-button" onClick={() => setOutlineVisible(false)}></div>
			</div>
			{headings.length > 0 && <div className="headline-container">
				<div className="headline-content">
					{headings.map((heading) => {
						const {id, level, text, hasChild = false, collapsed = false, active = false} = heading
						const triangleStyle: CSSProperties = {
							marginLeft: `${(level - 1) * 12}px`,
							visibility: hasChild ? 'visible' : 'hidden',
							transform: `rotate(${collapsed ? -90 : 0}deg)`
						}

						const headingNames = ['one', 'two', 'three']
						const headingName = (level >= 1 && level <= headingNames.length) ? headingNames[level - 1] : 'other'

						return <div key={id} className={`headline ${active ? 'active' : ''}`} onClick={() => handleHeadlineClick(heading)}>
							<div className="headline-triangle" style={triangleStyle} onClick={() => handleTriangleClick(heading)}></div>
							<div className={`headline-heading headline-heading-${headingName}`} style={{
								width: `calc(100% - ${level * 12 - 32}px`
							}}>{text}</div>
						</div>
					})}
				</div>
			</div>}
			{headings.length === 0 && <div className="headline-content-tips">
				<div>
					<div>对文档内容应用“标题”样式</div>
					<div>即可生成“目录”</div>
				</div>
			</div>}
		</>}
		{!isOutlineVisible && <div class="outline-open-button" onClick={() => setOutlineVisible(true)}>目录</div>}
	</div>
}
