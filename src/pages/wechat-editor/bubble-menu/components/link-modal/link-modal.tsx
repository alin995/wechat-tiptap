import React, { useEffect } from "react"
import { Checkbox, Form, Input, Modal, } from "antd";

export interface LinkModelFormFields {
    text?: string
    href?: string
    target?: boolean
}

export interface LinkModalProps {
    initialValues?: LinkModelFormFields
    onCancel?: () => void
    onSubmit?: (values: LinkModelFormFields) => void

}

export const isValidUrl = (url: string) => {
    const regex = /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i
    return regex.test(url)
}

/**
 * 弹出框：设置链接
 */
export const LinkModal = ({initialValues, onSubmit, onCancel,}: LinkModalProps) => {

    const [form] = Form.useForm<LinkModelFormFields>()

    const validateHref = (_, value) => {
        if (!value || isValidUrl(value)) {
            return Promise.resolve()
        }
        return Promise.reject(new Error("请输入正确的链接"))
    }

    useEffect(() => {
        form.getFieldInstance("text").focus()
    }, [form])

    return <Modal
        title="设置链接"
        open
        onOk={() => {
            form.validateFields().then((values) => {
                onSubmit?.(values)
            })
        }}
        onCancel={onCancel}
    >
        <Form
            labelCol={{span: 4}}
            wrapperCol={{span: 18}}
            style={{maxWidth: 600}}
            initialValues={initialValues}
            form={form}
        >
            <Form.Item
                label="文本"
                name="text"
                rules={[{required: true, message: '请输入文本'}]}
            >
                <Input placeholder="请输入文本" allowClear/>
            </Form.Item>

            <Form.Item
                label="链接"
                name="href"
                rules={[{
                    validator: validateHref
                }]}
            >
                <Input placeholder="请输入链接" allowClear/>
            </Form.Item>

            <Form.Item
                label="新窗口"
                name="target"
                valuePropName="checked"
            >
                <Checkbox/>
            </Form.Item>
        </Form>
    </Modal>
}
