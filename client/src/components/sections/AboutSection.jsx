import React from 'react';
import SkillBadge from '../badges/SkillBadge';
import {SKILLS} from "../../config/data";

const AboutSection = () =>
    <div className='ms-5 me-5'>
        <p className='text-regular text-light'>
            I'm third year student of <span className='text-info'>Kharkiv National University of Economics</span>,
            majoring in <span className='text-info'>Computer Science.</span> I have
            always been interested in technology and have spent <span
            className='text-info'>5 years studying programming</span>.
            I have tried many programming languages such as <span className='text-info'>Python, C++, C#, JavaScript, Java, Kotlin and even NASM</span>.
            But my first and favorite language is Python, so I decided to become a backend <span
            className='text-info'>Python Developer</span>.
        </p>
        <p className='mt-5 d-flex flex-wrap'>
            {SKILLS.map(skill =>
                <div className='m-1'>
                    <SkillBadge {...skill}/>
                </div>
            )}
        </p>
    </div>

export default AboutSection;