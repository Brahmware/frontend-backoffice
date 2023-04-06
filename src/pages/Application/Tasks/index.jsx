import { Typography } from "@mui/material";
import { Fragment } from "react"
import FlexCC from "../../../components/placements/FlexCC";
import SEO from "../../../components/seo"
import BackOfficeMeta from "../../../utils/BackOfficeMeta";


const Tasks = () => {

    const pageMeta = new BackOfficeMeta('Tasks');

    return (
        <Fragment>
            <SEO title={pageMeta.getPageMetaTitle()} />
            <FlexCC sx={{ backgroundColor: 'blue' }}>
                <Typography>Tasks</Typography>
            </FlexCC>
        </Fragment>
    )
}

export default Tasks