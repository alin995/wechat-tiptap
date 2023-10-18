import React from "react";

const SplitCellIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 5.5 C11 5.224 10.8 5 10.5 5 H4.2 C3.9 5 3.7 5.224 3.7 5.5 V19.5 C3.7 19.8 3.9 20 4.2 20 H10.5 C10.8 20 11 19.8 11 19.5 V17 H9.7 L9.7 18.7 H5 V6.3 H9.7 L9.7 8 H11 V5.5Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.3 5.4 C19.25 5.2 19 5 18.8 5 H12.5 L12.4 5 C12.2 5 12 5.3 12 5.5 V8 H13.3 L13.3 6.3 H18 V18.7 H13.3 L13.3 17 H12 V19.5 L12 19.6 C12 19.82 12.25 20 12.5 20 H18.8 L18.9 20 C19.123 19.95 19.3 19.75 19.3 19.5 V5.5 L19.3 5.4Z" fill="currentColor"></path>
            <g transform="translate(5.8, 0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.5 10.5 L11 12.5 V12.5 L8.5 14.5 V13 H6.25 V12 H8.5 V10.5Z" fill="currentColor"></path>
            </g>
            <g transform="translate(-5.8, 0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 12 V10.5 L12 12.5 V12.5 L14.5 14.5 V13 H16.75 V12 H14.5Z" fill="currentColor"></path>
            </g>
        </svg>
    );
}

export default SplitCellIcon
