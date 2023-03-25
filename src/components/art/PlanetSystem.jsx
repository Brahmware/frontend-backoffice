import { Card } from '@mui/material'
import React from 'react'
import { colors, transition } from '../../brahmwareTheme/theme'
import FlexCC from '../placements/FlexCC'

const PlanetSystem = ({ trigger, children }) => {
    return (
        <FlexCC zIndex={0}>
            <FlexCC
                zIndex={1}
                position="absolute"
                height={'100vh'}
                width={'100vw'}
                overflow={'hidden'}
                sx={
                    trigger &&
                    {
                        '& .art': {
                            '&.sun': {
                                transform: 'translate(24em, 0)',
                            },

                            '&.earth': {
                                transform: 'translate(8em, 8em) scale(1.5)',
                            },

                            '&.moon': {
                                transform: 'translate(-30em, 2em) scale(1.25)',
                            },
                        }
                    }
                }
            >
                <Card
                    elevation={15}
                    className='art earth'
                    sx={{
                        position: 'absolute',
                        zIndex: 3,
                        background: colors.primary__dark,
                        height: '30em',
                        width: '30em',
                        borderRadius: '50%',
                        transform: 'translate(8em, 8em)',
                        transition: transition(),
                    }}
                />
                <Card
                    elevation={5}
                    className='art moon'
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        background: colors.text__color__dark,
                        height: '10em',
                        width: '10em',
                        borderRadius: '50%',
                        transform: 'translate(-25em, -5em)',
                        transition: transition(),
                    }}
                />
                <FlexCC
                    className='art sun'
                    zIndex={1}
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        transform: 'translate(28em, -3em) scale(0.75)',
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
            </FlexCC>
            <FlexCC zIndex={1}>
                {children}
            </FlexCC>
        </FlexCC>
    )
}

export default PlanetSystem