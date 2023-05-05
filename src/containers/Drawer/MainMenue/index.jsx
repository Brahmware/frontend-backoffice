import { Button, Typography, styled } from "@mui/material"
import ColumnFlexSC from "../../../components/placements/ColumnFlexSC";
import { colors, drawer, transition } from "../../../brahmwareTheme/theme";
import FlexCC from "../../../components/placements/FlexCC";
import { selectCurrentDrawerItems, selectCurrentDrawerOpen } from "../../../Application/drawerState/drawerStateSlice";
import { useSelector } from "react-redux";
import addAlpha from "../../../utils/addAlpha";
import { useNavigate } from "react-router-dom";
import Icon from "../../../components/Icon";
import DrawerItem from "../../../components/Drawer/DrawerItem";

const MainMenueWrapper = styled(ColumnFlexSC)({
    alignSelf: 'start',
    width: '100%',
    justifySelf: 'start',
    height: 'max-content',
    padding: 'unset',
    gap: 'unset',
});

const MenuItemWrapper = styled(Button)({
    minHeight: 'unset',
    maxHeight: 'unset',
    height: '5.5em',
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '1em',
    transition: transition('fast'),
    position: 'relative',
    borderRadius: 0,
    '&:hover': {
        background: addAlpha(colors.primary, 0.125),
    },
});

const ItemIconWrapper = styled(FlexCC)({
    height: '5.5em',
    width: drawer.drawerClose,
    transition: transition(),
});

const ItemContentWrapper = styled(Typography)({
    padding: '0.25em',
    transition: transition(),
});

const MainMenue = () => {

    const menuItems = useSelector(selectCurrentDrawerItems);
    const navigate = useNavigate();
    const drawerOpen = useSelector(selectCurrentDrawerOpen);

    return (
        <MainMenueWrapper>
            {
                menuItems.map((eachMenuItem, key) => {
                    return (
                        <DrawerItem key={key}>
                            <MenuItemWrapper onClick={() => navigate(eachMenuItem.path)}>
                                <ItemIconWrapper sx={() => drawerOpen ? ({ transform: 'scale(1)' }) : ({ transform: 'scale(0.85)' })}>
                                    <Icon src={eachMenuItem.icon} />
                                </ItemIconWrapper>
                                <ItemContentWrapper
                                    fontSize='1.25em'
                                    fontWeight='bold'
                                    sx={() => drawerOpen ? ({ transform: 'translate(0em, 0em) scale(1)', opacity: 1 }) : ({ transform: 'translate(1em, 1em) scale(0.85)', opacity: 0 })}
                                >
                                    {eachMenuItem.title}
                                </ItemContentWrapper>
                            </MenuItemWrapper>
                        </DrawerItem>
                    )
                })
            }
        </MainMenueWrapper>
    )
}

export default MainMenue