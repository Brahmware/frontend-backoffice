import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDrawerState, setDrawerState } from "../../../../Application/drawerState/drawerStateSlice";
import { colors, drawer } from "../../../../brahmwareTheme/theme";
import FlexCC from "../../../../components/placements/FlexCC";
import SwitchToggle from "../../../../components/switches/SwitchToggle";
import WithToolTip from "../../../../components/TooltipComponent/WithTooltip";
import SettingsIcon from '@mui/icons-material/Settings';
import ElevatedFilledIconButton from "../../../../components/Buttons/ElevatedFilledIconButton";

const DrawerItemSwitch = () => {
    const currentDrawerState = useSelector(selectCurrentDrawerState);
    const dispatch = useDispatch();

    return (
        <FlexCC py='0.5em' pr={'1em'} sx={{ justifyContent: 'space-between', background: colors.primary__dark }}>
            <FlexCC sx={{ width: drawer.drawerClose }}>
                <WithToolTip
                    color={colors.darker__card}
                    textColor={colors.primary}
                    message={currentDrawerState.drawerOpen ? "Close Drawer" : "Open Drawer"}
                    showChangeState={true}
                    tooltipPlacement={'right'}
                    tooltipMargin={'0 2.6em !important'}
                >
                    <SwitchToggle
                        color='default'
                        onColor={colors.primary}
                        offColor={colors.text__color}
                        onChange={() => dispatch(setDrawerState({ drawerOpen: !currentDrawerState.drawerOpen }))}
                    />
                </WithToolTip>
            </FlexCC>
            <WithToolTip
                message={'Open Settings'}
                color={colors.darker__card}
                textColor={colors.primary}
                tooltipPlacement='left'
            >
                <ElevatedFilledIconButton
                    size='small'
                    varient='contained'
                    color='primary'
                    elevation={7}
                    onClick={() => { alert("Clicked on settings button!"); }}
                >
                    <SettingsIcon />
                </ElevatedFilledIconButton>
            </WithToolTip>
        </FlexCC >
    )
}

export default DrawerItemSwitch