import { useState } from "react";
import { Editor } from "@tiptap/react";
import { WechatEditor } from "@wechat-editor/index";
import { Toolbar } from "@wechat-editor/toolbar";

import { DEFAULT_CONTENT } from "./default-content"


import "./styles.scss"

export const App = () => {

    const [editor, setEditor] = useState<Editor | null>(null)
    const [timestamp, setTimestamp] = useState(0)

    console.log(timestamp)
    return (
        <main className={`flex min-h-screen w-full flex-col items-center justify-between`}>
            <div className="fixed flex flex-col z-[999] w-full bg-white">
                <div className="w-full h-14 justify-between border-b bg-gradient-to-r from-slate-900 to-slate-100 text-white">
                    <p className="fixed left-0 top-0 flex justify-center p-4">
                        <span className="font-bold">WechatTiptap</span>&nbsp;-&nbsp;<span className="italic text-stone-100">A wechat-style WYSIWYG editor based on tiptap</span>
                    </p>
                    <p className="fixed right-0 top-0 flex justify-center p-4 text-stone-600">
						<a href="https://github.com/alin995/wechat-tiptap" target="_blank">GitHub</a>
                    </p>
                </div>
                <div className="flex w-full items-center justify-between border-b bg-gradient-to-b from-zinc-200 font-mono text-lg ">
                    {editor && <Toolbar editor={editor}/>}
                </div>
            </div>


            <div className="mt-[108px] w-full min-h-screen items-center justify-between border-b text-lg">
                <div className="w-[800px] ml-[300px] p-16 bg-white shadow-2xl ">
                    <WechatEditor
                        initialContent={DEFAULT_CONTENT}
                        editorChange={x => {
                            setEditor(x)
                            setTimestamp(new Date().getTime())
                        }}
                        contentChange={x => {
							console.log(x)
                            setTimestamp(new Date().getTime())
                        }}
                    />
                </div>
            </div>

            <div className="w-full items-center justify-between border-b bg-gradient-to-b from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 font-mono text-sm lg:flex">
                Footer
            </div>
        </main>
    )
}

export default App
