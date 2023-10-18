import React from "react";

const ItalicIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 6.375c0-.345.28-.625.625-.625h5.25a.625.625 0 110 1.25h-1.708l-3.334 10h2.042a.625.625 0 110 1.25h-5.75a.625.625 0 110-1.25h2.208l3.334-10h-2.042A.625.625 0 0110 6.375z" fill="#454D5A"></path>
        </svg>
    );
}

export default ItalicIcon
