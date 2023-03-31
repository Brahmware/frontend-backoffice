import React from 'react'
import LoadingIconButton from '../Buttons/LoadingIconButton'
import FlexCC from '../placements/FlexCC'
import FlexEC from '../placements/FlexEC'
import WithToolTip from '../TooltipComponent/WithTooltip'
import ThemedField from './ThemedField'

const TextFieldWithAction = ({ children, ...rest }) => {
    /* showPassword ? 'text' : 'password' */
    return (
        <FlexEC>
            <ThemedField
                {...rest}
                id={rest.id}
                label={rest.label}
                fullWidth={rest.fullWidth}
                type={rest.type}
                size={rest.size}
                sx={{
                    ...rest.sx,
                    position: 'relative',
                    
                    '& input': {
                        pr: '3.5em'
                    }
                }}
            />
            <FlexCC className='text-field__icon__button'
                sx={{
                    position: 'absolute',
                    height: 'max-content',
                    width: 'max-content',
                    transform: 'translate(-0.25em, 0)'
                }}
            >
                {children}
            </FlexCC>
        </FlexEC>
    )
}

export default TextFieldWithAction