import { Card } from '@mui/material'
import React from 'react'
import { colors, transition } from '../../brahmwareTheme/theme'
import addAlpha from '../../utils/addAlpha'
import radialGradientGenerator from '../../utils/radialGradientGenerator'
import FlexCC from '../placements/FlexCC'
import Earth from './Earth'
import Moon from './Moon'
import Sun from './Sun'

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
                                '& .atmosphere': {
                                    opacity: '10%',
                                    transform: 'scale(1.125)'
                                }
                            },

                            '&.moon': {
                                transform: 'translate(-30em, 2em) scale(1.25)',

                                '& .moon_darkness': {
                                    transform: 'rotate(-6deg) translateX(15%)'
                                }
                            },
                        }
                    }
                }
            >
                <Earth initTransform='translate(8em, 8em)'/>
                <Moon initTransform='translate(-25em, -5em)'/>
                <Sun initTransform='translate(28em, -3em) scale(0.75)' />
            </FlexCC>
            <FlexCC zIndex={1}>
                {children}
            </FlexCC>
        </FlexCC>
    )
}

export default PlanetSystem