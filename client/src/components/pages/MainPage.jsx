import React from 'react';
import PageWrapper from './PageWrapper';
import HorizontalDivider from '../dividers/HorizontalDivider';
import IntroSection from '../sections/IntroSection';
import AboutSection from '../sections/AboutSection';

const MainPage = () =>
    <PageWrapper>
        <div className='mt-5'/>
        <IntroSection/>

        <div className='mt-5' id='about'/>
        <HorizontalDivider section='About'/>
        <AboutSection/>

        <div className='mt-5' id='projects'/>
        <HorizontalDivider section='Projects'/>

        <div className='mt-5' id='contact'/>
        <HorizontalDivider section='Contact Me'/>
    </PageWrapper>

export default MainPage;