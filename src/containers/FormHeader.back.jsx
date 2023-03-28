import { Typography } from '@mui/material';
import React from 'react';
import ColumnFlexSC from '../components/placements/ColumnFlexSC';
import FlexEE from '../components/placements/FlexEE';
import MinuteClock from '../components/Clocks/MinuteClock';
import FlexCS from '../components/placements/FlexCS';
import WithToolTip from '../components/TooltipComponent/WithTooltip';
import ElevatedFilledThemedButton from '../components/Buttons/ElevatedFilledThemedButton';
import {
    ArrowBack as BackButtonIcon,
    AlternateEmail as WebMailIcon,
    Hub as SystemsIcon
} from '@mui/icons-material'
import { colors } from '../brahmwareTheme/theme';

const FormHeader = () => {
    return (
        <FlexEE >
            <ColumnFlexSC sx={{ padding: '2em 0' }}>
                <Typography fontWeight={'thin'} fontSize={'0.75em'} pl='0.125em'>Welcome to</Typography>
                <Typography color='primary' variant='h3' component='h3' fontSize={'2em'} fontWeight='medium'>Brahmware</Typography>
                <Typography variant='h6' component='h6' pl='0.125em' fontSize={'1.25em'}>Backoffice</Typography>
            </ColumnFlexSC>
            <FlexCS>
                <WithToolTip
                    message={'Go to Mailpoint'}
                    color={colors.dark__card}
                    textColor={colors.primary}
                    tooltipPlacement={'right'}
                >
                    <ElevatedFilledThemedButton
                        component='a'
                        varient='contained'
                        endIcon={<SystemsIcon />}
                        elevation={7}
                        href='https://systems.brahmware.com'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Systems
                    </ElevatedFilledThemedButton>
                </WithToolTip>

                <WithToolTip
                    message={'Go to Mailpoint'}
                    color={colors.dark__card}
                    textColor={colors.primary}
                    tooltipPlacement='right'
                >
                    <ElevatedFilledThemedButton
                        component='a'
                        varient='contained'
                        endIcon={<WebMailIcon />}
                        elevation={6}
                        href='https://mailpoint.brahmware.com'
                        rel='noreferrer'
                    >
                        Mailpoint
                    </ElevatedFilledThemedButton>
                </WithToolTip>
            </FlexCS>
            <MinuteClock />
        </FlexEE>
    )
};

export default FormHeader;