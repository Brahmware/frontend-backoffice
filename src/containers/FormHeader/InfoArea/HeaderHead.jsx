import { Typography } from '@mui/material'
import React from 'react'

const HeaderHead = () => {
    return (
        <div>
            <Typography fontWeight={'thin'} fontSize={'0.75em'} pl='0.125em'>Welcome to</Typography>
            <Typography variant='h6' component='h6' pl='0.125em' fontSize={'1.25em'}>Backoffice</Typography>
        </div>
    )
}

export default HeaderHead