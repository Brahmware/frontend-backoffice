import { LogoutIcon } from "../../../../assets/icons";
import { colors } from "../../../../brahmwareTheme/theme";
import ThemedButton from "../../../../components/Buttons/ThemedButton";
import useLogout from "../../../../hooks/useLogout";


const SessionLogout = () => {

    const logout = useLogout();

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
            onClick={logout}
        >
            Logout
        </ThemedButton>
    )
}

export default SessionLogout