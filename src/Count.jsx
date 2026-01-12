import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>count= {count}</h1>
            <button style={{ color: "green" }} onClick={() => (setCount(count + 1))}> Increment </button>
            <button style={{ color: "red" }} onClick={() => (setCount(count - 1))}> Deccrement </button>
            <h1>count= {count}</h1>
        </>

    )
}

export default Count