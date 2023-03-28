import { Typography } from '@mui/material'
import React from 'react'
import ColumnFlexSC from '../../../components/placements/ColumnFlexSC'
import ActionArea from './ActionArea'
import HeaderHead from './HeaderHead'

const InfoArea = () => {
    return (
        <ColumnFlexSC gap={'1em'}>
            <HeaderHead />
            <ActionArea />
        </ColumnFlexSC>
    )
}

export default InfoArea