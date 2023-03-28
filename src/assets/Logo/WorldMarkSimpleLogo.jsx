import { Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../brahmwareTheme/theme'
import FlexSC from '../../components/placements/FlexSC'

const WorldMarkSimpleLogo = () => {
    return (
        <FlexSC >
            <Typography
                color='primary'
                variant='h1'
                component='h1'
                fontSize='2em'
                fontWeight='medium'
            >
                Brahm
            </Typography>
            <Typography
                color={colors.text__color}
                variant='h1'
                component='h1'
                fontSize='2em'
                fontWeight='medium'
            >
                ware
            </Typography>
        </FlexSC>
    )
}

export default WorldMarkSimpleLogo