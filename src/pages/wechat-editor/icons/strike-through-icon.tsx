import React from "react";

const StrikeThroughIcon = ({className}: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.434 10.657c.041.047.084.092.128.136h2.881l-.072-.032-.044-.02c-.463-.207-.822-.368-1.097-.548a2.473 2.473 0 01-.747-.682A1.709 1.709 0 019.16 8.48a1.885 1.885 0 01.707-1.528 2.855 2.855 0 011.848-.609 4.154 4.154 0 013.028 1.29l.808-.97A5.244 5.244 0 0011.715 5a4.598 4.598 0 00-2.02.454 3.591 3.591 0 00-1.504 1.25 3.316 3.316 0 00-.515 1.816 2.972 2.972 0 00.758 2.137zM13.088 13.25H5V12h14v1.25h-3.522c.373.577.555 1.264.517 1.96a3.58 3.58 0 01-.545 1.94 3.71 3.71 0 01-1.545 1.353 5.26 5.26 0 01-2.342.496 6.022 6.022 0 01-2.544-.537A6.245 6.245 0 017 16.986l.909-1.033c.472.53 1.042.962 1.675 1.27.631.307 1.321.466 2.02.465a3.289 3.289 0 002.13-.64 2.317 2.317 0 00.504-2.84 2.132 2.132 0 00-.726-.722c-.14-.081-.281-.16-.424-.236z" fill="#454D5A"></path>
        </svg>
    );
}

export default StrikeThroughIcon
