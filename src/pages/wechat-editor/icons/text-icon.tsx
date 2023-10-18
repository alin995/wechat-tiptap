import React from "react";

const TextIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5 5H6.25v1.25h5.25V18h1.25V6.25h5V5H11.5z" fill="#454D5A"></path>
        </svg>
    );
}

export default TextIcon
