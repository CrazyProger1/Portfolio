import type { IconType } from "react-icons";

export type TLink = {
  href: string;
  name?: string;
  target?: string;
};

export type TIconLink = TLink & {
  icon: IconType;
};
