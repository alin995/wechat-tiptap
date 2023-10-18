import React from "react";

const Heading5Icon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#464D5A" fillRule="evenodd">
                <path d="M4 5h1.25v13H4z"></path>
                <path d="M14.12 10.5v1.25h-10V10.5z"></path>
                <path d="M12.99 5h1.25v13h-1.25z"></path>
                <path d="M18.76 19.14c.71 0 1.32-.21 1.84-.63.56-.47.84-1.07.84-1.81 0-.77-.22-1.38-.64-1.82-.42-.44-.97-.66-1.64-.66-.32 0-.61.05-.87.15-.29.1-.54.26-.76.48h-.03l.2-1.96h3.41v-1.03h-4.35l-.39 4.02h1.09c.14-.25.33-.43.58-.55.22-.11.49-.16.8-.16.46 0 .82.13 1.06.41.24.27.37.65.37 1.13 0 .44-.15.79-.43 1.05-.29.26-.65.39-1.07.39-.39 0-.7-.09-.92-.25-.26-.19-.41-.48-.46-.87h-1.15c.05.66.33 1.19.85 1.58.46.35 1.02.53 1.67.53z" fillRule="nonzero"></path>
            </g>
        </svg>
    );
}

export default Heading5Icon
