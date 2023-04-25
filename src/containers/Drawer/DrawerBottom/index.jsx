import CardColumnFlexCC from '../../../components/cards/CardColumnFlexCC';
import { colors } from '../../../brahmwareTheme/theme';
import DrawerItemSwitch from './DrawerItemSwitch';
import DrawerItemSession from './DrawerItemSession';

const DrawerBottom = () => {
    return (
        <CardColumnFlexCC
            elevation={1}
            className='bottom'
            sx={{
                height: 'max-content',
                pb: '1.75em',
                backgroundColor: colors.darker__card,
                borderRadius: 'unset'
            }}
        >
            <DrawerItemSwitch />
            <DrawerItemSession />
        </CardColumnFlexCC>
    )
};

export default DrawerBottom;