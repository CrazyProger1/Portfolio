import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

import { AreaBadge, SkillBadge } from "@/components/common/badges";
import { MultiIcon } from "@/components/common/icons";
import { ModalPortal, StopPropagation } from "@/components/common/modals";
import { Motion, SmoothLink } from "@/components/common/utils";
import { getProject } from "@/services";
import { Icon } from "@/types";

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

  const { image, name, description, skills, areas, type, state, links } = project;

  return (
    <ModalPortal visible={true} query="project">
      <StopPropagation className="bg-background lg:1/2 relative flex w-full flex-col gap-4 rounded-2xl p-4 text-white md:w-2/3">
        <div className="absolute top-4 right-4">
          <SmoothLink href="/" className="flex">
            <Motion whileHover={{ scale: 1.1 }}>
              <IoClose className="icon-shine cursor-pointer" size={32} />
            </Motion>
          </SmoothLink>
        </div>

        <div className="flex flex-col items-center gap-4 select-none">
          <div className="flex flex-row items-center justify-between">
            <div className="text-4xl font-extrabold">{name}</div>
          </div>
          <Image
            className="icon-shine-default"
            src={image}
            alt="Project"
            width={300}
            height={300}
          />
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
          State: <span className="text-cyan-400">{stateText[state]}</span>
        </div>
        <div className="select-none">
          Type: <span className="text-cyan-400">{typeText[type]}</span>
        </div>
        <div>{description}</div>
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
      </StopPropagation>
    </ModalPortal>
  );
};
