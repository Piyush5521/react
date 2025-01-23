import React from 'react'
import Input from './Input'

function Form() {
  return (
    <div>
         <form className="form">
            <Input 
                type="text"
                placeholder="username"
            />
            <Input
                type="password"
                placeholder="password"
            />
            <button type="submit">Login</button>
         </form>
    </div>
  )
}

export default Form