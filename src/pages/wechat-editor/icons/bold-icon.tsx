import React from "react";

const BoldIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.3 6.8h4.2a2.2 2.2 0 010 4.4H8.3V6.8zM7 5.5h5.5a3.5 3.5 0 012.34 6.103 3.75 3.75 0 01-1.59 7.147H7V5.5zm1.3 7.05h4.95a2.45 2.45 0 110 4.9H8.3v-4.9z" fill="currentColor"></path>
        </svg>
    );
}

export default BoldIcon
