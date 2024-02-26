import React from 'react';
import PageWrapper from './PageWrapper';
import HorizontalDivider from '../dividers/HorizontalDivider';
import IntroSection from '../sections/IntroSection';
import AboutSection from '../sections/AboutSection';
import ProjectsSection from '../sections/ProjectsSection';
import ContactMeSection from '../sections/ContactMeSection';

const MainPage = () =>
    <PageWrapper>
        <div className='mt-5'/>
        <IntroSection/>

        <div className='mt-5' id='about'/>
        <HorizontalDivider section='About'/>
        <div className='mt-3'/>
        <AboutSection/>

        <div className='mt-5' id='projects'/>
        <HorizontalDivider section='Projects'/>
        <div className='mt-3'/>
        <ProjectsSection/>

        <div className='mt-5' id='contact'/>
        <HorizontalDivider section='Contact Me'/>
        <div className='mt-3'/>
        <ContactMeSection/>
    </PageWrapper>

export default MainPage;