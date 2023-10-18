import React from "react";

const AiShortenIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-6"></path>
                <path d="M12 8V2"></path>
                <path d="M4 12H2"></path>
                <path d="M10 12H8"></path>
                <path d="M16 12h-2"></path>
                <path d="M22 12h-2"></path>
                <path d="m15 19-3-3-3 3"></path>
                <path d="m15 5-3 3-3-3"></path>
            </g>
        </svg>
    );
}

export default AiShortenIcon
