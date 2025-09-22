import React from "react";

import { SkillBadge } from "@/components/common/badges";
import { MDXRender } from "@/components/common/utils";
import { getSkills, getTexts } from "@/services";
import { Skill, TextBlock } from "@/types";

export const AboutSection = async () => {
  const skillsResponse = await getSkills();
  const textsResponse = await getTexts({ collections: "about" });

  let skills: Skill[] = [];
  let texts: TextBlock[] = [];

  if (skillsResponse.success) {
    skills = skillsResponse.results;
  }

  if (textsResponse.success) {
    texts = textsResponse.results;
  }

  return (
    <div className="flex flex-col gap-16 px-8">
      {texts.map(({ content, slug }) => (
        <div key={slug} className="text-white">
          <MDXRender source={content} />
        </div>
      ))}
      <div className="flex flex-wrap gap-1.5 select-none">
        {skills.map((skill) => {
          return <SkillBadge key={skill.id} skill={skill} />;
        })}
      </div>
    </div>
  );
};
