import React from "react";

const TaskListIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.78 6.298l1.3-1.3L6 5a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V11.28l-1.3 1.3V17.7H6.3V14l-.003-4L6.3 6.3l9.48-.002zm3.877 1.443a.65.65 0 00-.92-.92l-7.106 7.107-2.369-2.369a.65.65 0 10-.919.92l2.935 2.934a.5.5 0 00.707 0l7.672-7.672z" fill="#454D5A"></path>
        </svg>
    );
}

export default TaskListIcon
