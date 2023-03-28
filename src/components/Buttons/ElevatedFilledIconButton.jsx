import { Card, IconButton } from '@mui/material';
import React from 'react'

const ElevatedFilledIconButton = ({ elevation, children, ...buttonProps }) => {
    return (
        <Card
            elevation={elevation}
            sx={{ borderRadius: '50%' }}
        >
            <IconButton {...buttonProps}>
                {children}
            </IconButton>
        </Card>
    )
}

export default ElevatedFilledIconButton;