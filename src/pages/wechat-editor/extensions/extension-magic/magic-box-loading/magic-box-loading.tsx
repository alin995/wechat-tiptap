import React from "react";
import { Button } from "antd";

export interface MagicBoxLoadingProps {
    onStop?: () => void
}

export const MagicBoxLoading = (props: MagicBoxLoadingProps) => {

    const {onStop} = props

    return (
        <div className="flex justify-center items-center w-full my-3">
            <div className="w-full mx-2 text-sm text-stone-600">
                <span>正在生成 ...</span>
            </div>
            <Button
                size="small"
                type="text"
                onClick={() => onStop?.()}
            >
                停止
            </Button>
        </div>
    )
}
