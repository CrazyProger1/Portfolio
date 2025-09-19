"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  href: string;
  children: React.ReactNode;
};
export const SmoothLink = ({ href, children, ...rest }: Props) => {
  const router = useRouter();

  return (
    <div {...rest} onClick={() => router.push(href, { scroll: false })}>
      {children}
    </div>
  );
};
