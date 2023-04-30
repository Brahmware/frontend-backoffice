import { styled } from "@mui/material"
import { colors, drawer, scales, transition } from "../../brahmwareTheme/theme"
import FlexSC from "../placements/FlexSC"

const MenuItemBox = styled(FlexSC)({
    height: 'max-content',
    /* gap: '1em' */

    '& .first-item': {
        fontSize: '1em',
        width: drawer.drawerClose
    },

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
        fill: colors.primary__dark,
        '& path': {
            fill: colors.primary__dark,
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

export default MenuItemBox;