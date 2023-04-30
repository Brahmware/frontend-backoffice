import { Box, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentDrawerState } from '../Application/drawerState/drawerStateSlice'
import { backgroundDesigns, colors, drawer, shadows, transition } from '../brahmwareTheme/theme'
import FlexSC from '../components/placements/FlexSC'
import Drawer from '../containers/Drawer'
import NotificationBar from '../containers/NotificationBar'
import FullScreenProvider from '../features/providers/FullScreenProvider'
import TouchActionProvider from '../features/providers/TouchActionProvider'

export const ApplicationDisplayLayout = styled(Box)({
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridTemplateRows: '3em repeat(5, 1fr)',
    justify: 'center',
    align: 'center',
    backgroundColor: backgroundDesigns.infiniteL
});

const ApplicationLayout = ({ children }) => {

    const { drawerOpen } = useSelector(selectCurrentDrawerState);

    return (
        <TouchActionProvider>
            <FullScreenProvider>
                <FlexSC>
                    <Drawer />
                    <Box
                        sx={{
                            backgroundColor: colors.darker__card,
                            width: drawerOpen ?
                                `calc(100vw - ${drawer.fullDrawerWidth})` :
                                `calc(100vw - ${drawer.drawerClose})`
                            ,
                            transition: transition(),
                            overflow: 'hidden',
                            position: 'relative',
                            height: '100%',

                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '-5%',
                                height: '110%',
                                width: 'unset',
                                boxShadow: shadows.defaultLayer_2,
                                transition: transition(),
                                opacity: !drawerOpen ? 1 : 0,
                                pointerEvents: 'none',
                            }
                        }}
                    >
                        <ApplicationDisplayLayout>
                            <NotificationBar />
                            <Box gridColumn='1/6' gridRow='2/7'>
                                {children}
                            </Box>
                        </ApplicationDisplayLayout>
                    </Box>
                </FlexSC>
            </FullScreenProvider>
        </TouchActionProvider>
    )
}

export default ApplicationLayout