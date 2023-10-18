export const DEFAULT_CONTENT = {
    type: "doc",
    content: [
        {
            type: "heading", attrs: {"level": 1}, content: [
                {
                    type: "text", text: "WechatTiptap"
                }
            ]
        },
        {
            type: "paragraph", content: [
                {
                    type: "text", text: "WechatTiptap 是一个基于"
                },
                {
                    type: "text", text: "Tiptap", marks: [
                        {
                            type: "link", attrs: {
                                href: "https://github.com/ueberdosis/tiptap", target: "_blank",
                            }
                        },
                        {
                            type: "italic"
                        }
                    ]
                },
                {
                    type: "text", text: "的 WYSIWYG 编辑器，UI采用了"
                },
                {
                    type: "text", text: "微信文档", marks: [
                        {
                            type: "bold"
                        },
                        {
                            type: "textStyle", attrs: {
                                color: "rgb(41, 114, 244)"
                            }
                        },
                        {
                            type: "highlight", attrs: {
                                color: "rgb(255, 226, 112)"
                            }
                        }
                    ]
                },
                {
                    type: "text", text: "的样式。除了具有 tiptap 的基础功能外，还提供了多种扩展功能。"
                },
            ]
        },
        {
            type: "heading", attrs: {"level": 2}, content: [
                {
                    type: "text", text: "扩展功能"
                }
            ]
        },
        {
            type: "horizontalRule"
        }
    ]

};
