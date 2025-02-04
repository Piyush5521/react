import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>

            <Typography variant='h1' gutterBottom>
                H1 Heading
            </Typography>

            <Typography variant='h2'>
                H2 Heading
            </Typography>

            <Typography variant='h3'>
                H3 Heading
            </Typography>

            <Typography variant='h4' component='h1' gutterBottom>
                H4 Heading
            </Typography>
            <Typography variant='h5'>
                H5 Heading
            </Typography>
            <Typography variant='h6'>
                H6 Heading
            </Typography>

            <Typography variant='subtitle1'>
                subtitle 1 Heading
            </Typography>
            <Typography variant='subtitle2'>
                subtitle 2 Heading
            </Typography>

            <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti omnis corporis rerum a voluptates voluptatem ipsum odio quam est recusandae, provident in doloremque, fuga repellat. Officia quibusdam in quo!
            </Typography>

            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti omnis corporis rerum a voluptates voluptatem ipsum odio quam est recusandae, provident in doloremque, fuga repellat. Officia quibusdam in quo!
            </Typography>
    </div>
  )
}
