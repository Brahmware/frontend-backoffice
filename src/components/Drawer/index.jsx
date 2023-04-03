import { Box, Divider } from '@mui/material';
import { LogoutIcon } from '../../assets/icons';
import { colors } from '../../brahmwareTheme/theme';
import DrawerLayout from '../../layout/DrawerLayout';
import ThemedButton from '../Buttons/ThemedButton';
import ColumnFlexCC from '../placements/ColumnFlexCC';
import FlexCC from '../placements/FlexCC';
import DrawerItemSession from './DrawerItemSession';
import DrawerItemSwitch from './DrawerItemSwitch';

const Drawer = () => (
    <DrawerLayout>
        <ColumnFlexCC sx={{ justifyContent: 'space-between' }}>
            <Box className='top'>
                Hi
            </Box>
            <ColumnFlexCC className='bottom' sx={{ height: 'max-content' }}>
                <Divider flexItem orientation='horizontal' />
                <ColumnFlexCC
                    className='bottom'
                    sx={{
                        height: 'max-content',
                        py: '1.5em',
                        gap: '1em'
                    }}
                >
                    <DrawerItemSwitch />
                    <DrawerItemSession />
                </ColumnFlexCC>
            </ColumnFlexCC>
        </ColumnFlexCC>

    </DrawerLayout>
);


export default Drawer;