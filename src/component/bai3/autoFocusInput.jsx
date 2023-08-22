import React, { useEffect, useRef } from 'react';

const AutoFocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Đặt focus vào input sau khi component đã render
        inputRef.current.focus();
    }, []);

    return (
        <div >
            <h2>Auto Focus Input</h2>
            <input type="text" ref={inputRef} />
        </div>
    );
};

export default AutoFocusInput;