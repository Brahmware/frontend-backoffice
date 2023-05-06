import { Typography } from "@mui/material";
import { useState, Fragment } from "react";
import { TooltipComponent } from "./TooltipComponent";
import { useSelector } from "react-redux";
import { selectCurrentDrawerOpen } from "../../Application/drawerState/drawerStateSlice";

const WithToolTip = ({

    className,
    index,
    color,
    textColor,
    message,
    children,
    showChangeState,
    tooltipPlacement,
    tooltipMargin,
    tooltipVanish,
    tooltipTimeout,
    childIsComponent,

    ...others

}) => {

    const drawerOpen = useSelector(selectCurrentDrawerOpen);
    const [show, setShow] = useState(false);

    const onMouseEnterBehaviour = () => {
        !drawerOpen && setShow(true);
        if (tooltipVanish) {
            setTimeout(() => setShow(false), tooltipTimeout || 2000);
        }
    }

    const isReactComponent = typeof children.type === 'function';

    return (
        <Fragment key={index}>
            {
                message ?
                    <TooltipComponent
                        className={className}
                        title={message}
                        color={color}
                        textColor={textColor}
                        open={show}
                        disableHoverListener
                        onMouseEnter={onMouseEnterBehaviour}
                        onMouseLeave={() => setShow(false)}
                        placement={tooltipPlacement ? tooltipPlacement : 'bottom'}
                        tooltipMargin={tooltipMargin}
                        arrow={true}
                    >
                        <Typography
                            {...others}
                            className={className}
                            component={isReactComponent ? 'div' : 'span'}
                            onClick={() => !showChangeState && setShow(false)}
                        >
                            {children}
                        </Typography>
                    </TooltipComponent>
                    :
                    children
            }
        </Fragment>
    )

};

export default WithToolTip;
