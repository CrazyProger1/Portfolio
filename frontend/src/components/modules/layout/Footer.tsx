import Link from "next/link";
import React from "react";

import { MultiIcon } from "@/components/common/icons";
import { Motion } from "@/components/common/utils";
import { Icon, UserLink } from "@/types";

type Props = {
  links: UserLink[];
};

export const Footer = ({ links }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
      <div className="flex flex-col gap-2">
        <Motion
          whileHover={{ scale: 1.05 }}
          className="text-shine cursor-pointer opacity-50 select-all hover:opacity-100"
        >
          <Link href="tel:+380678814381">+380678814381</Link>
        </Motion>
        <Motion
          whileHover={{ scale: 1.05 }}
          className="text-shine cursor-pointer opacity-50 select-all hover:opacity-100"
        >
          <Link href="mailto:crazyproger1@gmail.com">crazyproger1@gmail.com</Link>
        </Motion>
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
