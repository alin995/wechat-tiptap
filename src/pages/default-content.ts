export const DEFAULT_CONTENT = {
	"type": "doc", "content": [{
		"type": "heading", "attrs": {"textAlign": "center", "level": 1}, "content": [{
			"type": "text", "text": "Wechat Tiptap"
		}]
	}, {
		"type": "paragraph", "attrs": {"textAlign": "center"}, "content": [{
			"type": "text", "marks": [{
				"type": "italic"
			}, {
				"type": "textStyle", "attrs": {
					"fontSize": "16px"
				}
			}],
			"text": "一个微信风格的富文本编辑器"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "resizableImage", "attrs": {
				"src": "/image/sample.png", width: 600, height: 300, viewTop: 0, viewLeft: 0, viewWidth: 600, viewHeight: 300, rotate: 0,
			}
		}]
	}, {
		"type": "horizontalRule"
	}, {
		"type": "heading", "attrs": {"level": 2}, "content": [{
			"type": "text", "text": "关于"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "WechatTiptap是一个基于 Tiptap 的 WYSIWYG 编辑器。界面和操作采用微信文档风格，同时提供了AI能力。"
		}]
	}, {
		"type": "horizontalRule"
	}, {
		"type": "heading", "attrs": {"level": 2}, "content": [{
			"type": "text", "text": "特性"
		}]
	}, {
		"type": "orderedList", "content": [{
			"type": "listItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "微信文档风格样式"
				}]
			}]
		}, {
			"type": "listItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "文档目录"
				}]
			}]
		}, {
			"type": "listItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "工具栏"
				}]
			}]
		}, {
			"type": "listItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "状态栏"
				}]
			}]
		}, {
			"type": "listItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "气泡菜单"
				}]
			}]
		}, {
			"type": "listItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "Tiptap扩展插件"
				}, {
					"type": "bulletList", "content": [{
						"type": "listItem", "content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "AI：续写、缩写、扩充、提纲；"
							}]
						}]
					}, {
						"type": "listItem", "content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "表格：扩展编辑栏、背景色"
							}]
						}]
					}, {
						"type": "listItem",
						"content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "图片：浮动裁剪、调整尺寸"
							}]
						}]
					}, {
						"type": "listItem",
						"content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "字体"
							}]
						}]
					}, {
						"type": "listItem",
						"content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "引用"
							}]
						}]
					}, {
						"type": "listItem",
						"content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "段落缩进"
							}]
						}]
					}, {
						"type": "listItem",
						"content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "链接"
							}]
						}]
					}]
				}]
			}]
		}]
	}, {
		"type": "horizontalRule"
	}, {
		"type": "heading", "attrs": {"level": 2}, "content": [{
			"type": "text", "text": "使用方法"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "环境"
		}]
	}, {
		"type": "blockquote",
		"content": [{
			"type": "paragraph", "content": [{
				"type": "text", "text": " node 16及以上"
			}]
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "安装"
		}]
	}, {
		"type": "blockquoteHighlight", "content": [{
			"type": "paragraph", "content": [{
				"type": "text", "text": "yarn"
			}]
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "或者"
		}]
	}, {
		"type": "blockquoteHighlight", "content": [{
			"type": "paragraph", "content": [{
				"type": "text", "text": "npm install"
			}]
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "调试"
		}]
	}, {
		"type": "blockquoteHighlight", "content": [{
			"type": "paragraph", "content": [{
				"type": "text", "text": "npm start dev"
			}]
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "- 编译"
		}]
	}, {
		"type": "blockquoteHighlight", "content": [{
			"type": "paragraph", "content": [{
				"type": "text", "text": "npm start build"
			}]
		}]
	}, {
		"type": "horizontalRule"
	}, {
		"type": "heading", "attrs": {"level": 2}, "content": [{
			"type": "text", "text": "技术栈"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "WechatTiptap基于下列技术:"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "["
		}, {
			"type": "text", "marks": [{"type": "link", "attrs": {"href": "https://tiptap.dev/", "target": "_blank"}}], "text": "Tiptap"
		}, {
			"type": "text", "text": "] – text editor"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "["
		}, {
			"type": "text", "marks": [{"type": "link", "attrs": {"href": "https://openai.com/", "target": "_blank"}}], "text": "OpenAI"
		}, {
			"type": "text", "text": "] – AI completions"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "["
		}, {
			"type": "text", "marks": [{"type": "link", "attrs": {"href": "https://tailwindcss.com/", "target": ""}}], "text": "TailwindCSS"
		}, {
			"type": "text", "text": "] – styles"
		}]
	}, {
		"type": "horizontalRule"
	}, {
		"type": "heading", "attrs": {"level": 2}, "content": [{
			"type": "text", "text": "路线图"
		}]
	}, {
		"type": "taskList",
		"content": [{
			"type": "taskItem", "attrs": {"checked": true}, "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "微信文档风格"
				}]
			}]
		}, {
			"type": "taskItem", "attrs": {"checked": true}, "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "表格"
				}]
			}]
		}, {
			"type": "taskItem", "attrs": {"checked": true}, "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "图片"
				}]
			}]
		}, {
			"type": "taskItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "下载"
				}]
			}]
		}, {
			"type": "taskItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "携同"
				}]
			}]
		}, {
			"type": "taskItem", "content": [{
				"type": "paragraph", "content": [{
					"type": "text", "text": "国际化"
				}, {
					"type": "taskList", "content": [{
						"type": "taskItem", "attrs": {"checked": true}, "content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "中文"
							}]
						}]
					}, {
						"type": "taskItem", "attrs": {"checked": false}, "content": [{
							"type": "paragraph", "content": [{
								"type": "text", "text": "English"
							}]
						}]
					}]
				}]
			}]
		}]
	}, {
		"type": "horizontalRule"
	}, {
		"type": "heading", "attrs": {"level": 2}, "content": [{
			"type": "text", "text": "许可协议"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "MIT"
		}]
	}, {
		"type": "horizontalRule"
	}, {
		"type": "heading", "attrs": {"level": 2}, "content": [{
			"type": "text", "text": "引用工程"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "- [novel]("
		}, {
			"type": "text",
			"marks": [{"type": "link", "attrs": {"href": "https://github.com/steven-tey/novel", "target": "_blank"}}],
			"text": "https://github.com/steven-tey/novel"
		}, {
			"type": "text", "text": ")"
		}]
	}, {
		"type": "paragraph", "content": [{
			"type": "text", "text": "- [notitap]("
		}, {
			"type": "text",
			"marks": [{"type": "link", "attrs": {"href": "https://github.com/sereneinserenade/notitap", "target": "_blank"}}],
			"text": "https://github.com/sereneinserenade/notitap"
		}, {
			"type": "text", "text": ")"
		}]
	}, {
		"type": "horizontalRule"
	}]
}
