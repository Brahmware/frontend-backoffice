import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentDrawerState } from '../Application/drawerState/drawerStateSlice';
import { colors, drawer, transition } from '../brahmwareTheme/theme';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';
import ColumnFlexCS from '../components/placements/ColumnFlexCS';

const DrawerLayout = ({ children }) => {

    const currentDrawerState = useSelector(selectCurrentDrawerState);

    return (
        <Box
            sx={{
                backgroundColor: colors.darker__card,
                gridColumn: selectCurrentDrawerState.drawerOpen ? '1/3' : '1/2',
                width: currentDrawerState.drawerOpen ? drawer.fullDrawerWidth : drawer.drawerClose,
                gridRow: '1/11',
                transition: transition(),
                overflow: 'hidden'
            }}
        >
            <ColumnFlexCC sx={{ justifyContent: 'space-between' }}>
                {children}
            </ColumnFlexCC>
        </Box >
    )
}

export default DrawerLayout