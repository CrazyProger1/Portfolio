export const BRAND = process.env.REACT_APP_BRAND;

// Social network links
export const GITHUB_LINK = process.env.REACT_APP_GITHUB_LINK;
export const LINKEDIN_LINK = process.env.REACT_APP_LINKEDIN_LINK;
export const TELEGRAM_LINK = process.env.REACT_APP_TELEGRAM_LINK;

export const PHONE = process.env.REACT_APP_PHONE;
export const EMAIL = process.env.REACT_APP_EMAIL;

export const ME_PHOTO = process.env.PUBLIC_URL + '/images/me.jpg'

export const SKILLS = [
    {
        name: 'Python',
        level: 'high'
    },
    {
        name: 'C++',
        level: 'middle'
    },
    {
        name: 'JavaScript',
        level: 'middle'
    },
    {
        name: 'С#',
        level: 'middle'
    },
    {
        name: 'Kotlin',
        level: 'low'
    },
    {
        name: 'SQL',
        level: 'high',
    },
    {
        name: 'OOP',
        level: 'high'
    },
    {
        name: 'SOLID',
        level: 'high'
    },
    {
        name: 'REST',
        level: 'high'
    },
    {
        name: 'GIT',
        level: 'high'
    },
    {
        name: 'Django',
        level: 'high'
    },
    {
        name: 'FastAPI',
        level: 'high'
    },
    {
        name: 'Flask',
        level: 'middle'
    },
    {
        name: 'SQLAlchemy',
        level: 'high'
    },
    {
        name: 'Peewee',
        level: 'high'
    },
    {
        name: 'Aiogram',
        level: 'high'
    },
    {
        name: 'Telebot',
        level: 'middle'
    },
    {
        name: 'Flet',
        level: 'high'
    },
    {
        name: 'PyQT5',
        level: 'high'
    },
    {
        name: 'Tkinter',
        level: 'high'
    },
    {
        name: 'Pygame',
        level: 'high'
    },
    {
        name: 'Pydantic',
        level: 'high'
    },
    {
        name: 'Pytest',
        level: 'middle'
    },
    {
        name: 'Unittests',
        level: 'high'
    },
    {
        name: 'React JS',
        level: 'middle',
    },
    {
        name: 'Bootstrap',
        level: 'middle'
    },
    {
        name: 'PostgreSQL',
        level: 'high'
    },
    {
        name: 'Redis',
        level: 'middle'
    },
    {
        name: 'Mongo DB',
        level: 'middle'
    },
    {
        name: 'Docker',
        level: 'high'
    },
]

export const PROJECTS = [
    {
        name: 'Simple-XSS',
        version: '0.0.2',
        image: 'https://github.com/CrazyProger1/Simple-XSS/blob/master/resources/images/v0.3.png?raw=true',
        stars: 45,
        description: 'Simple-XSS is a multi-platform cross-site scripting (XSS) vulnerability exploitation tool for pentesting.',
        skills: [
            SKILLS[0],
            SKILLS[2],
            SKILLS[17]
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/Simple-XSS',
            }
        ]
    },
    {
        name: 'Translatable-Enums',
        version: '0.0.3',
        image: process.env.PUBLIC_URL + '/images/project_2.png',
        stars: 2,
        description: 'Translatable-Enums is an i18n tool which uses built-in Enums as a convenient way to store translation keys.',
        skills: [
            SKILLS[0],
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/Translatable-Enums',
            },
            {
                site: 'pypi',
                link: 'https://pypi.org/project/translatable-enums/'
            }
        ]
    },
    {
        name: 'PC-Alarm',
        version: '0.0.1',
        image: process.env.PUBLIC_URL + '/images/project_3.png',
        stars: 4,
        description: 'PC-Alarm is a tool for remote access to your computer, with alarm function.',
        skills: [
            SKILLS[0],
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/PC-Alarm',
            },
        ]
    },
    {
        name: 'Scary-Stories',
        version: '0.0.1',
        image: process.env.PUBLIC_URL + '/images/project_4.png',
        stars: 1,
        description: 'Scary Stories is a simple website for exchange scary stories.',
        skills: [
            SKILLS[0],
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/ScaryStories',
            },
        ]
    },
    {
        name: 'FastPy',
        version: '0.0.0',
        image: process.env.PUBLIC_URL + '/images/project_5.png',
        stars: 11,
        description: 'FastPy is a statically typed programming language with pythonic syntax.',
        skills: [
            SKILLS[0],
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/FastPy',
            },
        ]
    },
    {
        name: 'ScreenWriter',
        version: '0.0.2',
        image: process.env.PUBLIC_URL + '/images/project_6.png',
        stars: 3,
        description: 'ScreenWriter is a simple util that makes your daily life at university easier.',
        skills: [
            SKILLS[0],
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/ScreenWriter',
            },
        ]
    },
]