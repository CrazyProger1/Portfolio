import React from 'react';
import SkillBadge from '../Badges/SkillBadge';

const AboutSection = () => {
    const skills = [
        {
            name: 'Python',
            level: 'success'
        },
        {
            name: 'C++',
            level: 'warning'
        },
        {
            name: 'JavaScript',
            level: 'warning'
        },
        {
            name: 'С#',
            level: 'warning'
        },
        {
            name: 'Kotlin',
            level: 'danger'
        },
        {
            name: 'SQL',
            level: 'success',
        },
        {
            name: 'OOP',
            level: 'success'
        },
        {
            name: 'SOLID',
            level: 'success'
        },
        {
            name: 'REST',
            level: 'success'
        },
        {
            name: 'GIT',
            level: 'success'
        },
        {
            name: 'Django',
            level: 'success'
        },
        {
            name: 'FastAPI',
            level: 'success'
        },
        {
            name: 'Flask',
            level: 'warning'
        },
        {
            name: 'SQLAlchemy',
            level: 'success'
        },
        {
            name: 'Aiogram',
            level: 'success'
        },
        {
            name: 'Telebot',
            level: 'warning'
        },
        {
            name: 'Flet',
            level: 'success'
        },
        {
            name: 'PyQT5',
            level: 'success'
        },
        {
            name: 'Tkinter',
            level: 'success'
        },
        {
            name: 'Pygame',
            level: 'success'
        },
        {
            name: 'Pydantic',
            level: 'success'
        },
        {
            name: 'Pytest',
            level: 'warning'
        },
        {
            name: 'Unittests',
            level: 'success'
        },
        {
            name: 'React JS',
            level: 'warning',
        },
        {
            name: 'PostgreSQL',
            level: 'success'
        },
        {
            name: 'Redis',
            level: 'warning'
        },
        {
            name: 'Mongo DB',
            level: 'warning'
        },


    ];
    return (
        <div className='ms-5 me-5' style={{fontFamily: 'Poppins-Regular'}}>
            <p className='text-light'>
                React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true
                React component, without unneeded dependencies like jQuery.
                As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it
                an
                excellent choice as your UI foundation.
                Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the
                world's
                largest UI ecosystem.
                By relying entirely on the Bootstrap stylesheet, React-Bootstrap just works with the thousands of
                Bootstrap
                themes you already love.
            </p>
            <p className='mt-5 d-flex flex-wrap'>
                {skills.map(skill => <SkillBadge {...skill}/>)}
            </p>

        </div>
    );
};

export default AboutSection;