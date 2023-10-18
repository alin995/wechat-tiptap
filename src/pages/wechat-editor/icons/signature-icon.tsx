import React from "react";

const SignatureIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path d="M5.69 12.685c1-.73 1.719-.21 1.751.675.032.886-.946 1.766-2.069 2.866-1.122 1.1-2.117 3.19-1.837 3.623.28.433.85-.017 2.088-.93 1.238-.912 2.557-1.77 3.254-1.538.696.232.529 1.061.136 1.974-.392.912-.892 1.472-.699 1.707.044.053.277-.021.534-.11l.26-.09c.257-.085.484-.147.517-.072.078.175-1.04.767-1.449.767-.409 0-.625-.212-.528-.728.04-.215.187-.563.353-.93l.203-.443c.166-.364.317-.702.364-.9.112-.473-.388-.373-.657-.114-.268.26-2.704 2.325-3.428 2.765-.724.44-1.611.478-2.029-.057-.417-.534-.685-1.153-.175-2.967.51-1.815 2.413-4.768 3.412-5.498zm9.475-7.736a1.742 1.742 0 012.5-.835l3.598 2.133a1.742 1.742 0 01.515 2.531l-3.132 4.26a1.044 1.044 0 01-1.373.28l.022.012-1.096 3.248-5.042 3.954a.419.419 0 01-.673-.389l.907-6.34 2.296-2.611-.103-.062a1.044 1.044 0 01-.472-1.184l.04-.112zm-.406 6.918l-2.183 2.48-.562 3.923 3.12-2.445 1.056-3.132-1.431-.826zm2.205-6.71a.492.492 0 00-.643.268l-1.946 4.721 3.375 2.001 3.02-4.11.028-.04a.492.492 0 00-.173-.674l-3.598-2.134z" fill="#444D5B"></path>
            </g>
        </svg>
    );
}

export default SignatureIcon