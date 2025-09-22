"use client";

import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { MultiIcon } from "@/components/common/icons";
import { Motion } from "@/components/common/utils";
import { HEADER_BRAND, HEADER_NAV_ICONS, HEADER_NAV_LINKS } from "@/config";
import { Icon, UserLink } from "@/types";

type Props = {
  links: UserLink[];
};

const HeaderNavMobile = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="flex flex-row items-center justify-between md:hidden">
      <div className="text-shine text-xl">{HEADER_BRAND}</div>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <nav
        className={`bg-background fixed top-0 right-0 flex h-full w-2/3 transform flex-col gap-8 shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-2">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="flex flex-col gap-4 pl-4">
          {HEADER_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-shine text-md opacity-50 hover:opacity-100"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-2 pl-4">
          {links.map(({ id, name, platform, link }) => (
            <Motion key={id} whileHover={{ scale: 1.1 }}>
              <Link href={link} target="_blank">
                <MultiIcon
                  icon={(platform || name.toLowerCase()) as Icon}
                  size={32}
                  className="icon-shine"
                />
              </Link>
            </Motion>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavMobile;
