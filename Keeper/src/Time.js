import React from 'react'

function Time() {
 const currentTime = new Date(2025, 1, 20, 13).getHours()
    return (
    <div> 
        {currentTime > 12 ? <h1>Why are you still working</h1> : null}
    </div>
  )
}

export default Time;