import React, { useState } from 'react'
import "./Time.css"

function Time() {

    const [currentTime, setCurrentTime] = useState("TIME");

    const [times, setTimes] = useState("TIME");
    const [count, setCount] = useState(0);
    function getTime() {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    function getTime2() {
        let time2 = new Date().toLocaleTimeString();
        setTimes(time2);
    }

    setInterval(getTime, 1000)

    const increase = () => {
        console.log(count);
        setCount(count + 1)
        setCount(count + 1)
        console.log(count);
    }

    let counting = 0;
    function test(){
        counting = counting + 1;
    }


    return (
        <div>

            <h1>{counting}</h1>
            <button className='timeBtn' onClick={test}>Get count</button>
            <h1>{currentTime}</h1>
            <br />
            <h1>{times}</h1>
            <button className='timeBtn' onClick={getTime2}>Get Time</button>
            <h1>{count}</h1>
            <button className='timeBtn' onClick={increase}>count</button>
        </div>
    )
}

export default Time