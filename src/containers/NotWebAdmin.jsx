import React from 'react'
import { colors } from '../brahmwareTheme/theme'
import ThickPaddedBox from '../components/Boxes/ThickPaddedBox'
import ThinPaddedBox from '../components/Boxes/ThinPaddedBox'
import LoadingIconButton from '../components/Buttons/LoadingIconButton'
import ColumnFlexCC from '../components/placements/ColumnFlexCC'
import FlexCC from '../components/placements/FlexCC'
import WithToolTip from '../components/TooltipComponent/WithTooltip'

const NotWebAdmin = () => {
    return (
        <ThinPaddedBox>
            <ColumnFlexCC>
                <FlexCC sx={{justifyContent: 'space-between'}}>
                    <a>hi</a>
                    <a>bye</a>
                </FlexCC>
                <FlexCC>
                    <WithToolTip 
                        message={'Go back'}
                        color={colors.danger}
                        
                    >
                        hi
                    <LoadingIconButton 
                    ></LoadingIconButton>
                    </WithToolTip>
                </FlexCC>
            </ColumnFlexCC>
        </ThinPaddedBox>
    )
}

export default NotWebAdmin