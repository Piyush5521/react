import React, { useState } from 'react'
import "./Counter.css"

function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }
    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

  return (
    <div className='containers1'>
        <p>{count}</p>

        <button className="sameBtn" onClick={increment}>+</button>
        <button className="sameBtn" onClick={decrement}>-</button>
        <button className="sameBtn" onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter