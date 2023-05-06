import React from 'react';
import FlexCC from '../../components/placements/FlexCC';
import ElevatedFilledIconButton from '../../components/Buttons/ElevatedFilledIconButton';
import WithToolTip from '../../components/TooltipComponent/WithTooltip';
import { colors } from '../../brahmwareTheme/theme';
import {
    FullscreenRounded as EnterFullScreenIcon,
    FullscreenExitRounded as ExitFullScreenIcon
} from '@mui/icons-material';
import { Box } from '@mui/system';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { styled } from '@mui/material';

const StyledFullScreen = styled(FullScreen)({
    height: '100%',
    width: '100%'
})

const FullScreenProvider = ({ children }) => {

    const handle = useFullScreenHandle();

    return (
        <StyledFullScreen handle={handle} >
            <FlexCC>
                {children}
                <Box position='absolute' bottom={'4em'} right={'4em'}>
                    <WithToolTip
                        showChangeState={true}
                        message={
                            !handle.active ?
                                'Go Fullscreen' :
                                'Exit Fullscreen'
                        }
                        color={colors.primary}
                        textColor={colors.darker__card}
                        tooltipPlacement={'left'}
                    >
                        <ElevatedFilledIconButton
                            variant='outlined'
                            color='primary'
                            size='medium'
                            elevation={7}
                            onClick={() => {
                                !handle.active ?
                                    handle.enter() :
                                    handle.exit()
                            }}
                        >
                            {
                                !handle.active ?
                                    <EnterFullScreenIcon /> :
                                    <ExitFullScreenIcon />
                            }
                        </ElevatedFilledIconButton>
                    </WithToolTip>
                </Box>
            </FlexCC>
        </StyledFullScreen>
    )
}

export default FullScreenProvider