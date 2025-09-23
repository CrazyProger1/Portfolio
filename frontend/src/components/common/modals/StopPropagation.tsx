"use client";

import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const StopPropagation = (props: Props) => {
  return <div {...props} onClick={(e) => e.stopPropagation()}></div>;
};
