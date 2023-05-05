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
            <TransitionEnabledBox sx={{ transform: drawerOpen ? 'translate(0.5em, -1.25em) scale(1.1)' : 'scale(1)' }}>
                <SessionAvatar />
            </TransitionEnabledBox>
            <TransitionEnabledBox sx={() => drawerOpen ? ({ transform: 'translate(-1.75em, -1em)', opacity: 1 }) : ({ transform: 'translate(1em, 1em)', opacity: 0 })}>
                <SessionAccount />
            </TransitionEnabledBox>
        </MenuItemBox>
    )
}

export default DrawerItemSession