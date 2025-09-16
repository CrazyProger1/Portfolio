import Link from "next/link";
import React from "react";

import { SkillBadge } from "@/components/common/badges";
import { getSkills } from "@/services";
import { Skill } from "@/types";

export const AboutSection = async () => {
  const response = await getSkills();

  let skills: Skill[] = [];

  if (response.success) {
    skills = response.results;
  }

  return (
    <div className="flex flex-col gap-16 px-8">
      <div>
        I&#39;m fourth year student of{" "}
        <Link
          target="_blank"
          href="https://hneu.edu.ua/"
          className="cursor-pointer text-cyan-400 underline"
        >
          Kharkiv National University of Economics
        </Link>
        , majoring in <span className="text-cyan-400">Computer Science</span>. I have always been
        interested in technology and have spent 5 years studying programming. I have tried many
        programming languages such as Python, C++, C#, JavaScript, TypeScript, Java, Kotlin and even
        NASM. But my first and favorite language is Python, so my goal is a Python Developer role on
        an interesting and challenging project.
      </div>
      <div className="flex flex-wrap gap-1.5 select-none">
        {skills.map((skill) => {
          return <SkillBadge key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
};
