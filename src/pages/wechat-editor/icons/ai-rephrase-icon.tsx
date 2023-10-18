import React from "react";

const AiRephraseIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m17 2 4 4-4 4"></path>
                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                <path d="m7 22-4-4 4-4"></path>
                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
            </g>
        </svg>
    );
}

export default AiRephraseIcon
