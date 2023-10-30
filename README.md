<div align="center">
<h1 align="center">Wechat-Tiptap</h1>
<span>WechatTiptap is an AI-blessed WYSIWYG editor</span>
</div>


## About The Project

Wechat-Tiptap is an AI-blessed WYSIWYG editor. The text generation capability is based on ChatGLM2-6B, and the Vincennes graph capability is based on Stable Diffusion XL.

WechatTiptap is a WYSIWYG (What You see is what You Get) editor that combines AI technology for better text generation and graphics generation. This can provide users with a more convenient, efficient and powerful editing experience.


## 🤖 Main functionMain function

- Multiple people collaborate to edit documents online in real time
- Support to insert pictures, crop and adjust the size of pictures
- Supports a variety of text formulas
- Support insert table
- Text generation and text generation graph function and continue to write
- Provide a more convenient, efficient and powerful editing experience



## 🎮 Getting Started

**Node Environment **

`node` need `^16 || ^18 || ^19` 版本（node >= 16.19.0），可以使用 nvm 管理本地多个 node 版本。

```bash
# Viewing node Version
node -v

# Viewing npm Version
npm -v

# Viewing yarn Version
yarn -v

```

**1.First `Fork` the project and then clone it locally**

```bash
git clone https://github.com/alin995/wechat-tiptap.git
```

**2.Installation dependency**

```bash
yarn install
```

**3.operation**

```bash
# web项目启动
yarn dev:web
```

**4.build**

```bash
yarn build
```

## ⛺️ Environment variable

> If the deployment project is deployed in front-end and back-end separation mode, the following configuration is required

#### `VITE_APP_REQUEST_HOST` 

Host address of the request server.

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


You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.	You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Usage

![Alt text](first-image.jpg)
![Alt text](image02.jpg)
![Alt text](image01.jpg)
![Alt text](image.png)

### 📖 Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Open source conceptual WYSIWYG editor--novel](https://github.com/steven-tey/novel.git)
* [notitap](https://github.com/sereneinserenade/notitap.git)
* [Next.js](https://www.nextjs.cn/)
* [React.js](https://react.dev/learn)
* [Vue.js](https://cn.vuejs.org/)
* [typescript](https://www.typescriptlang.org/)
* [tailwindcss](https://tailwindcss.com/)



