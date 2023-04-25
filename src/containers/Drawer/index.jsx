import ColumnFlexCC from "../../components/placements/ColumnFlexCC";
import DrawerLayout from "../../layout/DrawerLayout";
import DrawerTop from "./DrawerTop";
import DrawerBottom from "./DrawerBottom";


const Drawer = () => (
    <DrawerLayout>
        <ColumnFlexCC sx={{ justifyContent: 'space-between' }}>
            <DrawerTop />
            <DrawerBottom />
        </ColumnFlexCC>
    </DrawerLayout>
);


export default Drawer;