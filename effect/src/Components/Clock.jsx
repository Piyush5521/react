import React, { useEffect, useState } from 'react'

function Clock() {

    const [timeclock, setTimeClock] = useState(new Date());

    useEffect(() => {
        const interId = setInterval(() => {
            setTimeClock(new Date());
        }, 1000);
        
        return() => {
            clearInterval(interId);
        }
    }, []);

    function forTime() {
        let hours = timeclock.getHours();
        let min = timeclock.getMinutes();
        let sec = timeclock.getSeconds();
        let mem =  hours > 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        
        return `${addZero(hours)} : ${addZero(min)} : ${addZero(sec)} ${addZero(mem)}`;
    }

    function addZero(num) {
        return (num < 10 ? "0" : "") + num;
    }

  return (
    <div>
        <h1>{forTime()}</h1>
    </div>
  )
}

export default Clock