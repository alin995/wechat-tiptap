import React from "react";

const CropIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <rect width="24" height="24" rx="2"></rect>
                <path fill="#333" d="M16 7v8h2.5v1H16v2.5h-1V8H4.5V7H7V4.5h1V7h8zM8 9v6h6v1H7V9h1z"></path>
            </g>
        </svg>
    );
}

export default CropIcon
