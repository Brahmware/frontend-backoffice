import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrentError } from '../../Application/responseState/responseStateSlice';
import FlexCC from '../../components/placements/FlexCC'
import CollapsableError from '../../components/TextFields/CollapsableError';
import { ALT, FETCH_ERROR, SERVER__ERROR } from '../../utils/contants';

const CommonError = () => {

    const currentResponseError = useSelector(selectCurrentError);

    const commonErrorGrowCondition = () => {
        if (currentResponseError?.errorType === FETCH_ERROR) return true;
        if (currentResponseError?.property === ALT) return true;
        if (currentResponseError?.errorType === SERVER__ERROR) return true;
        if (currentResponseError?.errorType) return true;
        return false;
    };

    return (
        <FlexCC
            position='relative'
            mt='-2em'
            sx={{
                transform: 'translateY(0.8em)'
            }}
        >
            {
                commonErrorGrowCondition() &&
                <CollapsableError
                    position='relative'
                    growCondition={commonErrorGrowCondition()}
                >
                    <FlexCC>
                        <Typography fontWeight='medium' color='error' fontSize='0.9em'>
                            {currentResponseError.message}
                        </Typography>
                    </FlexCC>
                </CollapsableError>
            }
        </FlexCC>
    )
}

export default CommonError;