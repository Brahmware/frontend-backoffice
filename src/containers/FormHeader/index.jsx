import React from 'react';
import FlexEE from '../../components/placements/FlexEE';
import InfoArea from './InfoArea';
import NotificationArea from './NotificationArea';

const FormHeader = () => {
    return (
        <FlexEE pt='2em' pb='1.25em'>
            <InfoArea />
            <NotificationArea />
        </FlexEE>
    )
};

export default FormHeader;