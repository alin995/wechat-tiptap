import React from "react";
import { Button, Space } from "antd";
import { CheckOutlined, CloseOutlined, EditOutlined, RedoOutlined, SwapOutlined } from "@ant-design/icons";


export interface MagicBoxActionsProps {
	hasReplace?: boolean
	onFinish?: () => void
	onReplace?: () => void
	onRetry?: () => void
	onContinue?: () => void
	onCancel?: () => void
}

export const MagicBoxActions = (props: MagicBoxActionsProps) => {

	const {hasReplace, onFinish, onReplace, onRetry, onContinue, onAbort} = props

	return (
		<div className="flex flex-row items-center justify-start w-full my-2">
			<Space>
				<Button icon={<CheckOutlined/>} onClick={() => onFinish?.()}>完成</Button>
				{hasReplace === true && <Button icon={<SwapOutlined/>} onClick={() => onReplace?.()}>替换选中</Button>}
				<Button icon={<RedoOutlined/>} onClick={() => onRetry?.()}>重试</Button>
				<Button icon={<EditOutlined/>} onClick={() => onContinue?.()}>续写</Button>
				<Button icon={<CloseOutlined/>} onClick={() => onAbort?.()}>弃用</Button>
			</Space>
		</div>
	)
}
