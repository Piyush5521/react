import React, {useContext} from 'react'
import ComponentD from './ComponentD'
import { UserContext } from './ComponentA'

function ComponentC() {

    const user = useContext(UserContext)

  return (
    <div className='box box3'>
        <h1>ComponentC</h1>
        <h2>{`Heyyy.... ${user}`}</h2>
        
        <ComponentD/>
    </div>
  )
}

export default ComponentC