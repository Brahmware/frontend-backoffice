import styled from "@emotion/styled";
import { Switch } from "@mui/material";
import { colors, scales, transition } from "../../../brahmwareTheme/theme";

export const SwitchToggle = styled(({ colorOn, colorOff, ...other }) => (
    <Switch
        {...other}
        sx={{
            "& .MuiSwitch-thumb": {
                backgroundColor: colorOff,
                transition: transition('fast'),
            },


            "& .MuiSwitch-track": {
                backgroundColor: `${colors.muted} !important`
            },

            "& .Mui-checked": {
                "& .MuiSwitch-thumb": {
                    backgroundColor: `${colorOn} !important`
                },
            },

            "&:hover": {
                '& .MuiSwitch-thumb': {
                    transform: `scale(${scales.medium})`
                },

                "& .MuiTouchRipple-root": {
                    backgroundColor: colorOff,
                    opacity: 0.15,
                },

                "& .Mui-checked": {
                    "& .MuiTouchRipple-root": {
                        backgroundColor: colorOn,
                        opacity: 0.15,
                    },
                },
            },

            "& .Mui-disabled": {
                "& .MuiSwitch-thumb": {
                    backgroundColor: colors.text__color__dark,
                    transform: 'none'
                },
            }
        }}
    />
))({});

export default SwitchToggle;