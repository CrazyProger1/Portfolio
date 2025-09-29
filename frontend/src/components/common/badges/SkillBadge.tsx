import React from "react";

import { Tooltip } from "@/components/common/hints";
import { Motion } from "@/components/common/utils";
import { Skill } from "@/types";

interface Props {
  skill: Skill;
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

export const SkillBadge = ({ skill }: Props) => {
  const level = skill.level;
  const badgeColor = skillBadgeVariants[level];

  return (
    <Tooltip
      tooltipId={skill.id}
      content={skillTooltipVariants[level]}
      className="bg-background-light"
    >
      <Motion whileHover={{ scale: 1.05 }}>
        <div className="icon-shine inline-flex text-sm font-medium select-none">
          <div className="border-background-light bg-background-light cursor-pointer rounded-l border px-0.5 py-0.5 text-white">
            #
          </div>
          <div
            className={`border-background-light cursor-pointer rounded-r border border-l-0 px-2 py-0.5 text-black ${badgeColor}`}
          >
            {skill?.name}
          </div>
        </div>
      </Motion>
    </Tooltip>
  );
};
