import { Divider } from '@mui/material';
import MenuItemBox from '../../../components/Boxes/MenuItemBox';
import FlexSC from '../../../components/placements/FlexSC';
import SessionAccount from './SessionAccount';
import SessionAvatar from './SessionAvatar';

const DrawerItemSession = () => {
    return (
        <MenuItemBox>
            <SessionAvatar />
            <FlexSC gap='0.5em'>
                <Divider orientation='vertical' flexItem />
                <SessionAccount />
            </FlexSC>
        </MenuItemBox>
    )
}

export default DrawerItemSession