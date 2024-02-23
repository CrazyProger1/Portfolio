import React from 'react';
import PageWrapper from './PageWrapper';
import HorizontalDivider from '../dividers/HorizontalDivider';
import IntroSection from '../sections/IntroSection';

const MainPage = () =>
    <PageWrapper>
        <div className='mt-5'/>
        <IntroSection/>
        <div className='mt-5' id='about'/>
        <HorizontalDivider section='About'/>
        <HorizontalDivider section='Projects'/>
        <HorizontalDivider section='Contact Me'/>
    </PageWrapper>

export default MainPage;