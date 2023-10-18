import React from "react";

const DropDownArrowIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="6px" height="24px" viewBox="0 0 6 24" xmlns="http://www.w3.org/2000/svg">
            <polygon strokeWidth="1" points="0 10 6 10 3 14" fill="#000000" fillRule="nonzero" opacity="0.4"></polygon>
        </svg>
    );
}

export default DropDownArrowIcon
