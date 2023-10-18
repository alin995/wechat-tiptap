import React from "react";

const ClearFormatIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 18.25h14v1.25H5v-1.25zM7.167 17l-2.92-2.92a.487.487 0 01.013-.688l8.405-8.405a.487.487 0 01.688-.013l5.4 5.4c.166.166.18.427.045.62l-.058.068L12.802 17h-1.689l2.93-2.93-4.387-4.388-4.028 4.028L8.918 17H7.167z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M7 15.75h6L12 17H8l-1-1.25z" fill="currentColor"></path>
        </svg>
    );
}

export default ClearFormatIcon
