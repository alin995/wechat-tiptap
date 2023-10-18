import React from "react";

const ReturnIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect transform="translate(12, 12) scale(-1, 1) rotate(-180) translate(-12, -12) " x="-5.68434189e-14" y="3.90798505e-14" width="24" height="24" rx="2"></rect>
                <g transform="translate(12.866025, 11.5) scale(-1, 1) rotate(-60) translate(-12.866025, -11.5) translate(6.866025, 4.5)">
                    <path d="M0.200516869,6.45605079 C0.0697077585,6.9486818 0,7.46620034 0,8 C0,11.3137085 2.6862915,14 6,14 C9.3137085,14 12,11.3137085 12,8 C12,4.6862915 9.3137085,2 6,2" stroke="#333333"></path>
                    <polygon fill="#333333" transform="translate(5, 2) rotate(-90) translate(-5, -2) " points="5 0.5 7 3.5 3 3.5"></polygon>
                </g>
            </g>
        </svg>
    );
}

export default ReturnIcon
