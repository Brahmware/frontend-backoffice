import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../Application/auth/authSlice";
import { colors } from "../../../../brahmwareTheme/theme";

const SessionUser = () => {

    const currentUser = useSelector(selectCurrentUser);

    return (
        <Typography fontSize='1em' color={colors.primary__dark}>
            {currentUser}
        </Typography>
    )
}

export default SessionUser