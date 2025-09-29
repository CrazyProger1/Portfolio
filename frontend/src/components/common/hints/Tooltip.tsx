"use client";
import React, { HTMLAttributes } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

type Props = HTMLAttributes<HTMLDivElement> & {
  tooltipId: string | number;
  children: React.ReactNode;
  content?: React.ReactNode;
};

export const Tooltip = ({ tooltipId, children, content, ...props }: Props) => {
  const uniqueId = `tooltip-${tooltipId}`;

  return (
    <div id={uniqueId} {...props}>
      <ReactTooltip className="!bg-tooltip !rounded-lg" anchorSelect={`#${uniqueId}`}>
        {content}
      </ReactTooltip>
      {children}
    </div>
  );
};
