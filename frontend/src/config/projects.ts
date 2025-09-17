import { SKILLS } from "@/config/skills";
import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    name: "Urbanaut",
    version: "0.0.1",
    image: "/images/project_0.png",
    stars: 1,
    description: "Social network for urban explorers - stalkers, diggers and so on.",
    type: "COMMERCIAL",
    state: "DEVELOPMENT",
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
        icon: "github",
        href: "https://github.com/CrazyProger1/Urbanaut-API",
      },
      {
        icon: "gitlab",
        href: "https://gitlab.com/urbanaut",
      },
    ],
  },
  {
    name: "Simple-XSS",
    version: "0.0.3",
    image: "/images/project_1.png",
    stars: 47,
    description:
      "Simple-XSS is a multi-platform cross-site scripting (XSS) vulnerability exploitation tool for pentesting.",
    type: "opensource",
    state: "production",
    skills: [
      SKILLS.python,
      SKILLS.js,
      SKILLS.html,
      SKILLS.flet,
      SKILLS.websockets,
      SKILLS.jinja2,
      SKILLS.pydantic,
    ],
    links: [
      {
        icon: "github",
        href: "https://github.com/CrazyProger1/Simple-XSS",
      },
    ],
  },
  {
    name: "Translatable-Enums",
    version: "0.0.6",
    image: "/images/project_2.png",
    stars: 2,
    description:
      "Translatable-Enums is an i18n tool which uses built-in Enums as a convenient way to store translation keys.",
    type: "opensource",
    state: "production",
    skills: [SKILLS.python, SKILLS.pytest, SKILLS.poetry],
    links: [
      {
        icon: "github",
        href: "https://github.com/CrazyProger1/Translatable-Enums",
      },
      {
        icon: "pypi",
        href: "https://pypi.org/project/translatable-enums/",
      },
    ],
  },
  {
    name: "Resty-Client",
    version: "0.0.6",
    image: "/images/project_7.png",
    stars: 2,
    description:
      "Resty-Client is a simple, easy-to-use Python library for interacting with REST APIs using Pydantic's powerful data validation and deserialization tools. This library provides an intuitive API that makes it easy to make HTTP requests and handle data on the client side.",
    type: "opensource",
    state: "production",
    skills: [SKILLS.python, SKILLS.pytest, SKILLS.poetry, SKILLS.pydantic],
    links: [
      {
        icon: "github",
        href: "https://github.com/CrazyProger1/Resty-Client",
      },
      {
        icon: "pypi",
        href: "https://pypi.org/project/resty-client/",
      },
    ],
  },
  {
    name: "PC-Alarm",
    version: "0.0.1",
    image: "/images/project_3.png",
    stars: 4,
    description: "PC-Alarm is a tool for remote access to your computer, with alarm function.",
    type: "pet",
    state: "production",
    skills: [SKILLS.python, SKILLS.aiogram, SKILLS.peewee],
    links: [
      {
        icon: "github",
        href: "https://github.com/CrazyProger1/PC-Alarm",
      },
    ],
  },
  {
    name: "Scary-Stories",
    version: "0.0.1",
    image: "/images/project_4.png",
    stars: 2,
    description: "Scary Stories is a simple website for exchange scary stories.",
    type: "pet",
    state: "production",
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
        icon: "github",
        href: "https://github.com/CrazyProger1/ScaryStories",
      },
    ],
  },
  {
    name: "FastPy",
    version: "0.0.0",
    image: "/images/project_5.png",
    stars: 11,
    description: "FastPy is a statically typed programming language with pythonic syntax.",
    type: "pet",
    state: "frozen",
    skills: [SKILLS.python, SKILLS.cpp, SKILLS.jinja2],
    links: [
      {
        icon: "github",
        href: "https://github.com/CrazyProger1/FastPy",
      },
    ],
  },
  {
    name: "ScreenWriter",
    version: "0.0.2",
    image: "/images/project_6.png",
    stars: 4,
    description: "ScreenWriter is a simple util that makes your daily life at university easier.",
    type: "pet",
    state: "production",
    skills: [SKILLS.python, SKILLS.pydantic],
    links: [
      {
        icon: "github",
        href: "https://github.com/CrazyProger1/ScreenWriter",
      },
    ],
  },
];
