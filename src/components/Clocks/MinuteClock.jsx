import { Typography } from '@mui/material';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import FlexEC from '../placements/FlexEC';
function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    };

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <FlexEC gap={'0.25em'} pb={'2.25em'}>
            <Typography
                fontSize={'1.5em'}
                lineHeight='1em'
            >
                {format(date, 'h:mm')}
            </Typography>
            <Typography
                color='primary'
                fontWeight='bold'
                lineHeight={'1em'}
                sx={{ transform: 'translateY(0.25em)' }}
            >
                {format(date, 'a')}
            </Typography>
        </FlexEC>
    );
}
export default Clock;