import React, { useEffect, useState } from 'react'
import "./Home.css";

function Home() {

    const [count, setCount] =  useState(0);

    const [color, setColor] = useState("green")

    // use Effect only works when count change not when color change
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount() {
        setCount(count => count +1);
    }

    function removeCount() {
        setCount(count => count - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

  return (
    <div>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={removeCount}>Subtract</button>
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Home



