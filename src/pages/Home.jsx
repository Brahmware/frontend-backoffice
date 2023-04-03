import React, { Fragment } from 'react'
import Drawer from '../containers/Drawer';

import SEO from '../components/seo'
import BackOfficeLayout from '../layout/BackOfficeLayout';
import BackOfficeMeta from '../utils/BackOfficeMeta'

const Home = () => {
    const pageMeta = new BackOfficeMeta('Home');
    return (
        <Fragment>
            <SEO title={pageMeta.getPageMetaTitle()} />
            <BackOfficeLayout>
                <Drawer />
            </BackOfficeLayout>
        </Fragment>
    )
}

export default Home