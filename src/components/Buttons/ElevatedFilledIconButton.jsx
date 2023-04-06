import { Card, IconButton } from '@mui/material';
import React from 'react'

const ElevatedFilledIconButton = ({ elevation, sx, children, ...buttonProps }) => {
    return (
        <Card
            elevation={elevation}
            sx={{ borderRadius: '50%', ...sx }}
        >
            <IconButton {...buttonProps}>
                {children}
            </IconButton>
        </Card>
    )
}

export default ElevatedFilledIconButton;