import React from "react";

const UnderlineIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 18.3v1.3H5v-1.3h13zM8.4 5v7.5a3.1 3.1 0 002.924 3.095l.176.005a3.1 3.1 0 003.095-2.924l.005-.176V5H16v7.5a4.5 4.5 0 11-9 0V5h1.4z" fill="#454D5A"></path>
        </svg>
    );
}

export default UnderlineIcon
