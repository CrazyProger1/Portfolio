export const BRAND = process.env.REACT_APP_BRAND;

// Social network links
export const GITHUB_LINK = process.env.REACT_APP_GITHUB_LINK;
export const LINKEDIN_LINK = process.env.REACT_APP_LINKEDIN_LINK;
export const TELEGRAM_LINK = process.env.REACT_APP_TELEGRAM_LINK;
export const CV_DOWNLOAD_LINK = '/files/CV.pdf'

export const PHONE = process.env.REACT_APP_PHONE;
export const EMAIL = process.env.REACT_APP_EMAIL;

export const ME_PHOTO = process.env.PUBLIC_URL + '/images/me.jpg'

export const PROJECT_TYPES = {
    pet: 'Pet',
    opensource: 'Open-Source',
}


export const SKILLS = {
    python: {
        name: 'Python',
        level: 'advanced'
    },
    cpp: {
        name: 'C++',
        level: 'intermediate'
    },
    js: {
        name: 'JavaScript',
        level: 'intermediate'
    },
    ts: {
        name: 'TypeScript',
        level: 'intermediate'
    },
    csharp: {
        name: 'С#',
        level: 'intermediate'
    },
    kotlin: {
        name: 'Kotlin',
        level: 'basic'
    },
    html: {
        name: 'HTML',
        level: 'intermediate'
    },
    css: {
        name: 'CSS',
        level: 'intermediate'
    },
    sql: {
        name: 'SQL',
        level: 'advanced',
    },
    oop: {
        name: 'OOP',
        level: 'advanced'
    },
    solid: {
        name: 'SOLID',
        level: 'advanced'
    },
    rest: {
        name: 'REST',
        level: 'advanced'
    },
    gitlab: {
        name: 'GitLab',
        level: 'advanced'
    },
    github: {
        name: 'GitHub',
        level: 'advanced'
    },
    bitbucket: {
        name: 'Bitbucket',
        level: 'advanced',
    },
    gitlab_cicd: {
        name: 'GitLab CI-CD',
        level: 'intermediate',
    },
    github_actions: {
        name: 'GitHub Actions',
        level: 'intermediate',
    },
    django: {
        name: 'Django',
        level: 'advanced'
    },
    drf: {
        name: 'Django Rest Framework',
        level: 'advanced'
    },
    fastapi: {
        name: 'FastAPI',
        level: 'advanced'
    },
    flask: {
        name: 'Flask',
        level: 'intermediate'
    },
    websockets: {
        name: 'Websockets',
        level: 'advanced'
    },
    grpc: {
        name: 'gRPC',
        level: 'intermediate'
    },
    sqlalchemy: {
        name: 'SQLAlchemy',
        level: 'advanced'
    },
    peewee: {
        name: 'Peewee',
        level: 'advanced'
    },
    celery: {
        name: 'Celery',
        level: 'advanced'
    },
    jinja2: {
        name: 'Jinja 2',
        level: 'advanced'
    },
    bs4: {
        name: 'BeautifulSoup 4',
        level: 'advanced'
    },
    aiogram: {
        name: 'Aiogram',
        level: 'advanced'
    },
    telebot: {
        name: 'Telebot',
        level: 'intermediate'
    },
    flet: {
        name: 'Flet',
        level: 'advanced'
    },
    pyqt5: {
        name: 'PyQT 5',
        level: 'advanced'
    },
    tkinter: {
        name: 'Tkinter',
        level: 'advanced'
    },
    pygame: {
        name: 'Pygame',
        level: 'advanced'
    },
    pydantic: {
        name: 'Pydantic',
        level: 'advanced'
    },
    selenium: {
        name: 'Selenium',
        level: 'intermediate'
    },
    pytest: {
        name: 'Pytest',
        level: 'advanced'
    },
    unittests: {
        name: 'Unittests',
        level: 'advanced'
    },
    poetry: {
        name: 'Poetry',
        level: 'advanced'
    },
    react: {
        name: 'React.js',
        level: 'advanced',
    },
    next: {
        name: 'Next.js',
        level: 'intermediate'
    },
    bootstrap: {
        name: 'Bootstrap',
        level: 'intermediate'
    },
    tailwind: {
        name: 'Tailwind CSS',
        level: 'intermediate'
    },
    mobx: {
        name: 'MobX',
        level: 'intermediate'
    },
    zustand: {
        name: 'Zustand',
        level: 'intermediate'
    },
    tgminiapps: {
        name: 'Telegram Mini Apps',
        level: 'intermediate'
    },
    postgres: {
        name: 'PostgreSQL',
        level: 'advanced'
    },
    redis: {
        name: 'Redis',
        level: 'intermediate'
    },

    mongo: {
        name: 'Mongo DB',
        level: 'intermediate'
    },
    docker: {
        name: 'Docker',
        level: 'intermediate'
    },
    nginx: {
        name: 'Nginx',
        level: 'intermediate'
    }
}

export const PROJECTS = [
    {
        name: 'Urbanaut',
        version: '0.0.1',
        image: process.env.PUBLIC_URL + '/images/project_0.png',
        stars: 1,
        description: 'Social network for urban explorers - stalkers, diggers and so on.',
        type: PROJECT_TYPES.pet,
        skills: [
            SKILLS.python,
            SKILLS.js,
            SKILLS.ts,
            SKILLS.html,
            SKILLS.django,
            SKILLS.drf,
            SKILLS.celery,
            SKILLS.next,
            SKILLS.react,
            SKILLS.tailwind,
            SKILLS.zustand,
            SKILLS.gitlab_cicd,
            SKILLS.github_actions,
            SKILLS.postgres,
            SKILLS.nginx,
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/Urbanaut-API',
            },
            {
                site: 'gitlab',
                link: 'https://gitlab.com/urbanaut',
            }
        ]
    },
    {
        name: 'Simple-XSS',
        version: '0.0.3',
        image: process.env.PUBLIC_URL + '/images/project_1.png',
        stars: 47,
        description: 'Simple-XSS is a multi-platform cross-site scripting (XSS) vulnerability exploitation tool for pentesting.',
        type: PROJECT_TYPES.pet,
        skills: [
            SKILLS.python,
            SKILLS.js,
            SKILLS.html,
            SKILLS.flet,
            SKILLS.websockets,
            SKILLS.jinja2,
            SKILLS.pydantic
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
        version: '0.0.6',
        image: process.env.PUBLIC_URL + '/images/project_2.png',
        stars: 2,
        description: 'Translatable-Enums is an i18n tool which uses built-in Enums as a convenient way to store translation keys.',
        type: PROJECT_TYPES.opensource,
        skills: [
            SKILLS.python,
            SKILLS.pytest,
            SKILLS.poetry,
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
        name: 'Resty-Client',
        version: '0.0.6',
        image: process.env.PUBLIC_URL + '/images/project_7.png',
        stars: 2,
        description: 'Resty-Client is a simple, easy-to-use Python library for interacting with REST APIs using Pydantic\'s powerful data validation and deserialization tools. This library provides an intuitive API that makes it easy to make HTTP requests and handle data on the client side.',
        type: PROJECT_TYPES.opensource,
        skills: [
            SKILLS.python,
            SKILLS.pytest,
            SKILLS.poetry,
            SKILLS.pydantic,
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/Resty-Client',
            },
            {
                site: 'pypi',
                link: 'https://pypi.org/project/resty-client/'
            }
        ]
    },
    {
        name: 'PC-Alarm',
        version: '0.0.1',
        image: process.env.PUBLIC_URL + '/images/project_3.png',
        stars: 4,
        description: 'PC-Alarm is a tool for remote access to your computer, with alarm function.',
        type: PROJECT_TYPES.pet,
        skills: [
            SKILLS.python,
            SKILLS.aiogram,
            SKILLS.peewee
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
        stars: 2,
        description: 'Scary Stories is a simple website for exchange scary stories.',
        type: PROJECT_TYPES.pet,
        skills: [
            SKILLS.python,
            SKILLS.js,
            SKILLS.react,
            SKILLS.bootstrap,
            SKILLS.fastapi,
            SKILLS.pydantic,
            SKILLS.postgres,

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
        type: PROJECT_TYPES.pet,
        skills: [
            SKILLS.python,
            SKILLS.cpp,
            SKILLS.jinja2
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
        stars: 4,
        description: 'ScreenWriter is a simple util that makes your daily life at university easier.',
        type: PROJECT_TYPES.pet,
        skills: [
            SKILLS.python,
            SKILLS.pydantic
        ],
        links: [
            {
                site: 'github',
                link: 'https://github.com/CrazyProger1/ScreenWriter',
            },
        ]
    },
]