"use client";

import { FC } from "react";
import Link from "next/link";

interface BrandProps {
  text: string;
}

const Brand: FC<BrandProps> = ({ text }) => {
  return (
    <Link
      className="header-link text-secondary font-primary text-xl drop-shadow-[0px_0px_3px_rgba(255,255,255,0.5)] hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.5)]"
      href="/"
    >
      {text}
    </Link>
  );
};

export default Brand;
