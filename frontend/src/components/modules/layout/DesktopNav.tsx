import Link from "next/link";
import React from "react";

import { MultiIcon } from "@/components/common/icons";
import { Motion } from "@/components/common/utils";
import { HEADER_BRAND, HEADER_NAV_ICONS, HEADER_NAV_LINKS } from "@/config";

const DesktopNav = () => {
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
        {HEADER_NAV_ICONS.map(({ href, icon }) => (
          <Motion key={href} whileHover={{ scale: 1.1 }}>
            <Link href={href} target="_blank">
              <MultiIcon icon={icon} size={32} className="icon-shine" />
            </Link>
          </Motion>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;
