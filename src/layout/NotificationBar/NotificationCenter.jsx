import { Box } from "@mui/material"

const NotificationCenterLayout = ({ children }) => {
    return (
        <Box

            gridColumn='4/5'
            justifySelf='center'
        >
            {children}
        </Box>
    )
}

export default NotificationCenterLayout