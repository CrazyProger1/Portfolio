import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AreaBadge, SkillBadge } from "@/components/common/badges";
import { MultiIcon } from "@/components/common/icons";
import { Modal } from "@/components/common/modals";
import { Motion } from "@/components/common/utils";
import { MDXRender } from "@/components/common/utils/MDXRender";
import { getProject } from "@/services";
import { Icon } from "@/types";
import { getLocalizedPeriod } from "@/utils/period";

type Props = {
  project?: string;
};

const stateText = {
  FROZEN: "Frozen ❄️",
  DEVELOPMENT: "Development 🔴",
  PRODUCTION: "Production ✅",
};

const typeText = {
  COMMERCIAL: "Commercial 💸",
  PET: "Pet 🔬",
  OPENSOURCE: "Open-Source 🌐",
};

export const ProjectModal = async ({ project: projectId }: Props) => {
  if (!projectId) return null;

  const project = await getProject(projectId);

  if (!project.success) return null;

  const { image, name, description, skills, areas, type, state, links, started_at, ended_at } =
    project;

  const { startedLabel, endedLabel, period } = getLocalizedPeriod(
    new Date(started_at),
    ended_at ? new Date(ended_at) : undefined,
  );

  return (
    <Modal query="project">
      <div className="flex flex-col items-center gap-4 select-none">
        <div className="flex flex-row items-center justify-between">
          <div className="text-4xl font-extrabold">{name}</div>
        </div>
        <Image className="icon-shine-default" src={image} alt="Project" width={300} height={300} />
        <div className="flex flex-row gap-2">
          {links?.map(({ id, name, platform, link }) => (
            <Motion key={id} whileHover={{ scale: 1.1 }}>
              <Link href={link} target="_blank">
                <MultiIcon
                  icon={(platform || name.toLowerCase()) as Icon}
                  size={32}
                  className="icon-shine origin-center"
                />
              </Link>
            </Motion>
          ))}
        </div>
      </div>
      <div className="select-none">
        Period:{" "}
        <span className="text-cyan-400">
          {startedLabel} – {endedLabel} · {period}
        </span>
      </div>
      <div className="select-none">
        State: <span className="text-cyan-400">{stateText[state]}</span>
      </div>
      <div className="select-none">
        Type: <span className="text-cyan-400">{typeText[type]}</span>
      </div>
      <MDXRender source={description} />
      <div className="flex flex-wrap gap-1.5 select-none">
        {skills.map((skill) => {
          return <SkillBadge key={skill.id} skill={skill} />;
        })}
      </div>
      <div className="flex flex-wrap gap-1.5 select-none">
        {areas.map((area) => {
          return <AreaBadge key={area.id} area={area} />;
        })}
      </div>
    </Modal>
  );
};
