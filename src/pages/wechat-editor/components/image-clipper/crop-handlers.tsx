import React from "react";


export interface CropHandlersProps {
    width: number
    height: number
}

/**
 * 布局复制自微信在线文档
 * @param width 宽
 * @param height 高
 */
export const CropHandlers = ({width, height}: CropHandlersProps) => {

    return <div className="haydn-image-clipper-crop-handlers" style={{
        width: `${width}px`,
        height: `${height}px`,
    }}>
        <div className="crop-handler-border horizontal" style={{top: 0, left: 0}}></div>
        <div className="crop-handler-border horizontal" style={{top: "33%", left: 0}}></div>
        <div className="crop-handler-border horizontal" style={{bottom: "33%", right: 0}}></div>
        <div className="crop-handler-border horizontal" style={{bottom: 0, right: 0}}></div>
        <div className="crop-handler-border vertical" style={{top: 0, left: 0}}></div>
        <div className="crop-handler-border vertical" style={{top: 0, left: "33%"}}></div>
        <div className="crop-handler-border vertical" style={{bottom: 0, right: "33%"}}></div>
        <div className="crop-handler-border vertical" style={{bottom: 0, right: 0}}></div>

        <div className="crop-handler top-left" style={{top: -2, left: -2, cursor: "nw-resize"}}>
            <div className="crop-outer-handler top" style={{width: 22, height: 8, top: 0, left: 0}}></div>
            <div className="crop-inner-handler top" style={{width: 18, height: 4, top: 2, left: 2}}></div>
            <div className="crop-outer-handler left" style={{width: 8, height: 22, top: 0, left: 0}}></div>
            <div className="crop-inner-handler left" style={{width: 4, height: 18, top: 2, left: 2}}></div>
        </div>
        <div className="crop-handler top" style={{top: -2, left: "50%", marginLeft: -11, cursor: "n-resize"}}>
            <div className="crop-outer-handler" style={{width: 22, height: 8, top: 0, left: 0}}></div>
            <div className="crop-inner-handler" style={{width: 18, height: 4, top: 2, left: 2}}></div>
        </div>
        <div className="crop-handler top-right" style={{top: -2, right: -2, cursor: "ne-resize"}}>
            <div className="crop-outer-handler top" style={{width: 22, height: 8, top: 0, left: 0}}></div>
            <div className="crop-inner-handler top" style={{width: 18, height: 4, top: 2, left: 2}}></div>
            <div className="crop-outer-handler right" style={{width: 8, height: 22, top: 0, right: 0}}></div>
            <div className="crop-inner-handler right" style={{width: 4, height: 18, top: 2, right: 2}}></div>
        </div>
        <div className="crop-handler left" style={{left: -2, top: "50%", marginTop: -11, cursor: "w-resize"}}>
            <div className="crop-outer-handler" style={{width: 8, height: 22, top: 0, left: 0}}></div>
            <div className="crop-inner-handler" style={{width: 4, height: 18, top: 2, left: 2}}></div>
        </div>
        <div className="crop-handler right" style={{right: -2, top: "50%", marginTop: -11, cursor: "e-resize"}}>
            <div className="crop-outer-handler" style={{width: 8, height: 22, top: 0, right: 0}}></div>
            <div className="crop-inner-handler" style={{width: 4, height: 18, top: 2, right: 2}}></div>
        </div>
        <div className="crop-handler bottom-left" style={{bottom: -2, left: -2, cursor: "sw-resize"}}>
            <div className="crop-outer-handler bottom" style={{width: 22, height: 8, bottom: 0, left: 0}}></div>
            <div className="crop-inner-handler bottom" style={{width: 18, height: 4, bottom: 2, left: 2}}></div>
            <div className="crop-outer-handler left" style={{width: 8, height: 22, bottom: 0, left: 0}}></div>
            <div className="crop-inner-handler left" style={{width: 4, height: 18, bottom: 2, left: 2}}></div>
        </div>
        <div className="crop-handler bottom" style={{bottom: -2, left: "50%", marginLeft: -11, cursor: "s-resize"}}>
            <div className="crop-outer-handler" style={{width: 22, height: 8, bottom: 0, left: 0}}></div>
            <div className="crop-inner-handler" style={{width: 18, height: 4, bottom: 2, left: 2}}></div>
        </div>
        <div className="crop-handler bottom-right" style={{bottom: -2, right: -2, cursor: "se-resize"}}>
            <div className="crop-outer-handler bottom" style={{width: 22, height: 8, bottom: 0, left: 0}}></div>
            <div className="crop-inner-handler bottom" style={{width: 18, height: 4, bottom: 2, left: 2}}></div>
            <div className="crop-outer-handler right" style={{width: 8, height: 22, top: 0, right: 0}}></div>
            <div className="crop-inner-handler right" style={{width: 4, height: 18, top: 2, right: 2}}></div>
        </div>
    </div>

}
