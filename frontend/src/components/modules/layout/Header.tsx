import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-6 select-none">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};
