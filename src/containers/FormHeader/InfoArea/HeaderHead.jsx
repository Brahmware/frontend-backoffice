import { Typography } from '@mui/material'
import React from 'react'
import FlexCC from '../../../components/placements/FlexCC'

const HeaderHead = () => {
    return (
        <div>
            <Typography
                fontWeight={'thin'}
                fontSize={'0.75em'}
                pl='0.33em'
            >
                Welcome to
            </Typography>
            <FlexCC>
                <Typography
                    pl='0.125em'
                    fontSize='1.25em'
                    fontWeight='bold'
                >
                    Back
                </Typography>
                <Typography
                    pl='0.125em'
                    color='primary'
                    fontSize='1.25em'
                    fontWeight='1000'
                >
                    Office
                </Typography>
            </FlexCC>
        </div>
    )
}

export default HeaderHead