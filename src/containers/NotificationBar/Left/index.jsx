import { Typography } from "@mui/material";
import { NotificationLeftLayout } from "../../../layout/NotificationBar";
import BrahmCard from "../../../components/cards/BrahmCard";

const Left = () => {
    return (
        <NotificationLeftLayout>
            <BrahmCard sx={{ px: '2em', borderRadius: '2em' }}>
                <Typography whiteSpace={'nowrap'}>Global Actions</Typography>
            </BrahmCard>
        </NotificationLeftLayout >
    )
};

export default Left;