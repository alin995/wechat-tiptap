import React from "react";

const InsertIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M12,4.25 C7.71979319,4.25 4.25,7.71979319 4.25,12 C4.25,16.2802068 7.71979319,19.75 12,19.75 C16.2802068,19.75 19.75,16.2802068 19.75,12 C19.75,7.71979319 16.2802068,4.25 12,4.25 Z M12.61,8 L12.61,11.369 L16,11.37 L16,12.62 L12.61,12.619 L12.61,16 L11.36,16 L11.36,12.619 L8,12.62 L8,11.37 L11.36,11.369 L11.36,8 L12.61,8 Z" fill="#464D5A" fillRule="nonzero"></path>
        </svg>
    );
}

export default InsertIcon
