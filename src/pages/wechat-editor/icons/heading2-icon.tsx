import React from "react";

const Heading2Icon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#464D5A" fillRule="evenodd">
                <path d="M4 5h1.25v13H4z"></path>
                <path d="M14.12 10.5v1.25h-10V10.5z"></path>
                <path d="M12.99 5h1.25v13h-1.25z"></path>
                <path d="M21.22 19v-1.03H17.7c.16-.36.6-.78 1.33-1.26.7-.47 1.2-.85 1.48-1.15.46-.51.7-1.07.7-1.69 0-.64-.22-1.15-.66-1.55-.45-.4-1.02-.6-1.71-.6-.77 0-1.39.26-1.86.78-.46.49-.69 1.13-.7 1.93h1.17c.02-.56.14-.99.36-1.27.22-.3.55-.45.99-.45.41 0 .72.09.93.28.2.19.31.48.31.87 0 .4-.16.78-.47 1.13-.2.21-.52.48-.98.8-.83.57-1.38 1.01-1.64 1.31-.48.54-.71 1.17-.71 1.9h4.98z" fillRule="nonzero"></path>
            </g>
        </svg>
    );
}

export default Heading2Icon
