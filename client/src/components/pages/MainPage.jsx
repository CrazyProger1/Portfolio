import React from 'react';
import PageWrapper from './PageWrapper';
import IntroSection from '../sections/IntroSection';
import HorizontalDivider from '../dividers/HorizontalDivider';
import AboutSection from "../sections/AboutSection";

const MainPage = () =>
    <PageWrapper>
        <IntroSection/>
        <div id='about'/>
        <HorizontalDivider name='About'/>
        <AboutSection/>
        <div id='projects'/>
        <HorizontalDivider name='Projects'/>
        <div id='contact'/>
        <HorizontalDivider name='Contact Me'/>
    </PageWrapper>

export default MainPage;