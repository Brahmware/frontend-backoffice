import CardColumnFlexCC from '../../../components/cards/CardColumnFlexCC';
import { colors, transition } from '../../../brahmwareTheme/theme';
import DrawerItemSwitch from './DrawerItemSwitch';
import DrawerItemSession from './DrawerItemSession';
import { useSelector } from 'react-redux';
import { selectCurrentDrawerState } from '../../../Application/drawerState/drawerStateSlice';
import ColumnFlexCC from '../../../components/placements/ColumnFlexCC';

const DrawerBottom = () => {

    const { drawerOpen } = useSelector(selectCurrentDrawerState);

    return (
        <ColumnFlexCC
            className='bottom'
            sx={{
                height: 'max-content',
                pb: '1.75em',
                backgroundColor: drawerOpen ? colors.darker__card : colors.body__bg,
                borderRadius: 'unset',
                transition: transition(),
            }}
        >
            <DrawerItemSwitch />
            <DrawerItemSession />
        </ColumnFlexCC>
    )
};

export default DrawerBottom;