import React, { useEffect } from "react";
import { flushSync } from "react-dom"
import Moveable, { MoveableManagerInterface } from "react-moveable";
import { convertUnitSize } from "@daybrush/utils";
import { CropHandlers } from "./crop-handlers";

import "./image-clipper.scss"

const getTargetElement = (): HTMLImageElement => {
    return document.querySelector(".ProseMirror-selectednode img") as HTMLImageElement;
}

const updateViewPort = (target: HTMLElement | SVGElement, viewTop, viewRight, viewBottom, viewLeft, width, height) => {
    target.dataset["viewTop"] = `${viewTop}`
    target.dataset["viewLeft"] = `${viewLeft}`
    target.dataset["viewWidth"] = `${width - viewLeft - viewRight}`
    target.dataset["viewHeight"] = `${height - viewTop - viewBottom}`

    target.style.clipPath = `inset(${viewTop}px ${viewRight}px ${viewBottom}px ${viewLeft}px)`
}

const updateNode = (editor) => {
    const element = getTargetElement()
    if (element && editor.isActive("resizableImage")) {
        const width = convertUnitSize(element.style.width, 0)
        const height = convertUnitSize(element.style.height, 0)

        const selection = editor.state.selection;
        editor.commands.setResizableImage({
            src: element.src,
            alt: element.alt,
            width: width,
            height: height,
            viewTop: element.dataset["viewTop"],
            viewLeft: element.dataset["viewLeft"],
            viewWidth: element.dataset["viewWidth"],
            viewHeight: element.dataset["viewHeight"],
            rotate: element.dataset.rotate,
        });
        editor.commands.setNodeSelection(selection.from);
    }
};

const ResizeMaskViewable = {
    name: "resizeMaskViewable",
    props: [],
    events: [],
    render: (moveable: MoveableManagerInterface<any, any>) => {
        const rect = moveable.getRect();

        const targetElement = getTargetElement()

        const {viewLeft, viewTop, viewWidth, viewHeight} = targetElement?.dataset || {}

        return <div key={"resize-mask-viewer"} className={"wechat-image-clipper-mask-container"} style={{
            width: `${rect.width}px`,
            height: `${rect.height}px`,
        }}>
            <img src={targetElement?.["src"]} alt="" style={{
                position: "absolute",
                width: `${rect.width}px`,
                height: `${rect.height}px`,
            }}/>
            <div className="resize-area" style={{
                width: `${rect.width}px`,
                height: `${rect.height}px`,
            }}/>

            <div className="crop-area" style={{
                left: `${viewLeft}px`,
                top: `${viewTop}px`,
                width: `${viewWidth}px`,
                height: `${viewHeight}px`,
            }}>
                <img className="border border-4 border-white" src={targetElement?.["src"]} alt="" style={{
                    position: "absolute",
                    pointerEvents: "none",
					maxWidth: "none",
					maxHeight: "none",
                    width: `${rect.width}px`,
                    height: `${rect.height}px`,
                    marginLeft: `${-viewLeft}px`,
                    marginTop: `${-viewTop}px`,
                }}/>
                <CropHandlers width={Number(viewWidth)} height={Number(viewHeight)}/>
            </div>
        </div>;
    },
}

export const ImageClipper = ({editor}) => {

    useEffect(() => {
        const targetElement = getTargetElement();
        targetElement.style.visibility = "hidden"

        return () => {
            targetElement.style.visibility = "visible"
        }
    }, [])

    const defaultClipPath = (() => {
        const targetElement = getTargetElement()
        const {width, height, viewLeft, viewTop, viewWidth, viewHeight} = targetElement?.dataset || {}
        return `inset(${viewTop}px ${width - viewLeft - viewWidth}px ${height - viewTop - viewHeight}px ${viewLeft}px)`
    })()

    return (
        <div className="wechat-image-clipper-container">
            <Moveable
                className="wechat-image-clipper"
                target={getTargetElement()}
                ables={[ResizeMaskViewable]}
                props={{
                    resizeMaskViewable: true
                }}
                draggable={true}
                startDragRotate={0}
                throttleDragRotate={0}
                origin={false}
                clippable={true}
                clipRelative={true}
                clipArea={false}
                dragWithClip={false}
                defaultClipPath={defaultClipPath}
                clipTargetBounds={false}

                onDrag={(e) => {
                    e.target.style.transform = e.transform;
                }}

                onClip={(event) => {
                    const width = convertUnitSize(event.target.style.width, 0)
                    const height = convertUnitSize(event.target.style.height, 0)
                    const viewTop = Number(convertUnitSize(event.clipStyles[0], height))
                    const viewRight = Number(convertUnitSize(event.clipStyles[1], width))
                    const viewBottom = Number(convertUnitSize(event.clipStyles[2], height))
                    const viewLeft = Number(convertUnitSize(event.clipStyles[3], width))

                    updateViewPort(event.target, viewTop, viewRight, viewBottom, viewLeft, width, height)
                }}
                onClipEnd={() => updateNode(editor)}

                resizable={true}
                onResize={(event) => {
                    const {target, direction, delta} = event
                    const [directionX, directionY] = direction
                    const [deltaX, deltaY] = delta

                    let width = convertUnitSize(event.target.style.width, 0)
                    let height = convertUnitSize(event.target.style.height, 0)

                    const [viewWidth, viewHeight] = ["viewWidth", "viewHeight"].map(x => convertUnitSize(event.target.dataset[x], 0))
                    let [viewTop, viewLeft] = ["viewTop", "viewLeft"].map(x => convertUnitSize(event.target.dataset[x], 0))
                    let viewRight = width - viewLeft - viewWidth
                    let viewBottom = height - viewTop - viewHeight

                    if (directionX === -1) {
                        viewLeft = viewLeft + deltaX
                        width = convertUnitSize(target.style.width, width) + deltaX
                        target.style.marginLeft = `${convertUnitSize(target.style.marginLeft, width) - deltaX}px`
                        target.style.width = `${width}px`

                    } else if (directionX === 1) {
                        viewRight = viewRight + deltaX
                        width = convertUnitSize(target.style.width, width) + deltaX
                        target.style.width = `${width}px`
                    }

                    if (directionY === -1) {
                        viewTop = viewTop + deltaY
                        height = convertUnitSize(target.style.height, height) + deltaY
                        target.style.marginTop = `${convertUnitSize(target.style.marginTop, height) - deltaY}px`
                        target.style.height = `${height}px`
                    } else if (directionY === 1) {
                        viewBottom = viewBottom + deltaY
                        height = convertUnitSize(target.style.height, height) + deltaY
                        target.style.height = `${height}px`
                    }

                    updateViewPort(event.target, viewTop, viewRight, viewBottom, viewLeft, width, height)
                }}
                onResizeEnd={() => updateNode(editor)}
                flushSync={flushSync}
            />
        </div>
    );
};
