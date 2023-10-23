import React from "react";
import { flushSync } from "react-dom"
import Moveable from "react-moveable";
import { convertUnitSize } from "@daybrush/utils";


const getTargetElement = (): HTMLDivElement => {
    return document.querySelector(".ProseMirror-selectednode") as HTMLDivElement;
}

const getImageElement = (): HTMLImageElement => {
    return document.querySelector(".ProseMirror-selectednode img") as HTMLImageElement;
}

const updateSizing = (
    target: HTMLDivElement | SVGElement,
    viewTop: number,
    viewRight: number,
    viewBottom: number,
    viewLeft: number,
    width: number,
    height: number
) => {
    target.style.width = `${width - viewLeft - viewRight}px`
    target.style.height = `${height - viewTop - viewBottom}px`

    console.log(target.style.width, target.style.height)

    const cropElement = target.getElementsByTagName('div')?.[0] as HTMLDivElement
    if (cropElement) {
        cropElement.style.width = `${width}px`
        cropElement.style.height = `${height}px`

        const imageElement = cropElement.getElementsByTagName('img')?.[0]
        if (imageElement) {
            imageElement.style.width = `${width}px`
            imageElement.style.height = `${height}px`
            imageElement.style.marginLeft = `${-viewLeft}px`
            imageElement.style.marginTop = `${-viewTop}px`

            imageElement.dataset["viewTop"] = `${viewTop}`
            imageElement.dataset["viewLeft"] = `${viewLeft}`
            imageElement.dataset["viewWidth"] = `${width - viewLeft - viewRight}`
            imageElement.dataset["viewHeight"] = `${height - viewTop - viewBottom}`

            imageElement.style.clipPath = `inset(${viewTop}px ${viewRight}px ${viewBottom}px ${viewLeft}px)`
        }
    }

}

const updateNode = (editor) => {
    const element = getImageElement()
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

export const ImageResizer = ({editor}) => {

    return (
        <div className="haydn-image-resizer-container">
            <Moveable
                className="haydn-image-resizer"
                target={getTargetElement()}
                draggable={true}
                startDragRotate={0}
                throttleDragRotate={0}
                origin={false}
                resizable={true}
                onResize={(event) => {
                    const {direction} = event
                    const [directionX, directionY] = direction

                    const imageElement = getImageElement()

                    let width = convertUnitSize(imageElement.style.width, 0)
                    let height = convertUnitSize(imageElement.style.height, 0)

                    let [viewTop, viewLeft, viewWidth, viewHeight] = ["viewTop", "viewLeft", "viewWidth", "viewHeight"].map(x => convertUnitSize(imageElement.dataset[x], 0))

                    if (directionX !== 0) {
                        const scaleX = event.width / viewWidth
                        viewWidth = event.width
                        viewLeft = viewLeft * scaleX
                        width = width * scaleX
                    }

                    if (directionY !== 0) {
                        const scaleY = event.height / viewHeight
                        viewHeight = event.height
                        viewTop = viewTop * scaleY
                        height = height * scaleY
                    }

                    updateSizing(event.target, viewTop, width - viewLeft - viewWidth, height - viewTop - viewHeight, viewLeft, width, height)
                }}
                onResizeEnd={() => updateNode(editor)}
                flushSync={flushSync}
            />
        </div>
    );
};
