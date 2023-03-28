import { Card } from '@mui/material';
import React from 'react'
import ThemedButton from './ThemedButton';

const ElevatedFilledThemedButton = ({ elevation, children, ...buttonProps }) => {
    return (
        <Card
            elevation={elevation}
            sx={{ borderRadius: '2em' }}
        >
            <ThemedButton {...buttonProps}>
                {children}
            </ThemedButton>
        </Card>
    )
}

export default ElevatedFilledThemedButton;