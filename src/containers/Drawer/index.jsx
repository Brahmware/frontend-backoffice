import ColumnFlexCC from "../../components/placements/ColumnFlexCC";
import DrawerLayout from "../../layout/DrawerLayout";
import DrawerTop from "./DrawerTop";
import DrawerBottom from "./DrawerBottom";
import MainMenue from "./MainMenue";


const Drawer = () => (
    <DrawerLayout>
        <ColumnFlexCC sx={{ justifyContent: 'start' }}>
            <DrawerTop />
            <MainMenue />
            <DrawerBottom />
        </ColumnFlexCC>
    </DrawerLayout>
);


export default Drawer;