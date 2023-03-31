import React from 'react'
import { colors } from '../../../brahmwareTheme/theme'
import ElevatedFilledThemedButton from '../../../components/Buttons/ElevatedFilledThemedButton'
import WithToolTip from '../../../components/TooltipComponent/WithTooltip'
import FlexCS from '../../../components/placements/FlexCS';
import {
    ArrowBack as BackButtonIcon,
    AlternateEmail as WebMailIcon,
    Hub as SystemsIcon
} from '@mui/icons-material';
import { Divider } from '@mui/material';

const ActionArea = () => {
    return (
        <FlexCS gap='0.5em'>
            <WithToolTip
                message={'Go to Systems'}
                color={colors.primary}
                textColor={colors.darker__card}
                tooltipPlacement={'left'}
            >
                <ElevatedFilledThemedButton
                    component='a'
                    size='small'
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
            <Divider flexItem orientation='vertical' light/>
            <WithToolTip
                message={'Go to Mailpoint'}
                color={colors.primary}
                textColor={colors.darker__card}
                tooltipPlacement='right'
            >
                <ElevatedFilledThemedButton
                    component='a'
                    size='small'
                    varient='contained'
                    endIcon={<WebMailIcon />}
                    elevation={6}
                    href='https://mailpoint.brahmware.com'
                    rel='noreferrer'
                    target='_blank'
                >
                    Mailpoint
                </ElevatedFilledThemedButton>
            </WithToolTip>
        </FlexCS>
    )
}

export default ActionArea