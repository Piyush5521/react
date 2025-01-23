import React from 'react'

function Button() {
    const handleClick = (e) => e.target.textContent ="OUCH!"; 

  return (
    <div style={{marginTop:'1rem', textAlign:'center'}}>
        <button onDoubleClick={(e) => handleClick(e)}>Click Me </button>
    </div>
  )
}

export default Button