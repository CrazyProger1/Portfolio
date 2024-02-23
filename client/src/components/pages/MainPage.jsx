import React from 'react';
import PageWrapper from './PageWrapper';
import HorizontalDivider from '../dividers/HorizontalDivider';

const MainPage = () =>
    <PageWrapper>
        <HorizontalDivider section='About'/>
        <HorizontalDivider section='Projects'/>
        <HorizontalDivider section='Contact Me'/>
    </PageWrapper>

export default MainPage;