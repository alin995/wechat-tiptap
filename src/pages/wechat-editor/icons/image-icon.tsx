import React from "react";

const ImageIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19 5a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h14zm-.3 1.3H5.3v11.4h13.4V6.3zM17 16l-3.333-6-2.785 4.734-1.66-2.724L7 16h10z" fill="#454D5A"></path>
        </svg>
    );
}

export default ImageIcon
