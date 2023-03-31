import { styled, TextField } from "@mui/material";
import { colors } from "../../brahmwareTheme/theme";

const ThemedField = styled(TextField)(({ buttonBackground }) => (
    {
        borderRadius: '0.33 0 0.33em 0',
        overflow: 'hidden !important',

        '& fieldset': {
            borderRadius: '0.33em',
        },

        '& .MuiInputAdornment-root': {
            padding: 0,
            margin: 0,

            '& button': {
                backgroundColor: buttonBackground ? buttonBackground : 'inherit',
                borderRadius: '0.33em'
            }
        },

        "&:has(.Mui-disabled)": {
            backgroundColor: colors.disabled,
            borderRadius: '0.33em 0.33em 0 0',
            overflow: 'hidden',

            "& label": {
                color: colors.disabled__text,
                backgroundColor: 'unset !important'
            }
        },

        "& .Mui-disabled": {
            backgroundColor: `${colors.disabled} !important`,
        },

        '& input': {
            border: 0,
            borderRadius: 0,
            caretColor: `${colors.primary} !important`,
            color: `${colors.text__color} !important`,
        },

        '&:has(:-webkit-autofill)': {
            '& label': {
                transform: 'translate(0.85em, 0.3em) scale(0.75)',

                '&::after': {
                    content: '" (Autocompleted)"',
                    color: colors.text__color__dark,
                    fontWeight: 'light'
                }
            }
        }

        /* '& .MuiInputBase-root': {
            paddingRight: 0
        } */

    }));

export default ThemedField;