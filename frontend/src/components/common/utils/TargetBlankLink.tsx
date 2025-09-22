import React from "react";

export const TargetBlankLink = ({
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 underline hover:text-cyan-300"
      {...props}
    />
  );
};
