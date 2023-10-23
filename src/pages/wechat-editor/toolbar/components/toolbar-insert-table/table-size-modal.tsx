import React, { useEffect } from "react";
import { Col, Form, InputNumber, Modal, Row } from "antd";


export interface TableSizeModalFormFields {
	row?: number
	col?: number
}

export interface TableSizeModalProps {

	initialValues: TableSizeModalFormFields
	onSubmit?: (value: TableSizeModalFormFields) => void
	onCancel?: () => void
}

export const TableSizeModal = ({onSubmit, onCancel, initialValues}: TableSizeModalProps) => {

	const [form] = Form.useForm<TableSizeModalFormFields>()

	useEffect(() => {
		form.getFieldInstance("row").focus()
	}, [form])

	return <Modal
		title="自定义行列数"
		open
		onOk={() => {
			form.validateFields().then((values) => {
				onSubmit?.(values)
			})
		}}
		onCancel={onCancel}
	>
		<Form
			labelCol={{span: 8}}
			wrapperCol={{span: 12}}
			style={{maxWidth: 600}}
			initialValues={initialValues}
			form={form}
		>
			<Row>
				<Col span={12}>
					<Form.Item
						label="行数"
						name="row"
						rules={[{
							required: true, message: '请输入行数'
						}]}
					>
						<InputNumber min="1" max="40"/>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="列数"
						name="col"
						rules={[{
							required: true, message: '请输入列数'
						}]}
					>
						<InputNumber min="1" max="20"/>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	</Modal>

}
