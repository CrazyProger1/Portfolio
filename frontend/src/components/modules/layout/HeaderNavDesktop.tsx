import Link from "next/link";
import React from "react";

import { MultiIcon } from "@/components/common/icons";
import { Motion } from "@/components/common/utils";
import { HEADER_BRAND, HEADER_NAV_LINKS } from "@/config";
import { Icon, UserLink } from "@/types";

type Props = {
  links: UserLink[];
};

const HeaderNavDesktop = ({ links }: Props) => {
  return (
    <div className="hidden flex-row items-center justify-between md:flex">
      <Motion whileHover={{ scale: 1.05 }} className="text-shine cursor-pointer text-xl">
        {HEADER_BRAND}
      </Motion>

      <div className="flex flex-row gap-4">
        {HEADER_NAV_LINKS.map(({ href, text }) => (
          <Motion key={href} whileHover={{ scale: 1.1 }}>
            <Link className="text-shine opacity-50 hover:opacity-100" href={href}>
              {text}
            </Link>
          </Motion>
        ))}
      </div>
      <div className="flex flex-row gap-2">
        {links.map(({ id, name, platform, link }) => (
          <Motion key={id} whileHover={{ scale: 1.1 }}>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${platform || name}`}
            >
              <MultiIcon
                icon={(platform || name.toLowerCase()) as Icon}
                size={32}
                className="icon-shine"
              />
            </Link>
          </Motion>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavDesktop;
