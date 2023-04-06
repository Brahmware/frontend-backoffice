import { Typography } from "@mui/material";
import { Fragment } from "react";
import FlexCC from "../../../components/placements/FlexCC";
import SEO from "../../../components/seo";
import BackOfficeMeta from "../../../utils/BackOfficeMeta";

const Home = () => {
    const pageMeta = new BackOfficeMeta('Home');
    return (
        <Fragment>
            <SEO title={pageMeta.getPageMetaTitle()} />
            <FlexCC sx={{ backgroundColor: 'green' }}>
                <Typography>Home</Typography>
            </FlexCC>
        </Fragment>
    )
}

export default Home