import React from 'react'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <div className='box box2'>
            <h1>Component B</h1>
        <ComponentC/>
    </div>
  )
}

export default ComponentB