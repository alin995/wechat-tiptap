export const DEFAULT_CONTENT = {
    type: "doc",
    content: [{
        type: "heading", attrs: {"level": 1}, content: [{
            type: "text", text: "WechatTiptap"
        }]
    }, {
        type: "paragraph", content: [{
            type: "text", text: "WechatTiptap 是一个AI加持的 "
        }, {
            type: "text", text: "WYSIWYG", marks: [{
                type: "bold"
            }, {
                type: "textStyle", attrs: {
                    color: "rgb(41, 114, 244)"
                }
            }, {
                type: "highlight", attrs: {
                    color: "rgb(255, 226, 112)"
                }
            }]
        }, {
            type: "text", text: " 编辑器。"
        }, {
            type: "text", text: "文本生成", marks: [{
                type: "underline"
            }]
        }, {
            type: "text", text: "能力基于 "
        }, {
            type: "text", text: "ChatGLM2-6B", marks: [{
                type: "link", attrs: {
                    href: "https://github.com/THUDM/ChatGLM-6B/", target: "_blank",
                }
            }, {
                type: "italic"
            }]
        }, {
            type: "text", text: "，"
        }, {
            type: "text", text: "文生图", marks: [{
                type: "underline"
            }]
        }, {
            type: "text", text: "能力基于 "
        }, {
            type: "text", text: "Stable Diffusion XL",
            marks: [{
                type: "link", attrs: {
                    href: "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0", target: "_blank",
                }
            }, {
                type: "italic"
            }]
        }, {
            type: "text", text: "。"
        }]
    }, {
        type: "heading", attrs: {"level": 2}, content: [{
            type: "text", text: "功能点"
        }]
    }, {
        type: "heading", attrs: {"level": 3}, content: [{
            type: "text", text: "🔢 数字编号"
        }]
    }, {
        type: "orderedList", attrs: {"tight": true, "start": 1}, content: [{
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "斜杠菜单和浮动菜单"
                }]
            }]
        }, {
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "AI 续写、扩充、缩写、提纲"
                }]
            }]
        }, {
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "文生图"
                }]
            }]
        }]
    }, {
        type: "heading", attrs: {"level": 3}, content: [{
            type: "text", text: "⭐️ 项目符号"
        }]
    }, {
        type: "bulletList", attrs: {"tight": true}, content: [{
            type: "listItem",
            content: [{
                type: "paragraph", content: [{
                    type: "text", text: "斜杠菜单和浮动菜单"
                }]
            }]
        }, {
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "AI 续写、扩充、缩写、提纲"
                }]
            }]
        }]
    }, {
        type: "heading", attrs: {"level": 3}, content: [{
            type: "text", text: "📆 代办事项"
        }]
    }, {
        type: "taskList", content: [{
            type: "taskItem", attrs: {"checked": true}, content: [{
                type: "paragraph", content: [{
                    type: "text", text: "艺术品味谁家强 "
                }, {
                    type: "text", text: "李总", marks: [{
                        type: "link",
                        attrs: {
                            href: "mailto:liyunpeng@wdit.com.cn", target: "_blank",
                        }
                    }]
                }]
            }]
        }, {
            type: "taskItem", attrs: {"checked": false}, content: [{
                type: "paragraph", content: [{type: "text", text: "伟大的音乐源于"}, {
                    type: "text", text: "巴赫", marks: [{
                        type: "link", attrs: {
                            href: "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach", target: "_blank"
                        }
                    }]
                }, {
                    type: "text", text: "，终于"
                }, {
                    type: "text", text: "勃拉姆斯", marks: [{
                        type: "link", attrs: {
                            href: "https://en.wikipedia.org/wiki/Johannes_Brahms", target: "_blank",
                        }
                    }],
                }]
            }]
        }]
    }, {
        type: "heading", attrs: {level: 3}, content: [{
            type: "text", text: "🫰 引用"
        }]
    }, {
        type: "blockquote", content: [{
            type: "paragraph", content: [{
                type: "text", text: "作曲并不难，但剔除多余的音符却是极为困难的。"
            }]
        }]
    }, {
        type: "heading", attrs: {level: 3}, content: [{
            type: "text", text: "🔣 数学公式"
        }]
    }, {
        type: "bulletList", content: [{
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "$sin(x)$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$cos(x)$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]

                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$tan(x)$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]

                }]
            }]
        }, {
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "$log(x)$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$ln(x)$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$\\sqrt{x}$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }]
            }]
        }, {
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "$sum_{i=0}^n x_i$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$int_a^b x^2 dx$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$\\frac{1}{x}$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }]
            }]
        }, {
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "$\\binom{n}{k}$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$\\sqrt[n]{x}$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }]
            }]
        }, {
            type: "listItem", content: [{
                type: "paragraph", content: [{
                    type: "text", text: "$\\left(\\frac{1}{x}\\right)$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }, {
                    type: "text", text: " | "
                }, {
                    type: "text", text: "$\\left\\{\\begin{matrix}x&\\text{if }x>0\\\\0&\\text{otherwise}\\end{matrix}\\right.$", marks: [{
                        type: "textStyle", attrs: {
                            color: "rgb(41, 114, 244)"
                        }
                    }]
                }]
            }]
        }]
    }, {
        type: "heading", attrs: {level: 3}, content: [{
            type: "text", text: "🥅 表格"
        }]
    }, {
        type: "heading", attrs: {level: 4}, content: [{
            type: "text", text: "普通表格"
        }]
    }, {
        type: "table", content: [{
            type: "tableRow", content: [{
                type: "tableCell", attrs: {backgroundColor: "#088"}, content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "产品", marks: [{
                            type: "bold"
                        }, {
                            type: "textStyle", attrs: {
                                color: "rgb(244, 244, 244)"
                            }
                        }]
                    }]
                }]
            }, {
                type: "tableCell", attrs: {backgroundColor: "#088", style: "abc=abc;"}, content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "同行单价", marks: [{
                            type: "bold"
                        }, {
                            type: "textStyle", attrs: {
                                color: "rgb(244, 244, 244)"
                            }
                        }]
                    }]
                }]
            }, {
                type: "tableCell", attrs: {backgroundColor: "#088"}, content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "本产品单价", marks: [{
                            type: "bold"
                        }, {
                            type: "textStyle", attrs: {
                                color: "rgb(244, 244, 244)"
                            }
                        }]
                    }]
                }]
            }, {
                type: "tableCell", attrs: {backgroundColor: "#088"}, content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "差价", marks: [{
                            type: "bold"
                        }, {
                            type: "textStyle", attrs: {
                                color: "rgb(244, 244, 244)"
                            }
                        }]
                    }]
                }]
            }]
        }, {
            type: "tableRow", content: [{
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "产品A"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "300"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "310"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "-10"
                    }]
                }]
            }]
        }, {
            type: "tableRow", content: [{
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "产品B"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "450"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "400"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "50"
                    }]
                }]
            }]
        }, {
            type: "tableRow", content: [{
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "产品C"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "660"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "600"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "60"
                    }]
                }]
            }]
        }, {
            type: "tableRow", content: [{
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "平均"
                    }]
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph"
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph"
                }]
            }, {
                type: "tableCell", content: [{
                    type: "paragraph", content: [{
                        type: "text", text: "双击选中单元格"
                    }]
                }]
            }]
        }],
    }, {
        type: "heading", attrs: {level: 4}, content: [{
            type: "text", text: "合并单元格"
        }]
    }, {
        type: "table", content: [{
            type: "tableRow", content: [{
                type: "tableCell", attrs: {colspan: 3}, content: [{
                    type: "paragraph", attrs: {textAlign: "center"}, content: [{
                        type: "text", "text": "1:3"
                    }]
                }]
            }, {
                type: "tableCell", attrs: {rowspan: 2},
                content: [{
                    type: "paragraph", attrs: {textAlign: "center"}, content: [{
                        type: "text", "text": "2:1"
                    }]
                }]
            }]
        }, {
            type: "tableRow", content: [{
                type: "tableCell", attrs: {rowspan: 2}, content: [{
                    type: "paragraph", attrs: {textAlign: "center"}, content: [{
                        type: "text", "text": "2:1"
                    }]
                }]
            }, {
                type: "tableCell", attrs: {colspan: 2}, content: [{
                    type: "paragraph", attrs: {textAlign: "center"}, content: [{
                        type: "text", "text": "1:2"
                    }]
                }]
            }]
        }, {
            type: "tableRow", content: [{
                type: "tableCell", attrs: {colspan: 3}, content: [{
                    type: "paragraph", attrs: {textAlign: "center"}, content: [{
                        type: "text", "text": "1:3"
                    }]
                }]
            }]
        }]
    }, {
        type: "heading", attrs: {"level": 3}, content: [{
            type: "text", text: "📷 图片"
        }]
    }, {
        type: "heading", attrs: {"level": 4}, content: [{
            type: "text", text: "普通图片"
        }]
    }, {
        type: "paragraph", content: [{
            type: "resizableImage", attrs: {
                "src": "https://assist.govsupport.cn/haydn-assistant/logo.png", "alt": "no-alt", "title": "no-title",
                width: 128,
                height: 128
            }
        }]
    }, {
        type: "heading", attrs: {"level": 4}, content: [{
            type: "text", text: "缩放、裁剪后的图片"
        }]
    }, {
        type: "paragraph", content: [{
            type: "resizableImage", attrs: {
                "src": "https://assist.govsupport.cn/haydn-assistant/logo.png", "alt": "no-alt", "title": "no-title",
                width: 400, height: 400, viewTop: 100, viewLeft: 100, viewWidth: 200, viewHeight: 200, rotate: 0,
            }
        }]
    }, {
        type: "horizontalRule"
    }, {
        type: "heading", attrs: {"level": 1}, content: [{
            type: "text", text: "长恨歌"
        }]
    }, {
        type: "paragraph", attrs: {indent: 1}, content: [{
            type: "text", text: "站一个至高点看上海，上海的弄堂是壮观的景象。它是这城市背景一样的东西。"
        }, {
            type: "text", text: "街道和楼房凸现在它之上，是一些点和线，而它则是中国画中称为被法的那类笔触，是将空白填满的。"
        }, {
            type: "text", text: "当天黑下来，灯亮起来的时分，这些点和线都是有光的，在那光后面，大片大片的暗，便是上海的弄堂了。"
        }, {
            type: "text", text: "那暗看上去几乎是波涛汹涌，几乎要将那几点几线的光推着走似的。"
        }, {
            type: "text", text: "它是有体积的，而点和线却是浮在面上的，是为划分这个体积而存在的，是文章里标点一类的东西，断行断句的。"
        }, {
            type: "text", text: "那暗是像深渊一样，扔一座山下去，也悄无声息地沉了底。那暗里还像是藏着许多礁石，一不小心就会翻了船的。"
        }, {
            type: "text", text: "上海的几点几线的光，全是叫那暗托住的，一托便是几十年。这东方巴黎的璀璨，是以那暗作底铺陈开。"
        }, {
            type: "text", text: "一铺便是几十年。如今，什么都好像旧了似的，一点一点露出了真迹。晨吸一点一点亮起，灯光一点一点熄灭：先是有薄薄的雾，光是平直的光，勾出轮廓，细工笔似的。"
        }, {
            type: "text", text: "最先跳出来的是老式弄堂房顶的老虎天窗，它们在晨雾里有一种精致乖巧的模样，那木框窗扇是细雕细作的；那屋披上的瓦是细工细排的；窗台上花盆里的月季花也是细心细养的。"
        }, {
            type: "text", text: "然后晒台也出来了，有隔夜的衣衫，滞着不动的，像画上的衣衫；晒台矮墙上的水泥脱落了，露出锈红色的砖，也像是画上的，一笔一划都清晰的。再接着，山墙上的裂纹也现出了，还有点点绿苔，有触手的凉意似的。"
        }, {
            type: "text", text: "第一缕阳光是在山墙上的，这是很美的图画，几乎是绚烂的，又有些荒凉；是新鲜的，又是有年头的。这时候，弄底的水泥地还在晨雾里头，后弄要比前弄的雾更重一些。"
        }, {
            type: "text", text: "新式里弄的铁栏杆的阳台上也有了阳光，在落地的长窗上折出了反光。这是比较锐利的一笔，带有揭开帷幕，划开夜与昼的意思。"
        }, {
            type: "text", text: "雾终被阳光驱散了，什么都加重了颜色，绿苔原来是黑的，廖框的木头也是发黑的，阳台的黑铁栏杆却是生一了黄锈，山墙的裂缝里倒长出绿色的草，飞在天空里的白鸽成片灰鸽。"
        }]
    }, {
        type: "paragraph", attrs: {indent: 1}, content: [{
            type: "text", text: "上海的弄堂是形形种种，声色各异的。它们有时候是那样，有时候是这样，莫衷一是的模样。"
        }, {
            type: "text", text: "其实它们是万变不离其宗，形变神不变的，它们是倒过来倒过去最终说的还是那一桩事，千人手面，又万众一心的。"
        }, {
            type: "text", text: "那种石窟门弄堂是上海弄堂里最有权势之气的一种，它们带有一些深宅大院的遗传，有一副官邪的脸面．它们将森严壁垒全做在一扇门和一堵墙上。"
        }, {
            type: "text", text: "一已开进门去，院于是浅的，客堂也是浅的，二步两步便走穿过去，一道木楼梯在了头顶。木楼梯是不打弯的，直抵楼上的闺阁，那二楼的临了街的窗户便流露出了风情。"
        }, {
            type: "text", text: "上海东区的新式里弄是放下架子的，门是楼空雕花的矮铁门"
        }]
    }]
};
