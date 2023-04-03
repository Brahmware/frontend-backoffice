import React from 'react'
import { Controller } from 'react-hook-form'
import FullWidthBox from '../../components/Boxes/FullWidthBox'
import CollapsableError from '../../components/TextFields/CollapsableError'
import ThemedField from '../../components/TextFields/ThemedField'
import helperText from '../../utils/helperText'
import { USERNAME_OR_EMAIL_PATTERN } from '../../utils/patterns'

const UserField = ({ control }) => {
    return (
        <Controller
            control={control}
            name='user'
            defaultValue=''
            rules={{
                required: true,
                pattern: USERNAME_OR_EMAIL_PATTERN
            }}
            render={({ field, fieldState: { error } }) => {
                return (
                    <FullWidthBox>
                        <ThemedField
                            {...field}
                            fullWidth={true}
                            variant={'filled'}
                            ref={null}
                            name='user'
                            id="user"
                            label='User'
                            placeholder='Username or Email'
                            size='small'
                            error={error !== undefined}
                        />
                        <CollapsableError growCondition={error !== undefined}>
                            {
                                error
                                    ? error?.type === 'userError'
                                        ? error?.errorMessage
                                        : helperText.user[error?.type]
                                    : ''
                            }
                        </CollapsableError>
                    </FullWidthBox>
                )
            }}
        />
    )
}

export default UserField