import { styled } from "@mui/material"
import ColumnFlexSC from "../../../components/placements/ColumnFlexSC";
import FlexSC from "../../../components/placements/FlexSC";

const MainMenueWrapper = styled(ColumnFlexSC)({
    alignSelf: 'start',
    width: '100%',
    justifySelf: 'start',
    backgroundColor: 'white',
    height: 'max-content',
    padding: 'unset',
    gap: 'unset',
});

const MenuItemWrapper = styled(FlexSC)({
    height: 'max-content',
    width: '100%',
});

const ItemIconWrapper = styled('div') ({
    padding: '1em',
    minWidth: '5em'
});

const MainMenue = () => {

    const menuItems = [1, 2, 3, 4, 5, 6];

    return (
        <MainMenueWrapper>
            {
                menuItems.map((eachMenuItem, key) => {
                    return (
                        <MenuItemWrapper key={key}>
                            <ItemIconWrapper>{`hihi-${eachMenuItem}`}</ItemIconWrapper>
                            <span>MainMenue</span>
                        </MenuItemWrapper>
                    )
                })
            }
        </MainMenueWrapper>
    )
}

export default MainMenue