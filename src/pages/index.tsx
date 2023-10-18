import { WechatEditor } from "@wechat-editor/index";

import {DEFAULT_CONTENT} from "./default-content"

import "./styles.scss"

export const App = () => {
    return (
        <main className={`flex min-h-screen w-full flex-col items-center justify-between`}>
            <div className="fixed z-9999 w-full flex flex-row">
                <div className="w-full h-14 flex items-center items-center justify-between border-b bg-gradient-to-r from-slate-900 text-white">
                    <p className="fixed left-0 top-0 flex w-full justify-center p-4 w-auto">
                        <span className="font-bold">WechatTiptap</span>&nbsp;-&nbsp;<span className="italic">A wechat-style editor based on tiptap</span>
                    </p>
                    <p className="fixed right-0 top-0 flex w-full justify-center p-4 w-auto">
                        tail
                    </p>
                </div>
                <div className="fixed pt-12 w-full items-center justify-between border-b bg-gradient-to-b from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 font-mono text-lg lg:flex">
                    Toolbar
                </div>
            </div>


            <div className="pt-20 w-full min-h-screen items-center justify-between border-b text-lg">
                <WechatEditor initialContent={DEFAULT_CONTENT}/>
            </div>

            <div className="w-full items-center justify-between border-b bg-gradient-to-b from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 font-mono text-sm lg:flex">
                Footer
            </div>
        </main>
    )
}

export default App
