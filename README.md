This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



## 🎮 开始使用
**Node 环境**

`node` 需要 `^16 || ^18 || ^19` 版本（node >= 16.19.0），可以使用 nvm 管理本地多个 node 版本。

```bash
# 查看 node 版本
node -v

# 查看 npm 版本
npm -v

# 查看 yarn 版本
yarn -v

```

**1.先 `Fork` 本项目，然后克隆到本地。**
```bash
git clone https://github.com/alin995/wechat-tiptap.git
```

**2.安装依赖**
```bash
yarn install
```

**3.运行**
```bash
# web项目启动
yarn dev:web
```

**4.打包**
```bash
yarn build
```

## ⛺️ 环境变量

> 如果是前后端分离模式部署项目则需要填以下配置

#### `VITE_APP_REQUEST_HOST` 

请求服务端的`Host`地址。

## 🚧 开发

> 强烈不建议在本地进行开发或者部署，由于一些技术原因，很难在本地配置好 OpenAI API 代理，除非你能保证可以直连 OpenAI 服务器。

#### 本地开发

1. 安装 nodejs 和 yarn具体细节请询问 ChatGPT
2. 执行 `yarn install` 即可
3. web项目开发 `yarn dev:web`
4. 服务端项目开发 `yarn dev`
5. 打包项目 `yarn build`








Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
