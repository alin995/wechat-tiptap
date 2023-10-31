<div align="center">

<h1 align="center">Wechat-tiptap</h1>

WechatTiptap is an AI-blessed WYSIWYG editor

<img aligin="center" src="/doc/image/image-001.png" />
<img aligin="center" src="/doc/image/image-002.png" />
<img aligin="center" src="/doc/image/image-003.png" />
<img aligin="center" src="/doc/image/image-004.png" />
`	`

## About The Project

Wechat-Tiptap is an AI-blessed WYSIWYG editor. The text generation capability is based on ChatGPT, and other LLMs.

WechatTiptap is a WYSIWYG (What You see is what You Get) editor that combines AI technology for better text generation and graphics generation. This can provide users with a more convenient, efficient and powerful editing experience.


</div>
## features：

1）WeChat document styles；
2）Toolbar 3) outline
4）Tiptap extendsions

- ai text generation
- table: with extension bar and background color
- image: float crop and resize
- font size
- blockquote
- paragraph indent
- link

5. bubble mens

- image bubble menu
- link bubble menu
- table bubble menu
</br>


## 🤖 Main functionMain function

- Multiple people collaborate to edit documents online in real time
- Support to insert pictures, crop and adjust the size of pictures
- Supports a variety of text formulas
- Support insert table
- Text generation and text generation graph function and continue to write
- Provide a more convenient, efficient and powerful editing experience

## 🎮 Getting Started

**Node Environment **

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

## ⛺️ Environment variable

> We have **_used useCompletion() to encapsulate openai. If you want to modify it to your own LLM API, modify the file @ wechat 'editor/books/use-completions.ts'_**

## 🚧 exploit

> Local development or deployment is not recommended, because for technical reasons, it is difficult to configure the OpenAI API agent locally unless you can guarantee direct access to the OpenAI server.

#### Local development

1. Install nodejs and yarn. For details, ask ChatGPT
2. Run yarn install
3. Develop the web project yarn dev:web
4. Server-side project development 'yarn dev'
5. Package the project 'yarn build'

Go to the directory src/pages/wechat-editor/hooks/use-completion to locate the file use-completion.ts
If the openai key is set, the apiKey adds its own key
If there is no set key configure your own baseURL to 👉 https://github.com/THUDM/ChatGLM2-6B/blob/main/openai_api.py

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### 📖 Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Vue][Vue.js]][Vue-url]
- [![Angular][Angular.io]][Angular-url]
- [![Svelte][Svelte.dev]][Svelte-url]
- [![Laravel][Laravel.com]][Laravel-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

thundax-lyp - 731378491@qq.com

Project Link: [https://github.com/alin995](https://github.com/alin995)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

The MIT License (MIT). Please see [License File](LICENSE.txt) for more information.

## Thanks

[thundax-lyp](https://github.com/thundax-lyp),
[Acan](https://github.com/2864020625)

