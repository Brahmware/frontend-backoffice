import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { colors, shadows, transition } from '../../../brahmwareTheme/theme';
import { MissionControlLogoFull, SeedOfLifeIcon } from '../../../assets/icons';
import MenuItemBox from '../../../components/Boxes/MenuItemBox';
import { selectCurrentDrawerState } from '../../../Application/drawerState/drawerStateSlice';
import addAlpha from '../../../utils/addAlpha';

const DrawerTop = () => {

    const { drawerOpen } = useSelector(selectCurrentDrawerState);

    return (
        <MenuItemBox
            to='/'
            component={Link}
            gap='1em'
            px='0.74em'
            py='0.74em'
            backgroundColor={drawerOpen ? colors.darker__card : addAlpha(colors.darker__card, 0)}
            boxShadow={drawerOpen ? shadows.defaultLayer_2 : null}
            sx={{ transition: transition() }}
        >
            <SeedOfLifeIcon height={'3.5em'} />
            <MissionControlLogoFull height={'2.125em'} />
        </MenuItemBox>
    )
};

export default DrawerTop;