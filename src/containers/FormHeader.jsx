import { Typography } from '@mui/material';
import React from 'react';
import ColumnFlexSC from '../components/placements/ColumnFlexSC';
import FlexEE from '../components/placements/FlexEE';
import MinuteClock from '../components/Clocks/MinuteClock';

const FormHeader = () => {
    return (
        <FlexEE>
            <ColumnFlexSC pb={'2em'}>
                <Typography fontWeight={'thin'} fontSize={'0.75em'} pl='0.125em'>Welcome to</Typography>
                <Typography color='primary' variant='h3' component='h3' fontSize={'2em'} fontWeight='medium'>Brahmware</Typography>
                <Typography variant='h6' component='h6' pl='0.125em' fontSize={'1.25em'}>Backoffice</Typography>
            </ColumnFlexSC>
            <MinuteClock />
        </FlexEE>
    )
};

export default FormHeader;