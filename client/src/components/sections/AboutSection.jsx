import React from 'react';
import SkillTable from '../tables/SkillTable';
import {SKILLS} from '../../config/data';
import AboutText from '../texts/AboutText';

const AboutSection = () =>
    <div className='ms-5 me-5'>
        <AboutText/>
        <div className='mt-5'/>
        <SkillTable skills={Object.values(SKILLS)}/>
    </div>

export default AboutSection;