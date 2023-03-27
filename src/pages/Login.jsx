import React, { useState } from 'react';
import { colors } from '../brahmwareTheme/theme';
import PlanetSystem from '../components/art/PlanetSystem';
import ThickPaddedCard from '../components/cards/ThickPaddedCard';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';
import FlexCC from '../components/placements/FlexCC';
import SEO from '../components/seo';
import FormHeader from '../containers/FormHeader';
import NotWebAdmin from '../containers/NotWebAdmin';
import WebAdmin from '../containers/WebAdmin';
import addAlpha from '../utils/addAlpha';

const Login = () => {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <SEO title="Backoffice" />
            <FlexCC sx={{ background: colors.darker__card }}>
                <PlanetSystem trigger={isHover}>
                    <ThickPaddedCard
                        elevation={1}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        sx={{
                            padding: '2em',
                            backgroundColor: addAlpha(colors.black, 0.2),
                            backdropFilter: 'grayscale(1) blur(10px)'
                        }}
                    >
                        <ColumnFlexCC>
                            <FormHeader />
                            <WebAdmin />
                            <NotWebAdmin />
                        </ColumnFlexCC>
                    </ThickPaddedCard>
                </PlanetSystem>
            </FlexCC>
        </>
    )
}

export default Login