import React from "react";

const RedoIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10.9a.2.2 0 00.302.173l4.422-2.599a.2.2 0 00.01-.339l-4.423-2.93a.2.2 0 00-.31.167v2.252l-5 .001c-3.149 0-5.626 2.306-5.626 5.375 0 3.033 2.4 5.505 5.404 5.62l.221.005h7v-1.25h-7A4.375 4.375 0 015.625 13c0-2.289 1.788-4.02 4.158-4.12L10 8.875h5V10.9z" fill="#454D5A"></path>
        </svg>
    );
}

export default RedoIcon
