export type NavLink = {
  href: string;
};

export type HeaderNavLink = {
  text: string;
} & NavLink;

export type HeaderNavIcon = {
  icon: "telegram" | "linkedin" | "github" | "gitlab" | "cv";
} & NavLink;
