import { Checkbox } from '@mui/material';
import React, { useState } from 'react'
import { colors } from '../../brahmwareTheme/theme';
import WithToolTip from '../TooltipComponent/WithTooltip';

const StateControlCheckBox = ({ color, onChange, ...fields }) => {

    const [value, setValue] = useState(false);

    const handleBoxStateChange = (event) => {
        (onChange)(event);
        setValue(!value);
    };



    return (
        <WithToolTip
            message={'Persist Login'}
            tooltipVanish={false}
            tooltipPlacement="left"
            {...fields}
            color={color || colors.primary}
        >
            <Checkbox
                checked={value}
                onChange={handleBoxStateChange}
            />
        </WithToolTip>
    )
}

export default StateControlCheckBox;