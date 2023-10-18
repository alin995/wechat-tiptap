import React from "react";

const RotateIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24" rx="2"></rect>
                <g transform="translate(5, 3)" fill="#333333" fillRule="nonzero">
                    <path d="M11,6 C11.5522847,6 12,6.44771525 12,7 L12,14.5 C12,15.0522847 11.5522847,15.5 11,15.5 L1,15.5 C0.44771525,15.5 0,15.0522847 0,14.5 L0,7 C0,6.44771525 0.44771525,6 1,6 L11,6 Z M11,7 L1,7 L1,14.5 L11,14.5 L11,7 Z M9.5,0.5 L9.50033196,2.01897008 C12.7798505,2.26861515 15.3790348,4.95190971 15.495897,8.26686587 L15.5,8.5 L14.5,8.5 C14.5,5.63133302 12.3037925,3.27561778 9.5010385,3.02251519 L9.5,4.5 L6.5,2.5 L9.5,0.5 Z"></path>
                </g>
            </g>
        </svg>
    );
}

export default RotateIcon
