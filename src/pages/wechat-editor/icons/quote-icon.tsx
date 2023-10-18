import React from "react";

const QuoteIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 6h1.199v13H5V6zm5 11c1.956-.957 4.164-4.128 4.164-6.968 0-1.755-1.1-3.032-2.414-3.032-1.375 0-2.078 1.053-2.078 2.074 0 1.15.764 2.043 1.925 2.043.337 0 .642-.128.825-.255 0 1.404-1.444 4.255-3.094 5.117L10 17zm5.822 0c1.956-.957 4.165-4.128 4.165-6.968 0-1.755-1.1-3.032-2.414-3.032-1.375 0-2.078 1.053-2.078 2.074 0 1.15.764 2.043 1.925 2.043.336 0 .642-.128.825-.255 0 1.404-1.445 4.255-3.095 5.117L15.822 17z" fill="#454D5A"></path>
        </svg>
    );
}

export default QuoteIcon
