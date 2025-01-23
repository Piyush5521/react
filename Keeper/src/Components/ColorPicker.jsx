import React, { useState } from 'react'
import "./ColorPicker.css"

function ColorPicker() {
    const [color, setColor] = useState("#fab7cd");

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }


  return (
    <div className='cont'>
        <h1 style={{color:color, textShadow:'5px 5px rgb(0, 0, 0, 0.7)'}}>Color Picker</h1>
        
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <div className="selectBox">
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    </div>
  )
}

export default ColorPicker