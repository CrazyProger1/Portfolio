import Link from "next/link";

import { MultiIcon } from "@/components/common/icons";
import { HEADER_BRAND, HEADER_NAV_ICONS, HEADER_NAV_LINKS } from "@/config";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between">
      <div className="text-shine cursor-pointer text-xl">{HEADER_BRAND}</div>
      <div className="flex flex-row gap-4">
        {HEADER_NAV_LINKS.map(({ href, text }) => (
          <Link className="text-shine opacity-50 hover:opacity-100" key={href} href={href}>
            {text}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-2">
        {HEADER_NAV_ICONS.map(({ href, icon }) => (
          <Link key={href} href={href}>
            <MultiIcon icon={icon} size={32} className="icon-shine" />
          </Link>
        ))}
      </div>
    </header>
  );
};
