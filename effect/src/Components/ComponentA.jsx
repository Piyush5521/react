import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'
import "./ComponentA.css"

export const UserContext = createContext();

function ComponentA() {

   const [user, setUser] = useState("ME");


  return (
    <>
        <div className='box box1'>
           <h1>Component A </h1>
            <h2>{`Hii ${user}`}</h2>       
            <UserContext.Provider value={user}>  
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>

        <div className="sidebar">
            Prop Drilling
        </div>
    </>
  )
}

export default ComponentA