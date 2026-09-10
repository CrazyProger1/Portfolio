import { UserLink } from "@/types";

import HeaderNavDesktop from "./HeaderNavDesktop";
import HeaderNavMobile from "./HeaderNavMobile";

type Props = {
  links: UserLink[];
};

export const Header = ({ links }: Props) => {
  return (
    <header className="flex h-[var(--header-height)] items-center select-none">
      <HeaderNavDesktop links={links} />
      <HeaderNavMobile links={links} />
    </header>
  );
};
