import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentDrawerState } from '../Application/drawerState/drawerStateSlice';
import { colors, drawer, transition } from '../brahmwareTheme/theme';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';

const DrawerLayout = ({ children }) => {

    const { drawerOpen } = useSelector(selectCurrentDrawerState);

    return (
        <Box
            className='noselect'
            sx={{
                backgroundColor: colors.darker__card,
                gridColumn: drawerOpen ? '1/3' : '1/2',
                width: drawerOpen ? drawer.fullDrawerWidth : drawer.drawerClose,
                gridRow: '1/11',
                transition: transition(),
                overflow: 'hidden',
                position: 'relative',

                '&:before': {
                    content: '""',
                    position: 'absolute',
                    right: 0,
                    top: '-5%',
                    height: '110%',
                    width: '110%',
                    boxShadow: `inset 0px 0px 3px 3px ${colors.black}`,
                    transition: transition(),
                    opacity: drawerOpen ? 1 : 0,
                }
            }}
        >
            <ColumnFlexCC sx={{ justifyContent: 'space-between' }}>
                {children}
            </ColumnFlexCC>
        </Box >
    )
}

export default DrawerLayout