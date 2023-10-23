import React from "react";


export interface CropHandlersProps {
	width: number
	height: number
}

export const CropHandlers = ({width, height}: CropHandlersProps) => {

	return <div className="absolute" style={{
		width: `${width}px`,
		height: `${height}px`,
	}}>
		<div className="absolute w-full h-[1px] bg-black top-0 left-0"></div>
		<div className="absolute w-full h-[1px] bg-black top-1/3 left-0"></div>
		<div className="absolute w-full h-[1px] bg-black bottom-1/3 right-0"></div>
		<div className="absolute w-full h-[1px] bg-black bottom-0 right-0"></div>
		<div className="absolute w-[1px] h-full bg-black top-0 left-0"></div>
		<div className="absolute w-[1px] h-full bg-black top-0 left-1/3"></div>
		<div className="absolute w-[1px] h-full bg-black bottom-0 right-1/3"></div>
		<div className="absolute w-[1px] h-full bg-black bottom-0 right-0"></div>

		<div className="absolute pointer-events-none w-[22px] h-[22px] top-[-2px] left-[-2px] cursor-nw-resize">
			<div className="absolute bg-white w-[22px] h-2 top-0 left-0"></div>
			<div className="absolute bg-black z-10 w-[18px] h-1 top-[2px] left-[2px]"></div>
			<div className="absolute bg-white w-2 h-[22px] top-0 left-0"></div>
			<div className="absolute bg-black z-10 w-1 h-[18px] top-[2px] left-[2px]"></div>
		</div>
		<div className="absolute pointer-events-none w-[22px] h-[22px] top-[-2px] left-1/2 ml-[-11px] cursor-n-resize">
			<div className="absolute bg-white w-[22px] h-2 top-0 left-0"></div>
			<div className="absolute bg-black z-10 w-[18px] h-1 top-[2px] left-[2px]"></div>
		</div>
		<div className="absolute pointer-events-none w-[22px] h-[22px] top-[-2px] right-[-2px] cursor-ne-resize">
			<div className="absolute bg-white w-[22px] h-2 top-0 left-0"></div>
			<div className="absolute bg-black z-10  w-[18px] h-1 top-[2px] left-[2px]"></div>
			<div className="absolute bg-white w-2 h-[22px] top-0 right-0"></div>
			<div className="absolute bg-black z-10 w-1 h-[18px] top-[2px] right-[2px]"></div>
		</div>
		<div className="absolute pointer-events-none w-[22px] h-[22px] left-[-2px] top-1/2 mt-[-11px] cursor-w-resize">
			<div className="absolute bg-white w-2 h-[22px] top-0 left-0"></div>
			<div className="absolute bg-black z-10 w-1 h-[18px] top-[2px] left-[2px]"></div>
		</div>
		<div className="absolute pointer-events-none w-[22px] h-[22px] right-[-2px] top-1/2 mt-[-11px] cursor-e-resize">
			<div className="absolute bg-white w-2 h-[22px] top-0 right-0"></div>
			<div className="absolute bg-black z-10 w-1 h-[18px] top-[2px] right-[2px]"></div>
		</div>
		<div className="absolute pointer-events-none w-[22px] h-[22px] bottom-[-2px] left-[-2px] cursor-sw-resize">
			<div className="absolute bg-white w-[22px] h-2 bottom-0 left-0"></div>
			<div className="absolute bg-black z-10 w-[18px] h-1 bottom-[2px] left-[2px]"></div>
			<div className="absolute bg-white w-2 h-[22px] bottom-0 left-0"></div>
			<div className="absolute bg-black z-10 w-1 h-[18px] bottom-[2px] left-[2px]"></div>
		</div>
		<div className="absolute pointer-events-none w-[22px] h-[22px] bottom-[-2px] left-1/2 ml-[-11px] cursor-s-resize">
			<div className="absolute bg-white w-[22px] h-2 bottom-0 left-0"></div>
			<div className="absolute bg-black z-10 w-[18px] h-1 bottom-[2px] left-[2px]"></div>
		</div>
		<div className="absolute pointer-events-none w-[22px] h-[22px] bottom-[-2px] right-[-2px] cursor-se-resize">
			<div className="absolute bg-white w-[22px] h-2 bottom-0 left-0"></div>
			<div className="absolute bg-black z-10 w-[18px] h-1 bottom-[2px] left-[2px]"></div>
			<div className="absolute bg-white w-2 h-[22px] top-0 right-0"></div>
			<div className="absolute bg-black z-10 w-1 h-[18px] top-[2px] right-[2px]"></div>
		</div>
	</div>

}
