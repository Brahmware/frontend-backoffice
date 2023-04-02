import React from 'react'
import { colors } from '../../../brahmwareTheme/theme'
import WithToolTip from '../../../components/TooltipComponent/WithTooltip'
import {
    AlternateEmail as WebMailIcon,
    WorkOutline as SystemsIcon
} from '@mui/icons-material';
import { Divider } from '@mui/material';
import ElevatedFilledIconButton from '../../../components/Buttons/ElevatedFilledIconButton';
import FlexSC from '../../../components/placements/FlexSC';

const ActionArea = () => {
    return (
        <FlexSC gap='0.5em'>

            <WithToolTip
                message={'Go to Mailpoint'}
                color={colors.primary}
                textColor={colors.darker__card}
                tooltipPlacement='right'
            >
                <ElevatedFilledIconButton
                    component='a'
                    size='small'
                    varient='contained'
                    color='primary'
                    elevation={7}
                    href='https://mailpoint.brahmware.com'
                    rel='noreferrer'
                    target='_blank'
                >
                    <WebMailIcon fontSize='0.9em' />
                </ElevatedFilledIconButton>
            </WithToolTip>

            <Divider
                color={colors.darker__card}
                flexItem
                orientation='vertical'
                dark
            />

            <WithToolTip
                message={'Go to Systems'}
                color={colors.primary}
                textColor={colors.darker__card}
                tooltipPlacement={'left'}
            >
                <ElevatedFilledIconButton
                    component='a'
                    size='small'
                    varient='contained'
                    color='primary'
                    elevation={7}
                    href='https://systems.brahmware.com'
                    target='_blank'
                    rel="noreferrer"
                >
                    <SystemsIcon fontSize='0.9em' />
                </ElevatedFilledIconButton>
            </WithToolTip>

        </FlexSC>
    )
}

export default ActionArea