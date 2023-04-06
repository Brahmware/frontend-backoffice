import { Box, Typography } from '@mui/material';
import React from 'react'
import { useFullScreenHandle } from 'react-full-screen';
import FullWidthBox from '../../components/Boxes/FullWidthBox'
import Clock from '../../components/Clocks/MinuteClock';
import FlexCC from '../../components/placements/FlexCC';

const NotificationBar = () => {
    const handle = useFullScreenHandle();
    return (
        <FullWidthBox height='1.5em' bgcolor='darkgreen'>
            <FlexCC sx={{ justifyContent: 'space-between' }}>
                <Box width='0' position='relative'>
                    <FlexCC position='absolute'>
                        <Typography>Left</Typography>
                    </FlexCC>
                </Box>
                <Box width='0' position='relative'>
                    <FlexCC position='absolute'>
                        {!handle.active && <Clock />}
                    </FlexCC>
                </Box>
                <Box width='0' position='relative'>
                    <FlexCC position='absolute'>
                        <Typography>Notification</Typography>
                    </FlexCC>
                </Box>
            </FlexCC>
        </FullWidthBox>
    )
}

export default NotificationBar