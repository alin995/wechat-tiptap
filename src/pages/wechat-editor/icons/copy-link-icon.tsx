import React from "react";

const CopyLinkIcon = ({className}: { className?: string }) => {
    return (

        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 4.5C7.22386 4.5 7 4.72386 7 5C7 5.27614 7.22386 5.5 7.5 5.5H18.5C18.7761 5.5 19 5.72386 19 6V17C19 17.2761 19.2239 17.5 19.5 17.5C19.7761 17.5 20 17.2761 20 17V6C20 5.17157 19.3284 4.5 18.5 4.5H7.5Z" fill="#454D5A"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5 7.5C5 6.94772 5.44772 6.5 6 6.5H17C17.5523 6.5 18 6.94772 18 7.5V18.5C18 19.0523 17.5523 19.5 17 19.5H6C5.44772 19.5 5 19.0523 5 18.5V7.5ZM6 7.5H17V18.5H6L6 7.5Z" fill="#454D5A"></path>
        </svg>
    );
}

export default CopyLinkIcon
