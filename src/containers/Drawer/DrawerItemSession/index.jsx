import { useSelector } from 'react-redux';
import { selectCurrentDrawerState } from '../../../Application/drawerState/drawerStateSlice';
import MenuItemBox from '../../../components/Boxes/MenuItemBox';
import TransitionEnabledBox from '../../../components/Boxes/TransitionEnabledBox';
import SessionAccount from './SessionAccount';
import SessionAvatar from './SessionAvatar';

const DrawerItemSession = () => {

    const { drawerOpen } = useSelector(selectCurrentDrawerState);

    return (
        <MenuItemBox gap='3em'>
            <TransitionEnabledBox sx={{ transform: drawerOpen ? 'scale(1.5) translateX(1em)' : 'scale(1)' }}>
                <SessionAvatar />
            </TransitionEnabledBox>
            <TransitionEnabledBox sx={{ transform: !drawerOpen ? 'translateX(-0.75em)' : 'translateX(0em)' }}>
                <SessionAccount />
            </TransitionEnabledBox>
        </MenuItemBox>
    )
}

export default DrawerItemSession