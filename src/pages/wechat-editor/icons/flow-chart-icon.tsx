import React from "react";

const FlowChartIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.7 19.3V4.7h9.55l3.05 3.072V19.3H5.7zM5.5 3.5h10.25l3.75 3.778V19.5a1 1 0 01-1 1h-13a1 1 0 01-1-1v-15a1 1 0 011-1zm10.549 6.914L14.62 9l-1.01 1h-3.33a1.75 1.75 0 100 3.5h3.562a.75.75 0 010 1.5H10.32v-.5H8.3v2h2.02V16h3.522a1.75 1.75 0 100-3.5H10.28a.75.75 0 110-1.5h3.502l.837.828 1.429-1.414z" fill="#454D5A"></path>
        </svg>
    );
}

export default FlowChartIcon
