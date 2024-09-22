import SocialNavbar from "@/components/bars/SocialNavbar";
import {
  HEADER_PAGE_NAVBAR_LINKS,
  HEADER_SOCIAL_NAVBAR_LINKS,
} from "@/config/links";
import Link from "next/link";
import PageNavbar from "@/components/bars/PageNavbar";

const Header = () => (
  <div className="bg-primary">
    <div className="container flex flex-row justify-between items-center pt-6 pb-6 select-none">
      <Link
        className="header-link text-secondary font-primary text-xl drop-shadow-[0px_0px_3px_rgba(255,255,255,0.5)] hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)]"
        href="/"
      >
        crazyproger1
      </Link>
      <PageNavbar
        className="flex flex-row justify-between font-primary text-md gap-6"
        linkClassName="header-link text-secondary-dark hover:text-secondary drop-shadow-[0px_0px_3px_rgba(255,255,255,0.3)] hover:scale-110 hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)]"
        links={HEADER_PAGE_NAVBAR_LINKS}
      />
      <SocialNavbar
        className="flex flex-row text-secondary gap-4"
        linkClassName="header-link hover:text-secondary drop-shadow-[0px_0px_3px_rgba(255,255,255,0.1)] hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)]"
        links={HEADER_SOCIAL_NAVBAR_LINKS}
        iconSize={32}
      />
    </div>
  </div>
);

export default Header;
