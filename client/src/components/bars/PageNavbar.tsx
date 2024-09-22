import { FC } from "react";
import { TLink } from "@/types/link";
import Link from "next/link";

type TPageNavbarProps = {
  className?: string;
  linkClassName?: string;
  links: TLink[];
};
const PageNavbar: FC<TPageNavbarProps> = ({
  className,
  links,
  linkClassName,
}) => (
  <div className={className}>
    {links.map((link) => (
      <Link className={linkClassName} href={link.href} key={link.href}>
        {link.name}
      </Link>
    ))}
  </div>
);

export default PageNavbar;
