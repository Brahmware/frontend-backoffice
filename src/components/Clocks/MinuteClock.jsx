import { Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';
import FlexCC from '../placements/FlexCC';
import { colors, transition } from '../../brahmwareTheme/theme';
import addAlpha from '../../utils/addAlpha';
import ColumnFlexCC from '../placements/ColumnFlexCC';

const Clock = ({ fontSize, full }) => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    };

    useEffect(() => {
        const timerId = setInterval(refreshClock, 500);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <FlexCC
            gap='1em'
            className='noselect'
            sx={{
                justifyContent: 'space-between',
                width: 'max-content'
            }}
        >
            {
                full &&
                <FlexCC fontSize='0.85em' sx={{ width: 'max-content' }}>
                    <Typography
                        fontSize={fontSize || '1.5em'}
                        lineHeight='1em'
                        pr='0.25em'
                        pl='0.25em'
                        fontWeight='400'
                    >
                        {format(date, 'EEEE')},
                    </Typography>
                    <Typography
                        color='primary'
                        fontSize={fontSize || '1.5em'}
                        lineHeight='1em'
                        fontWeight='300'
                        pr='0.25em'
                        pl='0.25em'
                    >
                        {format(date, 'LLL')}
                    </Typography>
                    <Typography
                        color='primary'
                        fontSize={fontSize || '1.5em'}
                        lineHeight='1em'
                        fontWeight='400'
                    >
                        {format(date, 'd')}
                    </Typography>
                </FlexCC>
            }
            <FlexCC gap={'0.25em'} p='0.25em' sx={{ width: 'max-content', transition: transition() }}>
                <Typography
                    fontSize={fontSize || '1.5em'}
                    lineHeight='1em'
                    sx={{ transition: transition() }}
                >
                    {format(date, 'h')}
                </Typography>

                <ColumnFlexCC gap='0.1em' sx={{ width: 'max-content' }}>
                    <Box
                        width='0.4em'
                        height='0.4em'
                        borderRadius='50%'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        sx={{ backgroundColor: addAlpha(colors.danger, 0.25) }}
                    >
                        <Box
                            width='0.2em'
                            height='0.2em'
                            borderRadius='50%'
                            sx={{
                                animation: 'pulse 1s infinite ease-in-out alternate',
                                backgroundColor: colors.danger,
                                '@keyframes pulse': {
                                    from: {
                                        transform: 'scale(1)'
                                    },
                                    to: {
                                        transform: 'scale(1.125)'
                                    }
                                }
                            }}
                        />
                    </Box>
                    <Box
                        width='0.4em'
                        height='0.4em'
                        borderRadius='50%'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        sx={{ backgroundColor: addAlpha(colors.danger, 0.25) }}
                    >
                        <Box
                            width='0.2em'
                            height='0.2em'
                            borderRadius='50%'
                            sx={{
                                animation: 'pulse 1s infinite ease-in-out alternate',
                                backgroundColor: colors.danger,
                                '@keyframes pulse': {
                                    from: {
                                        transform: 'scale(1)'
                                    },
                                    to: {
                                        transform: 'scale(1.5)'
                                    }
                                }
                            }}
                        />
                    </Box>
                </ColumnFlexCC>
                <Typography
                    fontSize={fontSize || '1.5em'}
                    lineHeight='1em'
                    sx={{ transition: transition() }}
                >
                    {format(date, 'mm')}
                </Typography>
                <Typography
                    color='primary'
                    fontWeight='400'
                    fontSize={fontSize ? `calc(${fontSize} * 0.75)` : '1em'}
                    lineHeight={'1em'}
                    sx={{ transform: `translateY(calc(${fontSize} * 0.125))`, transition: transition() }}
                >
                    {format(date, 'a')}
                </Typography>
            </FlexCC>
        </FlexCC>
    );
}
export default Clock;