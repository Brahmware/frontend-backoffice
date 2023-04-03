import { FormControlLabel, Typography } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { colors } from '../../brahmwareTheme/theme'
import StateControlCheckBox from '../../components/CheckBox/StateControlCheckBox'
import WithToolTip from '../../components/TooltipComponent/WithTooltip'
import usePersist from '../../hooks/usePersist'

const RememberMe = ({ control }) => {

    const [persist, setPersist] = usePersist();
    const handleLoginPersistance = (event) => setPersist(event.target.checked);

    return (
        <Controller
            control={control}
            name='persist'
            defaultValue='true'
            render={({ field }) => {
                return (
                    <WithToolTip
                        message='Persist your Login'
                        tooltipVanish={false}
                        tooltipPlacement="left"
                        color={colors.primary}
                        textColor={colors.darker__card}
                        showChangeState={true}
                    >
                        <FormControlLabel
                            control={
                                <StateControlCheckBox
                                    {...field}
                                    initialValue={persist}
                                    onChange={handleLoginPersistance}
                                />
                            }
                            label={
                                <Typography
                                    lineHeight='1.125em'
                                    whiteSpace='nowrap'
                                >
                                    Remember Me
                                </Typography>
                            }
                            sx={{ gap: '0.25em' }}
                        />
                    </WithToolTip>
                )
            }}
        />
    )
}

export default RememberMe