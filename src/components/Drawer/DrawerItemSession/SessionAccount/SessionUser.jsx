import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../../Application/auth/authSlice'

const SessionUser = () => {

    const currentUser = useSelector(selectCurrentUser);

    return (
        <Typography variant='h6' component='h6'>
            {currentUser}
        </Typography>
    )
}

export default SessionUser