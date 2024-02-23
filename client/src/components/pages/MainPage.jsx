import React from 'react';
import PageWrapper from './PageWrapper';
import HorizontalDivider from '../dividers/HorizontalDivider';
import IntroSection from '../sections/IntroSection';

const MainPage = () =>
    <PageWrapper>
        <IntroSection/>
        <HorizontalDivider section='About'/>
        <HorizontalDivider section='Projects'/>
        <HorizontalDivider section='Contact Me'/>
    </PageWrapper>

export default MainPage;