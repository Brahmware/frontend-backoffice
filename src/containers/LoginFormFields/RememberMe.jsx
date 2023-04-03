import { FormControlLabel, Typography } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'
import { colors } from '../../brahmwareTheme/theme'
import StateControlCheckBox from '../../components/CheckBox/StateControlCheckBox'
import WithToolTip from '../../components/TooltipComponent/WithTooltip'
import usePersist from '../../hooks/usePersist'
import displayText from '../../utils/displayText'

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
                        message={
                            persist ?
                                displayText.__PERSISTS_LOGIN :
                                displayText.__DOES_NOT_PERSISTS_LOGIN
                        }
                        tooltipVanish={false}
                        tooltipPlacement="left"
                        color={persist ? colors.primary : colors.dark__card}
                        textColor={persist ? colors.darker__card : colors.text__color__dark}
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