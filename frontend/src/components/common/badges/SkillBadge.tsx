import { Tooltip } from "flowbite-react";
import React from "react";

import { Motion } from "@/components/common/utils";
import { Skill } from "@/types";

interface Props {
  skill: Skill;
}
const skillBadgeVariants = {
  expert: "bg-[#17AA87]",
  intermediate: "bg-[#F1C40F]",
  beginner: "bg-[#FF603E]",
};

const skillTooltipVariants = {
  expert: "Expert 😎",
  intermediate: "Intermediate 🤓",
  beginner: "Beginner 🙂",
};

export const SkillBadge = ({ skill }: Props) => {
  const level = skill.level;
  const badgeColor = skillBadgeVariants[level];

  return (
    <Tooltip content={skillTooltipVariants[level]} className="bg-blue-950">
      <Motion whileHover={{ scale: 1.05 }}>
        <div className="icon-shine inline-flex text-sm font-medium select-none">
          <div className="cursor-pointer rounded-l border border-blue-950 bg-blue-950 px-0.5 py-0.5 text-white">
            #
          </div>
          <div
            className={`cursor-pointer rounded-r border border-l-0 border-blue-950 px-2 py-0.5 text-black ${badgeColor}`}
          >
            {skill?.name}
          </div>
        </div>
      </Motion>
    </Tooltip>
  );
};
