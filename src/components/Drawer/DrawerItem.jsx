import { styled } from "@mui/material";
import { colors, scales, transition } from "../../brahmwareTheme/theme";



const DrawerItem = styled('div')({
    display: 'block',
    width: '100%',

    '& .icon__button-icon': {
        transition: transition('fast'),
    },

    '& #light, & #dark': {
        transition: transition('fast'),
        opacity: '1 !important',
        '& path': {
            transition: transition('fast'),
            opacity: '1 !important'
        }
    },

    '& #light': {
        fill: colors.text__color,
        '& path': {
            fill: colors.text__color,
        }
    },

    '& #dark': {
        fill: colors.disabled__text,
        '& path': {
            fill: colors.disabled__text,
        }
    },

    '&:hover': {

        '& .item__name > span': {
            color: colors.primary,
        },

        '& .icon__button-icon': {
            transform: `scale(${scales.medium})`,
        },

        '& #dark': {
            fill: colors.primary,
            '& path': {
                fill: colors.primary,
            }
        },

        "& .logout__button": {
            '& #dark': {
                fill: colors.muted,
                '& path': {
                    fill: colors.muted,
                }
            },
        }

    }
})

export default DrawerItem;