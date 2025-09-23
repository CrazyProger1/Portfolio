import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

import { MDXLink } from "./MDXLink";

interface Props {
  source: string;
}

export const MDXRender = ({ source }: Props) => {
  const components = {
    a: MDXLink,
  };

  return (
    <div className="prose prose-dark-modern w-full max-w-full overflow-hidden break-words">
      <MDXRemote source={source as string} components={components} />
    </div>
  );
};
