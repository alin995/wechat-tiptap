import React from "react";

const LetterSpacingIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.222 5H7.91L5 13h1.228l.709-2.062h3.248l.71 2.062h1.237l-2.91-8zm.614 4.93h-2.55l1.259-3.62h.042l1.249 3.62zM13.434 5h-1.249l2.71 8h1.396L19 5h-1.249l-2.137 6.633h-.032L13.434 5zM6 15l-3 2.5L6 20v-1.87h5v-1.25H6V15zm12 0l3 2.5-3 2.5v-1.87h-5v-1.25h5V15z" fill="#454D5A"></path>
        </svg>
    );
}

export default LetterSpacingIcon
