import React from 'react';
import { IconButton } from '@mui/material';
import {
    Visibility as VisibilityOnIcon,
    VisibilityOff as VisibilityOff
} from '@mui/icons-material';
import TextFieldWithAction from './TextFieldWithAction';
import WithToolTip from '../TooltipComponent/WithTooltip';
import { colors } from '../../brahmwareTheme/theme';
import ElevatedFilledIconButton from '../Buttons/ElevatedFilledIconButton';

const PasswordField = (props) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <TextFieldWithAction {...props} type={showPassword ? 'text' : 'password'}>
            <WithToolTip
                message={showPassword ? 'Hide Password' : 'Show Password'}
                color={colors.primary}
                textColor={colors.darker__card}
                tooltipPlacement={'right'}
                showChangeState
            >
                <ElevatedFilledIconButton
                    component='button'
                    variant='outlined'
                    color='primary'
                    size='medium'
                    elevation={1}
                    onClick={handleClickShowPassword}
                >
                    {showPassword ? <VisibilityOff /> : <VisibilityOnIcon />}
                </ElevatedFilledIconButton>
            </WithToolTip>
        </TextFieldWithAction>
    )
}

export default PasswordField