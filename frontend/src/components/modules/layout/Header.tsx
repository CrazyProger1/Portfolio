import HeaderNavDesktop from "./HeaderNavDesktop";
import HeaderNavMobile from "./HeaderNavMobile";

export const Header = () => {
  return (
    <header className="py-6 select-none">
      <HeaderNavDesktop />
      <HeaderNavMobile />
    </header>
  );
};
