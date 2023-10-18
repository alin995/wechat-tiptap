import React from "react";

const TableIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.5 5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-13a.5.5 0 01.5-.5h15zM9 15.028H5.299L5.3 17.7H9v-2.672zm9.7 0h-8.45V17.7h8.45v-2.672zM9 10.75H5.299v3.028H9V10.75zm9.7 0h-8.45v3.028h8.45V10.75zM9 6.299L5.3 6.3l-.001 3.2H9V6.299zm9.7.001l-8.45-.001V9.5h8.45V6.3z" fill="#454D5A"></path>
        </svg>
    );
}

export default TableIcon
