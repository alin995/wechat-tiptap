import React from "react";

const AlignLeftIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 6h14v1.4H5V6zM5 11.3h8v1.4H5v-1.4z" fill="currentColor"></path>
            <path d="M5 16.6h14V18H5v-1.4z" fill="currentColor"></path>
        </svg>
    );
}

export default AlignLeftIcon
