<div align="center">
<h1 align="center">WechatTiptap</h1>
<span><i>一个微信风格的富文本编辑器</i></span>
</div>
<br/>
<video  src="https://user-images.githubusercontent.com/74090594/279589586-c4916f1a-6704-4e45-b9ed-e841f654b194.mp4" type="video/mp4"> </video> 
<br/>

## 关于
WechatTiptap是一个基于 Tiptap 的 WYSIWYG 编辑器。界面和操作采用微信文档风格，同时提供了AI能力。

## 特性
- 微信文档风格样式
- 目录
- 工具栏
- 状态栏
- Tiptap扩展插件
  - AI：续写、缩写、扩充、提纲；
  - 表格: 扩展编辑栏、背景色
  - 图片: 浮动裁剪、调整尺寸
  - 字体大小
  - 引用
  - 段落缩进
  - 链接
- 气泡菜单
  - 图像菜单
  - 链接菜单
  - 表格菜单

## 使用方法
- 环境
  - node 16及以上
- 安装
```
yarn
```
或者
```
npm install
```
- 调试
```
npm start dev
```
- 编译
```
npm start build
```

## 技术栈
WechatTiptap基于下列技术:
- [Tiptap](https://tiptap.dev/) – text editor
- [OpenAI](https://openai.com/) - AI completions
- [TailwindCSS](https://tailwindcss.com/) – styles


## 路线图
- [x] 微信文档风格
- [x] 表格
- [x] 图片
- [ ] 下载
- [ ] 携同
- [ ] i18n
  - [x] 中文
  - [ ] English


## 许可协议
在MIT许可下发布。更多信息请参阅`LICENSE.txt`。.

## 引用工程
- [novel](https://github.com/steven-tey/novel)
- [notitap](https://github.com/sereneinserenade/notitap)

