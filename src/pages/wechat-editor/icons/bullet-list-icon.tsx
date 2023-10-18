import React from "react";

const BulletListIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.25 5.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm0 5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM5 17a1.25 1.25 0 112.5 0A1.25 1.25 0 015 17zm15-9.6V6H9v1.4h11zm0 5.3v-1.4H9v1.4h11zm0 3.9V18H9v-1.4h11z" fill="#454D5A"></path>
        </svg>
    );
}

export default BulletListIcon
