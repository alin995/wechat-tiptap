<div align="center">
<h1 align="center">WechatTiptap</h1>
<span><i>A WeChat-style rich text editor</i></span>
</div>
<br/>

 <video  src="https://user-images.githubusercontent.com/74090594/279589586-c4916f1a-6704-4e45-b9ed-e841f654b194.mp4" type="video/mp4"> </video> 

<br/>

## About
WechatTiptap is a WYSIWYG editor based on Tiptap. The interface and operation are WeChat document style, while providing AI capabilities.

## characteristic
- WeChat document style style
- Table of Contents
- Toolbar
- State column
- Tiptap extensions/plugins
  - AI：Continuation, abbreviation, expansion, outline；
  - table: Extended editing bar, background color
  - image: Floating crop, resizing
  - Font size
  - quote
  - Paragraph indentation
  - Link
- Bubble menu
  - image menu
  - link menu
  - table menu

## How to use
- environment
  - Node 16 and above
- Install
```
yarn

```
or
```
npm install
```
- Debug
```
npm start dev
```
- compile
```
npm start build
```

## Technology stack
WechatTiptap is based on the following technologies:
- [Tiptap](https://tiptap.dev/) – text editor
- [OpenAI](https://openai.com/) - AI completions
- [TailwindCSS](https://tailwindcss.com/) – styles


## roadmap
- [x] WeChat document style
- [x] table
- [x] image
- [ ] download
- [ ] together
- [ ] i18n
  - [x] Chinese
  - [ ] English


## Licensing agreement
Released under the MIT license. See`LICENSE.txt`for more information.

## Reference Engineering
- [novel](https://github.com/steven-tey/novel)
- [notitap](https://github.com/sereneinserenade/notitap)

