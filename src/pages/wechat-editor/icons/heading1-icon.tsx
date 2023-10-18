import React from "react";

const Heading1Icon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#464D5A" fillRule="evenodd">
                <path d="M4 5h1.25v13H4z"></path>
                <path d="M14.12 10.5v1.25h-10V10.5z"></path>
                <path d="M12.99 5h1.25v13h-1.25z"></path>
                <path d="M19.04 19v-7.14h-.88c-.24.25-.54.48-.9.7-.36.2-.7.34-1.02.42v1.16c.66-.19 1.2-.48 1.63-.87V19h1.17z" fillRule="nonzero"></path>
            </g>
        </svg>
    );
}

export default Heading1Icon
