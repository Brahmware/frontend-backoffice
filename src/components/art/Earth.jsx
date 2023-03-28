import { Card } from '@mui/material'
import React from 'react'
import { colors, transition } from '../../brahmwareTheme/theme'
import addAlpha from '../../utils/addAlpha'
import radialGradientGenerator from '../../utils/radialGradientGenerator'
import FlexCC from '../placements/FlexCC'

const Earth = ({ initTransform }) => {
    return (
        <FlexCC
            className='art earth'
            sx={{
                position: 'absolute',
                zIndex: 3,
                transform: initTransform,
                transition: transition(),
            }}
        >
            <Card
                elevation={4}
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    background: colors.primary__dark,
                    height: '24em',
                    width: '24em',
                    borderRadius: '50%',
                }}
            />
            <Card
                elevation={4}
                className='atmosphere'
                sx={{
                    position: 'absolute',
                    background: colors.primary,
                    opacity: '5%',
                    height: '26em',
                    width: '26em',
                    borderRadius: '50%',
                    zIndex: 1,
                    transition: transition()
                }}
            />
        </FlexCC>
    )
}

export default Earth