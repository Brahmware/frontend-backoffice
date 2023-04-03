import { Avatar } from '@mui/material';
import LoadingIconButton from '../../Buttons/LoadingIconButton';
import { colors, transition, scales } from '../../../brahmwareTheme/theme';
import { Link } from 'react-router-dom';

const SessionAvatar = () => {
    return (
        <LoadingIconButton
            className='first-item'
            component={Link}
            to={`/account`}
            color='primary'
            sx={{
                backgroundColor: 'transparent !important',
                '& .icon__avatar': {
                    outline: `1px solid ${colors.muted}`,
                    transition: transition('fast'),
                },
                
                '&:hover': {
                    '& .icon__avatar': {
                        outline: `2px solid ${colors.primary}`,
                        transform: `scale(${scales.small})`,
                    },
                },
            }}
        >
            <Avatar
                className={"icon__avatar"}
                alt="Cindy Baker"
                sx={{
                    width: 42,
                    height: 42,
                }}
                src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
        </LoadingIconButton >
    )
}

export default SessionAvatar