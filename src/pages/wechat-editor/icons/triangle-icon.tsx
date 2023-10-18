import React from "react";

const TriangleIcon = ({className, rotate = "0"}: { className?: string, rotate?: string }) => {
    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform={`translate(8, 8) rotate(${rotate}) translate(-8, -8)`} fillRule="nonzero">
                    <rect stroke="#979797" fill="#D8D8D8" opacity="0" x="0" y="0" width="16" height="16"></rect>
                    <path d="M8.11484333,5.2258117 L11.6165722,10.4784049 C11.6982661,10.6009459 11.6651531,10.766511 11.5426121,10.848205 C11.4988075,10.8774081 11.4473387,10.8929916 11.3946921,10.8929916 L4.39123447,10.8929916 C4.24395854,10.8929916 4.12456781,10.7736009 4.12456781,10.6263249 C4.12456781,10.5736783 4.14015128,10.5222096 4.1693544,10.4784049 L7.67108317,5.2258117 C7.75277716,5.10327071 7.91834232,5.07015768 8.0408833,5.15185167 C8.07017725,5.17138097 8.09531403,5.19651775 8.11484333,5.2258117 Z" fill="#81868F"></path>
                </g>
            </g>
        </svg>
    );
}

export default TriangleIcon
