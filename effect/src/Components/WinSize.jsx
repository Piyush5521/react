import React, { useEffect, useState } from 'react'

function WinSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);
  

    function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

  return (
    <div>
        <h2>Yo!</h2>
        <br />
        <p>Window Width: {width} px</p>
        <p>Window Height: {height} px</p>
    </div>
  )
}

export default WinSize