import React from "react";
import { Editor } from "@tiptap/react";

import './statusbar.scss'

export interface StatusbarProps {
    editor: Editor | null
}

export const Statusbar = (props: StatusbarProps) => {
    const {editor} = props

    const characters = editor?.storage.characterCount.characters() || 0

    return <div className="statusbar-wrapper">
        <div className="statusbar-simple-text">
            {`${characters} 个字`}
        </div>
    </div>
}
