import React, { useState } from 'react';
import { colors } from '../brahmwareTheme/theme';
import PlanetSystem from '../components/art/PlanetSystem';
import ArtisticBrahmCard from '../components/cards/ArtisticBrahmCard';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';
import FlexCC from '../components/placements/FlexCC';
import SEO from '../components/seo';
import FormHeader from '../containers/FormHeader';
import LoginFormFields from '../containers/LoginFormFields.jsx';
import LoginNavigationButtons from '../containers/LoginNavigationButtons';
import addAlpha from '../utils/addAlpha';

const Login = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <SEO title="Backoffice" />
            <FlexCC sx={{ background: colors.black }}>
                <PlanetSystem trigger={isHover}>
                    <ArtisticBrahmCard
                        elevation={1}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        sx={{
                            padding: '2em',
                            backgroundColor: addAlpha(colors.black, /* 0.2 */ 0.9),
                            /* backdropFilter: 'grayscale(1) blur(10px)' */
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