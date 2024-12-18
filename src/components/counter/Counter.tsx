import React from 'react';

const Counter = () => {
    const [counter, setCounter] = React.useState<number>(0)

    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={() => {
                setCounter(counter - 1)
            }}>-
            </button>
        </div>
    );
};

export default Counter;