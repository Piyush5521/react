import React from 'react';
import Register from './Register';

const userIsRegistered = false;

function RegisterHome() {

  return (
    <div>
        <div className="container">
            <Register isRegistered={userIsRegistered}/>
        </div>
    </div>
  )
}

export default RegisterHome