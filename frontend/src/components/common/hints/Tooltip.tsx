"use client";
import React, { HTMLAttributes } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
  tooltipId: string | number;
  children: React.ReactNode;
  content?: React.ReactNode;
  className?: string;
};

export const Tooltip = ({ tooltipId, children, content, className, ...props }: Props) => {
  const uniqueId = `tooltip-${tooltipId}`;

  return (
    <div id={uniqueId} className="w-fit" {...props}>
      <ReactTooltip
        className={`!bg-tooltip !rounded-lg ${className ?? ""}`}
        anchorSelect={`#${uniqueId}`}
      >
        {content}
      </ReactTooltip>
      {children}
    </div>
  );
};
