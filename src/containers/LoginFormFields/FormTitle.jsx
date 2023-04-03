import { Typography } from '@mui/material'
import React from 'react'
import { BrahmNautIcon } from '../../assets/icons'
import { colors } from '../../brahmwareTheme/theme'
import FlexSC from '../../components/placements/FlexSC'

const FormTitle = () => {
    return (
        <FlexSC gap={'0.5em'}>
            <BrahmNautIcon height={'2em'} width={'2em'} fill={colors.text__color} />
            <Typography variant='h4' fontWeight={'bold'}>Login</Typography>
        </FlexSC>
    )
}

export default FormTitle