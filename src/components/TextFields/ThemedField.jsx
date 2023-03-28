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
            "caret-color": `${colors.primary} !important`,
            color: `${colors.text__color} !important`,
        },
        
        "& :-webkit-autofill": {
            backgroundColor: `${colors.transperent}`,
            borderRadius: '0',
            "-webkit-box-shadow": `0 0 0 100px ${colors.field__bg} inset !important`,
            "-webkit-text-fill-color": `${colors.text__color} !important`,
            "caret-color": `${colors.primary} !important`,
        },

        /* '& .MuiInputBase-root': {
            paddingRight: 0
        } */

    }));

export default ThemedField;