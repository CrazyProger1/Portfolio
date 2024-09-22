import { FC } from "react";
import { TIconLink } from "@/types/link";
import Link from "next/link";

type TSocialNavbarProps = {
  links: TIconLink[];
  className?: string;
  linkClassName?: string;
  iconSize?: string | number;
};

const SocialNavbar: FC<TSocialNavbarProps> = ({
  links,
  className,
  linkClassName,
  iconSize,
}) => (
  <div className={className}>
    {links.map((link) => {
      const Icon = link.icon;
      return (
        <Link
          className={linkClassName}
          href={link.href}
          key={link.href}
          target={link.target ? link.target : "_blank"}
        >
          <Icon size={iconSize} />
        </Link>
      );
    })}
  </div>
);

export default SocialNavbar;
