import React from 'react';
import SkillsTable from '../tables/SkillsTable';
import {SKILLS} from '../../config/data';
import AboutText from '../texts/AboutText';

const AboutSection = () =>
    <div className='ms-5 me-5'>
        <AboutText/>
        <div className='mt-3'/>
        <SkillsTable skills={SKILLS}/>
    </div>

export default AboutSection;