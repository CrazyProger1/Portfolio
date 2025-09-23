import { UserLink } from "@/types";

import HeaderNavDesktop from "./HeaderNavDesktop";
import HeaderNavMobile from "./HeaderNavMobile";

type Props = {
  links: UserLink[];
};

export const Header = ({ links }: Props) => {
  return (
    <header className="py-6 select-none">
      <HeaderNavDesktop links={links} />
      <HeaderNavMobile links={links} />
    </header>
  );
};
