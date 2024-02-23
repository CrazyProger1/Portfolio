import React from 'react';
import PageWrapper from './PageWrapper';
import HorizontalDivider from '../dividers/HorizontalDivider';

const MainPage = () =>
    <PageWrapper>
        <HorizontalDivider name='About'/>
        <HorizontalDivider name='Projects'/>
        <HorizontalDivider name='Contact Me'/>
    </PageWrapper>

export default MainPage;