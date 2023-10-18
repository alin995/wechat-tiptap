import React from "react";

const UndoIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 10.9a.2.2 0 01-.302.173L4.276 8.474a.2.2 0 01-.01-.339l4.423-2.93a.2.2 0 01.31.167v2.252l5 .001c3.149 0 5.626 2.306 5.626 5.375 0 3.033-2.4 5.505-5.404 5.62l-.221.005H7v-1.25h7A4.375 4.375 0 0018.375 13c0-2.289-1.788-4.02-4.158-4.12L14 8.875H9V10.9z" fill="#454D5A"></path>
        </svg>
    );
}

export default UndoIcon
