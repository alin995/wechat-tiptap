import React from "react";

const SearchIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.847 6.908a6.244 6.244 0 00-8.986 0c-2.481 2.545-2.481 6.67 0 9.214a6.24 6.24 0 008.628.34l2.26 2.318a.72.72 0 001.036 0 .765.765 0 000-1.063l-2.299-2.359c1.82-2.548 1.608-6.147-.639-8.45zM7.83 15.13c-1.947-1.997-1.947-5.233 0-7.23a4.9 4.9 0 017.05 0c1.948 1.997 1.948 5.233 0 7.23a4.9 4.9 0 01-7.05 0z" fill="#454D5A"></path>
        </svg>
    );
}

export default SearchIcon
