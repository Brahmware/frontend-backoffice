import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentDrawerState } from '../Application/drawerState/drawerStateSlice';
import { backgroundDesigns, colors, drawer, shadows, transition } from '../brahmwareTheme/theme';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';

const DrawerLayout = ({ children }) => {

    const { drawerOpen } = useSelector(selectCurrentDrawerState);

    return (
        <Box
            className='noselect'
            sx={{
                backgroundColor: backgroundDesigns.bark,
                width: drawerOpen ? drawer.fullDrawerWidth : drawer.drawerClose,
                transition: transition(),
                overflow: 'hidden',
                position: 'relative',
                height: '100%',

                '&:before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: '-5%',
                    height: '110%',
                    width: '110%',
                    boxShadow: shadows.defaultLayer_1,
                    transition: transition(),
                    opacity: drawerOpen ? 1 : 0,
                }
            }}
        >
            <ColumnFlexCC
                sx={{
                    minWidth: drawer.fullDrawerWidth,
                    alignItems: 'start',
                    justifyContent: 'space-between',
                }}
            >
                {children}
            </ColumnFlexCC>
        </Box >
    )
}

export default DrawerLayout