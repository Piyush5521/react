import React, { useState } from 'react'
import "./Home.css"

function Home() {

  const [count, setCount] = useState(0);

  function increase () {
    setCount(count+1);
  }

  function decrease () {
    setCount(count-1);
  }

  return (
    <div>
      <h1>{count}</h1> 
      <button className='incrementBtn' onClick={decrease}>-</button>
      <button className='incrementBtn' onClick={increase}>+</button>

      <br />
      <br /> <br />
      <br /> <br />
      <br />

      <a href="/Time">Time</a>
      <br />
      <a href="/ArrObj">ArrObj</a>
    </div>
  )
}

export default Home