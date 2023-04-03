import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentResponseState } from '../Application/responseState/responseStateSlice';
import { colors, transition } from '../brahmwareTheme/theme';
import PlanetSystem from '../components/art/PlanetSystem';
import ArtisticBrahmCard from '../components/cards/ArtisticBrahmCard';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';
import FlexCC from '../components/placements/FlexCC';
import SEO from '../components/seo';
import FormHeader from '../containers/FormHeader';
import LoginFormFields from '../containers/LoginFormFields';
import LoginNavigationButtons from '../containers/LoginNavigationButtons';
import addAlpha from '../utils/addAlpha';

const Login = () => {

    const [isHover, setIsHover] = useState(false);
    const currentResponseState = useSelector(selectCurrentResponseState);

    return (
        <>
            <SEO title="Brahmware | BackOffice" />
            <FlexCC sx={{ background: colors.black }}>
                <PlanetSystem trigger={isHover}>
                    <ArtisticBrahmCard
                        elevation={1}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        sx={{
                            padding: '2em',
                            transition: transition(),
                            backgroundColor: currentResponseState.isError ?
                            addAlpha(colors.danger__form_bg, 0.9) :
                            addAlpha(colors.black, 0.9)

                            /* This will activate the backdrop filter */

                            /* backgroundColor: currentResponseState.isError ?
                            addAlpha(colors.danger__form_bg, 0.2) :
                            addAlpha(colors.black, 0.2)
                            ,
                            backdropFilter: 'grayscale(1) blur(10px)' */
                        }}
                    >
                        <ColumnFlexCC>
                            <LoginNavigationButtons />
                            <FormHeader />
                            <LoginFormFields />
                        </ColumnFlexCC>
                    </ArtisticBrahmCard>
                </PlanetSystem>
            </FlexCC>
        </>
    )
}

export default Login;