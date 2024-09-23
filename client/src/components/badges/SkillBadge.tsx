"use client";
import { motion } from "framer-motion";
import { TSkill } from "@/types/skill";
import { FC } from "react";

interface SkillBadgeProps {
  skill: TSkill;
}

const SkillBadge: FC<SkillBadgeProps> = ({ skill }) => (
  <motion.div className="w-16 h-8" whileHover={{ scale: 1.05 }}>
    {skill.name}
  </motion.div>
);

export default SkillBadge;
