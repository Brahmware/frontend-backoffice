import { useSelector } from 'react-redux';
import { selectCurrentDrawerState } from '../../../../Application/drawerState/drawerStateSlice';
import MenuItemBox from '../../../../components/Boxes/MenuItemBox';
import TransitionEnabledBox from '../../../../components/Boxes/TransitionEnabledBox';
import SessionAccount from './SessionAccount';
import SessionAvatar from './SessionAvatar';

const DrawerItemSession = () => {

    const { drawerOpen } = useSelector(selectCurrentDrawerState);

    return (
        <MenuItemBox gap='3em' pt='2em'>
            <TransitionEnabledBox sx={{ transform: drawerOpen ? 'translate(0.5em, -1em) scale(1.25)' : 'scale(1)' }}>
                <SessionAvatar />
            </TransitionEnabledBox>
            <TransitionEnabledBox sx={{ transform: !drawerOpen ? 'translateX(-1em)' : 'translate(-2em, -1em)' }}>
                <SessionAccount />
            </TransitionEnabledBox>
        </MenuItemBox>
    )
}

export default DrawerItemSession