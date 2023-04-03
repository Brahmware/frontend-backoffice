import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../../Application/auth/authSlice'
import { LogoutIcon } from '../../../../assets/icons'
import { colors } from '../../../../brahmwareTheme/theme'
import ThemedButton from '../../../Buttons/ThemedButton'

const SessionLogout = () => {

    const dispatch = useDispatch();

    const  handleLogoutClick = () => {
        dispatch(logOut())
    };
    
    return (
        <ThemedButton
            loading={false}
            loadingPosition="end"
            color="inherit"
            endIcon={<LogoutIcon height={'0.5em'} width={'0.5em'} />}
            className={'logout__button'}
            sx={{
                padding: 0,
                justifyContent: 'start',
                fontWeight: 'light',
                fontSize: '0.9em',
                backgroundColor: 'transparent !important',
                color: colors.danger,
                '&:hover': {
                    '& #dark': {
                        fill: `${colors.danger} !important`,
                        '& path': {
                            fill: `${colors.danger} !important`
                        }
                    },
                },
            }}
         onClick={handleLogoutClick}
        >
            Logout
        </ThemedButton>
    )
}

export default SessionLogout