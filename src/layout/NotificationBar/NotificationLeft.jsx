import { Box } from "@mui/material"

const NotificationLeftLayout = ({ children }) => {
    return (
        <Box
            gridColumn='2/3'
            justifySelf='start'
        >
            {children}
        </Box>
    )
}

export default NotificationLeftLayout