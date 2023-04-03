import { Checkbox } from '@mui/material';
import React, { useState } from 'react'
import { colors } from '../../brahmwareTheme/theme';
import WithToolTip from '../TooltipComponent/WithTooltip';

const StateControlCheckBox = ({ initialValue, onChange }) => {

    const [value, setValue] = useState(initialValue);

    const handleBoxStateChange = (event) => {
        (onChange)(event);
        setValue(!value);
    };

    return (
        <Checkbox
            checked={value}
            onChange={handleBoxStateChange}
        />
    )
}

export default StateControlCheckBox;