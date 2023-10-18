import React from "react";

const DeleteIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <rect width="24" height="24" rx="2"></rect>
                <path d="M15.5 4a.5.5 0 01.5.5v1.999l1.462.001H20v1.25l-2.093-.001-.873 11.788a.5.5 0 01-.498.463H7.464a.5.5 0 01-.498-.463L6.092 7.749 4 7.75V6.5l2.501.001a.5.5 0 01.037-.001L8 6.499V4.5a.5.5 0 01.5-.5h7zm1.154 3.75H7.346l.815 11h7.678l.815-11zM12.65 11v5H11.4v-5h1.25zm2.1-5.75h-5.5v1.249h5.5V5.25z" fill="#464D5A"></path>
            </g>
        </svg>
    );
}

export default DeleteIcon
