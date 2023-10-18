import React from "react";

const CodeIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M12.7402379,6.5213324 L13.9798427,6.85348351 L11.1328332,17.4786676 L9.8932284,17.1465165 L12.7402379,6.5213324 Z M7.89820675,8.01598876 L8.79166667,8.9044503 L5.53628165,12.1403541 L8.79166667,15.3775272 L7.89820675,16.2659888 L3.75,12.1409888 L7.89820675,8.01598876 Z M16.1017932,8.01598876 L20.25,12.1409888 L16.1017932,16.2659888 L15.2083333,15.3775272 L18.4637184,12.1403541 L15.2083333,8.9044503 L16.1017932,8.01598876 Z" id="Shape" fill="#424D5C"></path>
                <rect fill="#E4E4E4" opacity="0" x="0" y="0" width="24" height="24"></rect>
            </g>
        </svg>
    );
}

export default CodeIcon
