import { createTheme } from "@mui/material";
import addAlpha from "../utils/addAlpha";
import {colors as themeColors} from "./colors";
import { backgrounds } from "./backgrounds";

let colors_set = themeColors;

export const colors = {
    ...colors_set,
    field__bg: '#3d3d3d',
    transparent__black: `${addAlpha(colors_set.black, 0.75)}`,
}

export const backgroundDesigns = backgrounds;

export const scales = {
    small: 1.05,
    medium: 1.10,
    large: 1.15,
    extraLarge: 2.00,
};

export const speed = {
    slow: 1000,
    medium: 600,
    fast: 300
};

const fonts = {
    poppins: "Poppins",
    montserrat: "Montserrat"
};

export const shadows = {
    defaultLayer_1: `inset 0px 0px 3px 3px ${colors.black}`,
    defaultLayer_2: `0px 0px 3px 3px ${colors.black}`,
    defaultLayer_3: `inset 0px 0px 3px 3px ${colors.black}`,
    defaultLayer_4: `inset 0px 0px 3px 3px ${colors.black}`,
}

export const transition = (speed) => `all ${speed === 'fast' ? '200ms' : '600ms'} ease 0s`

export const drawer = {
    drawerClose: '5em',
    drawerOpenOffset: '15em',
    fullDrawerWidth: '20em'
};

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary,
            contrastText: colors.darker__card,
        },
        secondary: {
            main: colors.secondary,
            contrastText: colors.text__color
        },
        error: {
            main: colors.danger,
            contrastText: colors.darker__card
        },
        warning: {
            main: colors.warning,
            contrastText: colors.text__color
        },
        success: {
            main: colors.success,
            contrastText: colors.text__color
        },
        buttonOnPrimary: {
            main: colors.dark__card,
            contrastText: colors.text__color
        },
        muted: {
            main: colors.muted,
            contrastText: colors.white
        },
        action: {
            disabledBackground: colors.disabled,
            disabled: colors.disabled
        }
    },

    typography: {
        fontFamily: fonts.montserrat,
        fontSize: 12,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,
        fontWeightBold: 800,
        allVariants: {
            color: colors.text__color
        },
        button: {
            textTransform: 'none'
        }
    },

    MuiLinkButton: {
        styleOverrides: {
            root: {
                '&[disabled]': {
                    color: colors.muted,
                    pointerEvents: 'none',
                },
            },
        },
    },

    MuiButton: {
        styleOverrides: {
            root: {
                '&[disabled]': {
                    color: colors.disabled,
                    pointerEvents: 'none',
                },
            },
        },
    },

    props: {
        MuiButtonBase: {
            TouchRippleProps: {
                classes: {
                    root: {
                        color: colors.primary
                    }
                }
            },
        }
    },
}); 