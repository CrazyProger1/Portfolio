import React from 'react';
import PageWrapper from './PageWrapper';
import IntroSection from '../sections/IntroSection';
import HorizontalDivider from '../dividers/HorizontalDivider';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactSection from '../sections/ContactSection';

const MainPage = () =>
    <PageWrapper>
        <IntroSection/>
        <div id='about'/>
        <HorizontalDivider name='About'/>
        <AboutSection/>
        <div id='projects'/>
        <HorizontalDivider name='Projects'/>
        <ProjectsSection/>
        <div id='contact'/>
        <HorizontalDivider name='Contact Me'/>
        <ContactSection/>
    </PageWrapper>

export default MainPage;