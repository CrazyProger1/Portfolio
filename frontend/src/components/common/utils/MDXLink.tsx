import React from "react";

export const MDXLink = ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 underline"
      {...props}
    />
  );
};
