import Image from "next/image";
import React from "react";

import { AreaBadge, SkillBadge } from "@/components/common/badges";
import { MDXRender } from "@/components/common/utils";
import { getJob } from "@/services";
import { getLocalizedPeriod } from "@/utils/period";

import { Modal } from "./Modal";

type Props = {
  job?: string;
};

export const JobModal = async ({ job: jobId }: Props) => {
  if (!jobId) return null;

  const job = await getJob(jobId);

  if (!job.success) return null;

  const { image, name, description, skills, areas, started_at, ended_at } = job;

  const { startedLabel, endedLabel, period } = getLocalizedPeriod(
    new Date(started_at),
    ended_at ? new Date(ended_at) : undefined,
  );

  return (
    <Modal>
      <div className="flex flex-col items-center gap-4 select-none">
        <div className="flex flex-row items-center justify-between">
          <div className="text-4xl font-extrabold">{name}</div>
        </div>
        <Image className="icon-shine-default" src={image} alt="Project" width={300} height={300} />
      </div>
      <div className="select-none">
        Period:{" "}
        <span className="text-cyan-400">
          {startedLabel} – {endedLabel} · {period}
        </span>
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
