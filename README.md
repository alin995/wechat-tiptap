<div align="center">

<h1 align="center">Wechat-tiptap</h1>

WechatTiptap是一个人工智能的所见即所得编辑器

<img aligin="center" src="/doc/image/image-001.png" />
<img aligin="center" src="/doc/image/image-002.png" />
<img aligin="center" src="/doc/image/image-003.png" />
<img aligin="center" src="/doc/image/image-004.png" />
`	`

## About The Project

WechatTiptap是一个人工智能的所见即所得编辑器。文本生成功能基于ChatGPT和其他LLM.

WechatTiptap是一个所见即所得的编辑器，它结合了人工智能技术，可以更好地生成文本和图形。这可以为用户提供更方便、高效、强大的编辑体验。


</div>
<br/>

## features：

1）微信文档样式;；
2）工具栏 
3) 大纲
4）Tiptap 扩展

- 人工智能文本生成
- 表格: 与扩展栏和背景颜色
- 图片: 浮动裁剪和调整大小
- 字体大小
- 引用
- 段落缩进
- 链接

5. 气泡菜单

- 图像气泡菜单
- 链接气泡菜单
- 表哥气泡菜单
</br>


## 🤖 主要功能

-多人实时协作在线编辑文档
-支持插入图片，裁剪和调整图片大小
-支持多种文本公式
-支持插入表
-文本生成和文本生成图形的功能，并继续编写
-提供更方便、高效和强大的编辑体验

## 🎮 Getting Started

**1.First `Fork` the project and then clone it locally**

```bash
git clone https://github.com/alin995/wechat-tiptap.git
```

**2.Installation dependency**

```bash
yarn install
```

**3.Enter your API in `src/pages/wechat-editor/hooks/use-completion`**

```js
const API_KEY = "ENTER YOUR API";
```

**4.operation**

```bash
# web项目启动
yarn dev:web
```

**5.build**

```bash
yarn build
```

## ⛺️ 环境变量

> 我们**使用useCompletion()来封装openai。如果你想将其修改为你自己的LLM API，请修改@微信` editor/books/use-completions.ts `文件**

## 🚧 引用

> 不推荐本地开发或部署，因为出于技术原因，很难在本地配置OpenAI API代理，除非你能保证直接访问OpenAI服务器。

#### 本地开发

1.  安装nodejs和yarn。详情请咨询ChatGPT
2. 运行yarn install
3.开发web项目yarn dev:web
4. 服务端项目开发` yarn dev `
5. 打包项目` yarn build `

到目录src/pages/wechat-editor/hooks/use-completion找到文件use-completion.ts
如果设置了openai密钥，apiKey会添加自己的密钥
如果没有设置键，请配置您自己的baseURL到👉https://github.com/THUDM/ChatGLM2-6B/blob/main/openai_api.py

用浏览器打开[http://localhost:3000](http://localhost:3000)以查看结果。
用浏览器打开[http://localhost:3000](http://localhost:3000)以查看结果。

你可以通过修改`pages/index.tsx`来开始编辑页面。当你编辑文件时，页面会自动更新。你可以通过修改`pages/index.tsx`来开始编辑页面。当你编辑文件时，页面会自动更新。

<br/>
## Roadmap

- [x] Toolbar
- [x] Tiptap extendsions
- [ ] Bring along
- [ ] download json file
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### 📖 Built With

本节列出了用于引导项目的所有主要框架/库。在致谢部分留下任何附加组件/插件。这里有几个例子。

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

在MIT许可下发布。更多信息请参阅`LICENSE.txt`。.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

thundax-lyp - 731378491@qq.com

Project Link: [https://github.com/alin995](https://github.com/alin995)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

MIT许可证(MIT)。请参阅[License File](LICENSE.txt)了解更多信息。

## Thanks

[thundax-lyp](https://github.com/thundax-lyp),
[Acan](https://github.com/2864020625)

