import { Box, styled } from '@mui/material';
import { transition } from '../../brahmwareTheme/theme';

const TransitionEnabledBox = styled(Box)({
    transition: transition(),
});

export default TransitionEnabledBox;