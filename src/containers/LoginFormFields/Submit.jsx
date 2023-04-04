import React from 'react'
import { Login  as ForwardIcon } from '@mui/icons-material';
import ArtisticLoadingButton from '../../components/Buttons/ArtisticLoadingButton';

const Submit = ({ isLoading }) => {

    return (
        <ArtisticLoadingButton
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
            Login
        </ArtisticLoadingButton>
    )
}

export default Submit