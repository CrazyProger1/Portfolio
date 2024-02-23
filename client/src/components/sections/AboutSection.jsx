import React from 'react';
import SkillBadge from '../badges/SkillBadge';

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
            name: 'Peewee',
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
            name: 'Bootstrap',
            level: 'success'
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
        {
            name: 'Docker',
            level: 'success'
        },


    ];
    return (
        <div className='ms-5 me-5' style={{fontFamily: 'Poppins-Regular'}}>
            <p className='text-light'>
                I'm third year student of <span className='text-info'>Kharkiv National University of Economics</span>,
                majoring in <span className='text-info'>Computer Science.</span> I have
                always been interested in technology and have spent <span className='text-info'>5 years studying programming</span>.
                I have
                tried many
                programming languages such as <span className='text-info'>Python, C++, C#, JavaScript, Java, Kotlin and even NASM</span>.
                But my first and
                favorite language is Python, so I decided to become a backend <span className='text-info'>Python Developer</span>.

                {/*I'm third year student of Kharkiv National University of Economics,*/}
                {/*majoring in Computer Science. I have*/}
                {/*always been interested in technology and have spent 5 years studying programming.*/}
                {/*I have*/}
                {/*tried many*/}
                {/*programming languages such as Python, C++, C#, JavaScript, Java, Kotlin and even NASM.*/}
                {/*But my first and*/}
                {/*favorite language is Python, so I decided to become a backend Python Developer.*/}
            </p>
            <p className='mt-5 d-flex flex-wrap'>
                {skills.map(skill => <SkillBadge {...skill}/>)}
            </p>

        </div>
    );
};

export default AboutSection;