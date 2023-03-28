import React from 'react';
import FlexEE from '../../components/placements/FlexEE';
import InfoArea from './InfoArea';
import NotificationArea from './NotificationArea';

const FormHeader = () => {
    return (
        <FlexEE py={'2em'}>
            <InfoArea />
            <NotificationArea />
        </FlexEE>
    )
};

export default FormHeader;