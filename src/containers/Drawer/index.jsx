import { Box, Divider } from "@mui/material";
import ColumnFlexCC from "../../components/placements/ColumnFlexCC";
import DrawerLayout from "../../layout/DrawerLayout";
import DrawerItemSwitch from "./DrawerItemSwitch";
import DrawerItemSession from "./DrawerItemSession";


const Drawer = () => (
    <DrawerLayout>
        <ColumnFlexCC sx={{ justifyContent: 'space-between' }}>
            <Box className='top'>
                Hi
            </Box>
            <ColumnFlexCC className='bottom' sx={{ height: 'max-content' }}>
                <Divider flexItem orientation='horizontal' />
                <ColumnFlexCC
                    className='bottom'
                    sx={{
                        height: 'max-content',
                        py: '1.5em',
                        gap: '1em'
                    }}
                >
                    <DrawerItemSwitch />
                    <DrawerItemSession />
                </ColumnFlexCC>
            </ColumnFlexCC>
        </ColumnFlexCC>
    </DrawerLayout>
);


export default Drawer;