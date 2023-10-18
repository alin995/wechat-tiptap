import React from "react";

const ReminderIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#464D5A" fillRule="nonzero" d="M9.583 4.167c3.453 0 6.25 2.799 6.25 6.25 0 3.45-2.797 6.25-6.25 6.25-3.452 0-6.25-2.8-6.25-6.25 0-3.451 2.798-6.25 6.25-6.25zm0 1.132c-2.82 0-5.109 2.29-5.109 5.118 0 2.827 2.289 5.117 5.11 5.117 2.82 0 5.108-2.29 5.108-5.117 0-2.828-2.288-5.118-5.109-5.118zM10.25 7.5v2.25h2.25v1.083H9.167V7.5h1.083zm3.916-4.167l2.5 2.512-.832.822-2.5-2.512.832-.822zM5 3.333l.832.822-2.5 2.512-.833-.822 2.501-2.512z" transform="translate(-64.000000, -390.000000) translate(48.000000, 90.000000) translate(0.000000, 265.000000) translate(0.000000, 30.000000) translate(16.000000, 5.000000)"></path>
        </svg>
    );
}

export default ReminderIcon
