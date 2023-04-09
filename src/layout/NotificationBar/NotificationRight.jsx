import { Box } from "@mui/material"

const NotificationRightLayout = ({ children }) => {
    return (
        <Box
            gridColumn='6/7'
            justifySelf='end'
            position='relative'
            width='14em'
        >
            {children}
        </Box>
    )
}

export default NotificationRightLayout