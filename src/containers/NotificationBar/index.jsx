import { Box } from '@mui/material';
import { colors } from '../../brahmwareTheme/theme';
import Left from './Left';
import Center from './Center';
import Right from './Right';

const NotificationBar = () => {
    return (
        <Box
            gridColumn='1/6'
            gridRow='1/2'
            bgcolor={colors.black}
            display='grid'
            gridTemplateColumns='1em repeat(5, 1fr) 1em'
            justifyContent='center'
            alignItems='center'
        >
            <Left />
            <Center />
            <Right />
        </Box>
    )
};

export default NotificationBar;