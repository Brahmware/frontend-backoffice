import { Card } from '@mui/material'
import React from 'react'
import { colors, transition } from '../../brahmwareTheme/theme'
import FlexCC from '../placements/FlexCC'

const Sun = ({initTransform}) => {
    return (
        <FlexCC
            className='art sun'
            sx={{
                position: 'absolute',
                zIndex: 1,
                transform: initTransform,
                transition: transition(),
            }}
        >
            <Card
                elevation={4}
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    background: colors.warning,
                    opacity: '10%',
                    height: '23.5em',
                    width: '23.5em',
                    borderRadius: '50%',
                }}
            />
            <Card
                elevation={4}
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    background: colors.warning,
                    opacity: '10%',
                    height: '22em',
                    width: '22em',
                    borderRadius: '50%',
                }}
            />
            <Card
                elevation={4}
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    background: colors.warning,
                    opacity: '10%',
                    height: '20em',
                    width: '20em',
                    borderRadius: '50%',
                }}
            />
            <Card
                elevation={0}
                sx={{
                    position: 'absolute',
                    zIndex: 1,
                    background: colors.warning,
                    height: '16em',
                    width: '16em',
                    borderRadius: '50%',
                }}
            />
        </FlexCC>
    )
}

export default Sun