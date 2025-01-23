import React from 'react'

function Register(props) {
  return (
        <>
        <h1> {props.isRegistered ? "Login" : "Register"} </h1>
        <form className='form'>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password'/>
            {!props.isRegistered && <input type="password" placeholder='Conform Password' /> }

            <button type='submit'>
                {props.isRegistered ? "Login": "Register"}
            </button>
        </form>
        </>
  )
}

export default Register