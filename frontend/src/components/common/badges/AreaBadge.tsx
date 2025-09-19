import { Tooltip } from "flowbite-react";
import React from "react";

import { Motion } from "@/components/common/utils";
import { Area } from "@/types";

interface Props {
  area: Area;
}

const skillBadgeVariants = {
  EXPERT: "bg-[#17AA87]",
  INTERMEDIATE: "bg-[#F1C40F]",
  BEGINNER: "bg-[#FF603E]",
};

const skillTooltipVariants = {
  EXPERT: "Expert 😎",
  INTERMEDIATE: "Intermediate 🤓",
  BEGINNER: "Beginner 🙂",
};

export const AreaBadge = ({ area }: Props) => {
  return (
    <Tooltip content={area.name} className="bg-background-light">
      <Motion whileHover={{ scale: 1.05 }}>
        <div className="cursor-pointer text-white">{area.name}</div>
      </Motion>
    </Tooltip>
  );
};
