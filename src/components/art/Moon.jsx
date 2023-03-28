import { Card } from '@mui/material'
import React from 'react'
import { colors, transition } from '../../brahmwareTheme/theme'
import addAlpha from '../../utils/addAlpha'
import linearGradientGenerator from '../../utils/linearGradientGenerator'
import FlexCC from '../placements/FlexCC'

const Moon = ({ initTransform }) => {
    return (
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
                transform: initTransform,
                transition: transition(),
            }}
        >
            <FlexCC sx={{ transform: 'scale(1.25) translateX(-5%)', position: 'relative' }}>
                <FlexCC className='moon_darkness' sx={{ transition: transition() }}>
                    <FlexCC
                        sx={{
                            position: 'absolute',
                            background: colors.black,
                            opacity: '0.8',
                            zIndex: 1,
                            transform: 'rotate(5deg) translateX(-45%)',
                            transition: transition()
                        }}
                    />
                    <FlexCC
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            background: /* linearGradientGenerator(colors.black, addAlpha(colors.black, 0)) */ colors.black,
                            opacity: '0.5',
                            transform: 'rotate(5deg) translateX(-43%)',
                            transition: transition()
                        }}
                    />
                    <FlexCC
                        sx={{
                            position: 'absolute',
                            zIndex: 3,
                            background: /* linearGradientGenerator(colors.black, addAlpha(colors.black, 0)) */ colors.black,
                            opacity: '0.35',
                            transform: 'rotate(5deg) translateX(-40%)',
                            transition: transition()
                        }}
                    />
                    <FlexCC
                        sx={{
                            position: 'absolute',
                            zIndex: 4,
                            background: /* linearGradientGenerator(colors.black, addAlpha(colors.black, 0)) */ colors.black,
                            opacity: '0.2',
                            transform: 'rotate(5deg) translateX(-36%)',
                            transition: transition()
                        }}
                    />
                    <FlexCC

                        sx={{
                            position: 'absolute',
                            zIndex: 5,
                            background: /* linearGradientGenerator(colors.black, addAlpha(colors.black, 0)) */ colors.black,
                            opacity: '0.1',
                            transform: 'rotate(5deg) translateX(-28%)',
                            transition: transition()
                        }}
                    />
                </FlexCC>
            </FlexCC>
        </Card>
    )
}

export default Moon