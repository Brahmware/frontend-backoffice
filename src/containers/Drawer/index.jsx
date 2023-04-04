import { Box } from "@mui/material";
import ColumnFlexCC from "../../components/placements/ColumnFlexCC";
import DrawerLayout from "../../layout/DrawerLayout";
import DrawerItemSwitch from "./DrawerItemSwitch";
import DrawerItemSession from "./DrawerItemSession";
import CardColumnFlexCC from "../../components/cards/CardColumnFlexCC";
import { colors } from "../../brahmwareTheme/theme";


const Drawer = () => (
    <DrawerLayout>
        <ColumnFlexCC sx={{ justifyContent: 'space-between' }}>
            <Box className='top'>
                Hi
            </Box>
            <ColumnFlexCC className='bottom' sx={{ height: 'max-content' }}>
                <CardColumnFlexCC
                    elevation={1}
                    className='bottom'
                    sx={{
                        height: 'max-content',
                        py: '1.5em',
                        gap: '1em',
                        backgroundColor: colors.darker__card
                    }}
                >
                    <DrawerItemSwitch />
                    <DrawerItemSession />
                </CardColumnFlexCC>
            </ColumnFlexCC>
        </ColumnFlexCC>
    </DrawerLayout>
);


export default Drawer;