import React from "react";


const ExperienceText = () =>
    <div className='text-regular text-light'>
        Currently, I'm working at {" "}<a
        href="https://dzencode.com/en"
        target="_blank"
        className=' cursor-pointer text-info'
        rel="noreferrer"
    >
        dZENcode
    </a> company as a <span className="text-info">Backend Python Developer</span>. For my work, the most common
        technologies are <span className="text-info">Python, Django, FastAPI, gRPC, Websockets, Aiogram, Telegram Mini Apps, Django Rest Framework, SQLAlchemy, Celery, PostgreSQL, Docker</span>.
    </div>
export default ExperienceText;