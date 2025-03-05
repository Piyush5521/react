import { Button } from '@mui/material'
import React from 'react'

const MuiButton = (props) => {
  return (
    <div>
        <Button 
          variant='contained'
          style={{outline:'none'}}
        >{props.btnText}</Button>
    </div>
  )
}

export default MuiButton