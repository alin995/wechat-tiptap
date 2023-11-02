<div align="center">
<h1 align="center">WechatTiptap</h1>
<span><i>A WeChat-style rich text editor</i></span>
</div>
<br/>
<video  src="https://user-images.githubusercontent.com/74090594/279589586-c4916f1a-6704-4e45-b9ed-e841f654b194.mp4" type="video/mp4"> </video> 
<br/>

## About
WechatTiptap is a WYSIWYG editor based on Tiptap. The interface and operation are WeChat document style, while providing AI capabilities.

## Features
- WeChat document style
- Outline
- Toolbar
- Statusbar
- Tiptap extensions
  - AI：Completion, shorten, expansion, summary；
  - Table: floating toolbar, background
  - Image: floating crop and resizing bar
  - Font size
  - Quote
  - Indent
  - Link
- Bubble menu
  - Image
  - Link
  - Table

## How To Use
- Environment
> Node 16 and above

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

- Build
```
npm start build
```

## Tech Stack
WechatTiptap is based on the following technologies:
- [Tiptap](https://tiptap.dev/) – text editor
- [OpenAI](https://openai.com/) - AI completions
- [TailwindCSS](https://tailwindcss.com/) – styles


## Roadmap
- [x] WeChat document style
- [x] Table
- [x] Image
- [ ] Export JOSN/HTML
- [ ] Collaboration
- [ ] I18n
  - [x] Chinese
  - [ ] English


## License
Released under the MIT license. See`LICENSE.txt`for more information.

## Reference Engineering
- [novel](https://github.com/steven-tey/novel)
- [notitap](https://github.com/sereneinserenade/notitap)

