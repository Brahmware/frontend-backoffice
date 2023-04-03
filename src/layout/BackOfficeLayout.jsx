import { Box, styled } from "@mui/material";
import { drawer } from "../brahmwareTheme/theme";


const BackOfficeLayout = styled(Box)({
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: `
        ${drawer.drawerClose} 
        ${drawer.drawerOpenOffset}
        repeat(7, 1fr) 
        4em
    `,
    gridTemplateRows: '4em repeat(8, 1fr) 4em',
});

export default BackOfficeLayout;