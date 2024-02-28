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
        level: 'advanced'
    },
    {
        name: 'C++',
        level: 'intermediate'
    },
    {
        name: 'JavaScript',
        level: 'intermediate'
    },
    {
        name: 'С#',
        level: 'intermediate'
    },
    {
        name: 'Kotlin',
        level: 'basic'
    },
    {
        name: 'HTML',
        level: 'intermediate'
    },
    {
        name: 'CSS',
        level: 'intermediate'
    },
    {
        name: 'SQL',
        level: 'advanced',
    },
    {
        name: 'OOP',
        level: 'advanced'
    },
    {
        name: 'SOLID',
        level: 'advanced'
    },
    {
        name: 'REST',
        level: 'advanced'
    },
    {
        name: 'GIT',
        level: 'advanced'
    },
    {
        name: 'Django',
        level: 'advanced'
    },
    {
        name: 'Django Rest Framework',
        level: 'advanced'
    },
    {
        name: 'FastAPI',
        level: 'advanced'
    },
    {
        name: 'Flask',
        level: 'intermediate'
    },
    {
        name: 'SQLAlchemy',
        level: 'advanced'
    },
    {
        name: 'Peewee',
        level: 'advanced'
    },
    {
        name: 'Jinja 2',
        level: 'advanced'
    },
    {
        name: 'BeautifulSoup 4',
        level: 'advanced'
    },
    {
        name: 'Aiogram',
        level: 'advanced'
    },
    {
        name: 'Telebot',
        level: 'intermediate'
    },
    {
        name: 'Flet',
        level: 'advanced'
    },
    {
        name: 'PyQT 5',
        level: 'advanced'
    },
    {
        name: 'Tkinter',
        level: 'advanced'
    },
    {
        name: 'Pygame',
        level: 'advanced'
    },
    {
        name: 'Pydantic',
        level: 'advanced'
    },
    {
        name: 'Pytest',
        level: 'intermediate'
    },
    {
        name: 'Unittests',
        level: 'advanced'
    },
    {
        name: 'React JS',
        level: 'intermediate',
    },
    {
        name: 'Bootstrap',
        level: 'intermediate'
    },
    {
        name: 'PostgreSQL',
        level: 'advanced'
    },
    {
        name: 'Redis',
        level: 'intermediate'
    },
    {
        name: 'Mongo DB',
        level: 'intermediate'
    },
    {
        name: 'Docker',
        level: 'intermediate'
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