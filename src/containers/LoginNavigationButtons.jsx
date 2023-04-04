import React from 'react'
import ElevatedFilledIconButton from '../components/Buttons/ElevatedFilledIconButton'
import WithToolTip from '../components/TooltipComponent/WithTooltip'
import { ArrowBack as BackButtonIcon } from '@mui/icons-material'
import { colors } from '../brahmwareTheme/theme'
import FlexSC from '../components/placements/FlexSC'
import WorldMarkSimpleLogo from '../assets/Logo/WorldMarkSimpleLogo'

const LoginNavigationButtons = () => {
    return (
        <FlexSC className='noselect' sx={{ gap: '2em' }}>
            <WithToolTip
                message={'Go to Brahmware'}
                color={colors.primary}
                textColor={colors.darker__card}
                tooltipPlacement={'left'}
            >
                <ElevatedFilledIconButton
                    component='a'
                    variant='outlined'
                    href='https://brahmware.com'
                    color='primary'
                    size='large'
                    elevation={7}
                >
                    <BackButtonIcon />
                </ElevatedFilledIconButton>
            </WithToolTip>
            <WorldMarkSimpleLogo />
        </FlexSC>
    )
}

export default LoginNavigationButtons