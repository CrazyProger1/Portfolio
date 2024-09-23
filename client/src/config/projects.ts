import { SKILLS } from "@/config/skills";
import { ProjectType, TProject } from "@/types/project";
import { FaGithub } from "react-icons/fa";
import { SiPypi } from "react-icons/si";

export const PROJECTS: Array<TProject> = [
  {
    name: "Simple-XSS",
    version: "0.0.3",
    image: process.env.PUBLIC_URL + "/images/project_1.png",
    stars: 45,
    description:
      "Simple-XSS is a multi-platform cross-site scripting (XSS) vulnerability exploitation tool for pentesting.",
    type: ProjectType.PET,
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
        icon: FaGithub,
        href: "https://github.com/CrazyProger1/Simple-XSS",
      },
    ],
  },
  {
    name: "Translatable-Enums",
    version: "0.0.6",
    image: process.env.PUBLIC_URL + "/images/project_2.png",
    stars: 2,
    description:
      "Translatable-Enums is an i18n tool which uses built-in Enums as a convenient way to store translation keys.",
    type: ProjectType.OPENSOURCE,
    skills: [SKILLS.python, SKILLS.pytest, SKILLS.poetry],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/CrazyProger1/Translatable-Enums",
      },
      {
        icon: SiPypi,
        href: "https://pypi.org/project/translatable-enums/",
      },
    ],
  },
  {
    name: "Resty-Client",
    version: "0.0.6",
    image: process.env.PUBLIC_URL + "/images/project_7.png",
    stars: 2,
    description:
      "Resty-Client is a simple, easy-to-use Python library for interacting with REST APIs using Pydantic's powerful data validation and deserialization tools. This library provides an intuitive API that makes it easy to make HTTP requests and handle data on the client side.",
    type: ProjectType.OPENSOURCE,
    skills: [SKILLS.python, SKILLS.pytest, SKILLS.poetry, SKILLS.pydantic],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/CrazyProger1/Resty-Client",
      },
      {
        icon: SiPypi,
        href: "https://pypi.org/project/resty-client/",
      },
    ],
  },
  {
    name: "PC-Alarm",
    version: "0.0.1",
    image: process.env.PUBLIC_URL + "/images/project_3.png",
    stars: 4,
    description:
      "PC-Alarm is a tool for remote access to your computer, with alarm function.",
    type: ProjectType.PET,
    skills: [SKILLS.python, SKILLS.aiogram, SKILLS.peewee],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/CrazyProger1/PC-Alarm",
      },
    ],
  },
  {
    name: "Scary-Stories",
    version: "0.0.1",
    image: process.env.PUBLIC_URL + "/images/project_4.png",
    stars: 2,
    description:
      "Scary Stories is a simple website for exchange scary stories.",
    type: ProjectType.PET,
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
        icon: FaGithub,
        href: "https://github.com/CrazyProger1/ScaryStories",
      },
    ],
  },
  {
    name: "FastPy",
    version: "0.0.0",
    image: process.env.PUBLIC_URL + "/images/project_5.png",
    stars: 11,
    description:
      "FastPy is a statically typed programming language with pythonic syntax.",
    type: ProjectType.PET,
    skills: [SKILLS.python, SKILLS.cpp, SKILLS.jinja2],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/CrazyProger1/FastPy",
      },
    ],
  },
  {
    name: "ScreenWriter",
    version: "0.0.2",
    image: process.env.PUBLIC_URL + "/images/project_6.png",
    stars: 4,
    description:
      "ScreenWriter is a simple util that makes your daily life at university easier.",
    type: ProjectType.PET,
    skills: [SKILLS.python, SKILLS.pydantic],
    links: [
      {
        icon: FaGithub,
        href: "https://github.com/CrazyProger1/ScreenWriter",
      },
    ],
  },
];
