import React from "react";

const SnippetIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="nonzero" stroke="#464D5A" strokeWidth="1.25">
                <rect x="4.625" y="5.625" width="5.75" height="7" rx="1"></rect>
                <rect x="12.875" y="12.375" width="5.75" height="7" rx="1"></rect>
                <rect x="12.875" y="5.625" width="5.75" height="4.25" rx="1"></rect>
                <rect x="4.625" y="15.125" width="5.75" height="4.25" rx="1"></rect>
            </g>
        </svg>
    );
}

export default SnippetIcon
