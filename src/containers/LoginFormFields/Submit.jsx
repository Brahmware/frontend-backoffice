import React from 'react'
import { useLoginMutation } from '../../Application/auth/authApiSlice';
import ThemedLoadingButton from '../../components/Buttons/ThemedLoadingButton'
import { ArrowForwardRounded as ForwardIcon } from '@mui/icons-material';

const Submit = () => {

    const [_login, { isLoading }] = useLoginMutation();

    return (
        <ThemedLoadingButton
            variant={isLoading ? 'outlined' : 'contained'}
            size="medium"
            fullWidth={true}
            loading={isLoading}
            loadingPosition='end'
            endIcon={<ForwardIcon />}
            disableElevation
            color='primary'
            type='submit'
            sx={{ width: '8em' }}
        >
            Submit
        </ThemedLoadingButton>
    )
}

export default Submit