import React from "react";

const Heading4Icon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#464D5A" fillRule="evenodd">
                <path d="M4 5h1.25v13H4z"></path>
                <path d="M14.12 10.5v1.25h-10V10.5z"></path>
                <path d="M12.99 5h1.25v13h-1.25z"></path>
                <path d="M20.8 19v-1.53h1.06v-.93H20.8v-4.68h-1.07l-3.49 4.5v1.11h3.45V19h1.11zm-1.11-2.46h-2.5l2.47-3.2h.03v3.2z" fillRule="nonzero"></path>
            </g>
        </svg>
    );
}

export default Heading4Icon
