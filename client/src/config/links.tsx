import { TIconLink, TLink } from "@/types/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export const HEADER_SOCIAL_NAVBAR_LINKS: Array<TIconLink> = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/CrazyProger1",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nikolay-hetman-366933221/",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    href: "https://t.me/crazyproger1",
  },
];
export const HEADER_PAGE_NAVBAR_LINKS: Array<TLink> = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Projects",
    href: "/",
  },
  {
    name: "Contact Me",
    href: "/",
  },
];

export const FOOTER_SOCIAL_NAVBAR_LINKS = HEADER_SOCIAL_NAVBAR_LINKS;
