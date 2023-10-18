import React from "react";

const CopyIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#454D5A">
                <path d="M7.5 4.5a.5.5 0 000 1h11a.5.5 0 01.5.5v11a.5.5 0 001 0V6a1.5 1.5 0 00-1.5-1.5h-11z"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5 7.5a1 1 0 011-1h11a1 1 0 011 1v11a1 1 0 01-1 1H6a1 1 0 01-1-1v-11zm1 0h11v11H6v-11z"></path>
            </g>
        </svg>
    );
}

export default CopyIcon
