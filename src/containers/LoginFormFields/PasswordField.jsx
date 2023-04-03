import React from 'react'
import { Controller } from 'react-hook-form'
import FullWidthBox from '../../components/Boxes/FullWidthBox'
import CollapsableError from '../../components/TextFields/CollapsableError'
import TextField from '../../components/TextFields/PasswordField'
import helperText from '../../utils/helperText'
import { PASSWORD_PATTERN } from '../../utils/patterns'

const PasswordField = ({ control }) => {
    return (
        <Controller
            control={control}
            name="password"
            defaultValue=''
            rules={{
                required: true,
                pattern: PASSWORD_PATTERN
            }}
            render={({ field, fieldState: { error } }) => {
                return (
                    <FullWidthBox>
                        <TextField
                            {...field}
                            variant='filled'
                            ref={null}
                            id="user__password"
                            label="Password"
                            size='small'
                            fullWidth
                            placeholder='Enter Password'
                            error={error !== undefined}
                        />
                        <CollapsableError growCondition={error !== undefined}>
                            {
                                error
                                    ? error?.type === 'userError'
                                        ? error?.errorMessage
                                        : helperText.password[error?.type]
                                    : ''
                            }
                        </CollapsableError>
                    </FullWidthBox>
                )
            }}
        />
    )
}

export default PasswordField