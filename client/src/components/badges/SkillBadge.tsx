"use client";

import { TSkill } from "@/types/skill";
import { FC } from "react";
import MotionWrapper from "@/components/wrappers/MotionWrapper";

interface SkillBadgeProps {
  skill: TSkill;
}

const SkillBadge: FC<SkillBadgeProps> = ({ skill }) => (
  <MotionWrapper className="w-16 h-8" whileHover={{ scale: 1.05 }}>
    {skill.name}
  </MotionWrapper>
);

export default SkillBadge;
