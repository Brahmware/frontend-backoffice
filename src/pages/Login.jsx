import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { colors } from '../brahmwareTheme/theme';
import PlanetSystem from '../components/art/PlanetSystem';
import ThickPaddedCard from '../components/cards/ThickPaddedCard';
import MinuteClock from '../components/Clocks/MinuteClock';
import ColumnFlexCC from '../components/placements/ColumnFlexCC';
import ColumnFlexSC from '../components/placements/ColumnFlexSC';
import FlexCC from '../components/placements/FlexCC';
import FlexEE from '../components/placements/FlexEE';
import SEO from '../components/seo';
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
                            backdropFilter: 'blur(10px) grayscale(1)'
                        }}
                    >
                        <ColumnFlexCC>
                            <FlexEE>
                                <ColumnFlexSC pb={'1em'}>
                                    <Typography fontWeight={'thin'} fontSize={'0.75em'} pl='0.125em'>Welcome to</Typography>
                                    <Typography color='primary' variant='h3' component='h3' fontSize={'2em'} fontWeight='medium'>Brahmware</Typography>
                                    <Typography variant='h6' component='h6' pl='0.125em' fontSize={'1.25em'}>Backoffice</Typography>
                                </ColumnFlexSC>
                                <MinuteClock />
                            </FlexEE>
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