import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDrawerState, setDrawerState } from "../../../Application/drawerState/drawerStateSlice";
import { colors, drawer } from "../../../brahmwareTheme/theme";
import FlexCC from "../../../components/placements/FlexCC";
import FlexSC from "../../../components/placements/FlexSC";
import SwitchToggle from "../../../components/switches/SwitchToggle";
import WithToolTip from "../../../components/TooltipComponent/WithTooltip";

const DrawerItemSwitch = () => {
    const currentDrawerState = useSelector(selectCurrentDrawerState);
    const dispatch = useDispatch();

    return (
        <FlexSC>
            <FlexCC sx={{ width: drawer.drawerClose }}>
                <WithToolTip
                    color={currentDrawerState.drawerOpen ? colors.primary : colors.muted}
                    textColor={currentDrawerState.drawerOpen ? colors.darker__card : colors.primary}
                    message={currentDrawerState.drawerOpen ? "Close Drawer" : "Open Drawer"}
                    showChangeState={true}
                    tooltipPlacement={'right'}
                    tooltipMargin={'0 2.6em !important'}
                >
                    <SwitchToggle
                        size='small'
                        color='default'
                        onColor={colors.primary}
                        offColor={colors.text__color}
                        onChange={() => dispatch(setDrawerState({ drawerOpen: !currentDrawerState.drawerOpen }))}
                    />
                </WithToolTip>
            </FlexCC>
        </FlexSC>
    )
}

export default DrawerItemSwitch