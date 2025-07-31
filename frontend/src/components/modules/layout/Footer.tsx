import Link from "next/link";
import React from "react";

import { MultiIcon } from "@/components/common/icons";
import { Motion } from "@/components/common/utils";
import { FOOTER_NAV_ICONS } from "@/config";

export const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-between py-6">
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
        {FOOTER_NAV_ICONS.map(({ href, icon }) => (
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
