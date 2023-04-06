import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentDrawerState } from '../Application/drawerState/drawerStateSlice'
import { colors, drawer, transition } from '../brahmwareTheme/theme'
import ColumnFlexCC from '../components/placements/ColumnFlexCC'
import FlexSC from '../components/placements/FlexSC'
import Drawer from '../containers/Drawer'
import NotificationBar from '../containers/NotificationBar'
import FullScreenProvider from '../features/providers/FullScreenProvider'
import TouchActionProvider from '../features/providers/TouchActionProvider'
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
                            height: '100%'
                        }}
                    >
                        <ColumnFlexCC>
                            <NotificationBar />
                            {children}
                        </ColumnFlexCC>
                    </Box>
                </FlexSC>
            </FullScreenProvider>
        </TouchActionProvider>
    )
}

export default ApplicationLayout