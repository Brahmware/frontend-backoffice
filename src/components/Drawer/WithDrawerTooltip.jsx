import { useSelector } from "react-redux";
import WithToolTip from "../TooltipComponent/WithTooltip";
import { selectCurrentDrawerState } from "../../Application/drawerState/drawerStateSlice";
import { colors } from "../../brahmwareTheme/theme";

const WithDrawerTooltip = ({ message: { open, close, base }, children }) => {
  // Get the current drawer state using the "useSelector" hook from react-redux
  const currentDrawerState = useSelector(selectCurrentDrawerState);
  
  return (
    <WithToolTip
      color={currentDrawerState.drawerOpen ? colors.darker__card : colors.primary}
      textColor={currentDrawerState.drawerOpen ? colors.primary : colors.darker__card}
      message={base || (currentDrawerState.drawerOpen ? open : close)}
      showChangeState={true}
      tooltipPlacement={'right'}
      tooltipMargin={'0 2.6em !important'}
      childIsComponent
    >
      {children}
    </WithToolTip>
  );
};

export default WithDrawerTooltip;
