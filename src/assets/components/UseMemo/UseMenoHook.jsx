import React, { useMemo, useState } from 'react';

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    // Memoize the incremented value of count
    const incrementedCount = useMemo(() => {
        return count + 1;
    }, [count]);

    const handleCounterClick = () => {
        // Update count when the button is clicked
        setCount(count + 1);
    };

    return (
        <div>
            <button className='btn btn-danger' onClick={handleCounterClick}>Counter</button>
            <h6>My new number: {incrementedCount}</h6>
            <button className='btn btn-primary' onClick={() => setShow(!show)}>
                {show ? "You Clicked me" : "Plz click me"}
            </button>
        </div>
    );
};

export default UseMemoHook;
