import React from "react";

const EditIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" rx="2"></rect>
                <rect fill="#333333" transform="translate(15.146447, 9.146447) rotate(-45.000000) translate(-15.146447, -9.146447) " x="14.6464466" y="7.14644661" width="1" height="4"></rect>
                <path d="M15.6841746,5.60064282 L18.5033881,8.25621676 L9.65680994,17.0591048 L5.51125926,18.4962519 L6.85407826,14.4874188 L15.6841746,5.60064282 Z" stroke="#333333" fillRule="nonzero"></path>
            </g>
        </svg>
    );
}

export default EditIcon
