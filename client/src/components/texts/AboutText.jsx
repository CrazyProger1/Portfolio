import React from 'react';

const AboutText = () =>
    <div className='text-regular text-light'>
        I'm fourth year student of
        {" "}<a
        href="https://www.hneu.edu.ua/en/"
        target="_blank"
        className=' cursor-pointer text-info'
        rel="noreferrer"
    >
        Kharkiv National University of Economics
    </a>,
        majoring in <span className='text-info'>Computer Science</span>. I have
        always been interested in technology and have spent <span
        className='text-info'>5 years studying programming</span>.
        I have tried many programming languages such as <span className='text-info'>Python, C++, C#, JavaScript, TypeScript, Java, Kotlin and even NASM</span>.
        But my first and favorite language is Python, so my goal is a <span
        className='text-info'>Python Developer role</span> on an interesting and challenging project.
    </div>


export default AboutText;