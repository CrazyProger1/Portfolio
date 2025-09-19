import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

import { AreaBadge, SkillBadge } from "@/components/common/badges";
import { ModalPortal, StopPropagation } from "@/components/common/modals";
import { Motion, SmoothLink } from "@/components/common/utils";
import { getJob } from "@/services";

type Props = {
  job?: string;
};

export const JobModal = async ({ job: jobId }: Props) => {
  if (!jobId) return null;

  const job = await getJob(jobId);

  if (!job.success) return null;

  const { image, name, description, skills, areas, started_at, ended_at } = job;

  const startedAt = new Date(started_at);
  const endedAt = ended_at ? new Date(ended_at) : new Date(); // fallback to now if still working

  // format month + year
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const startedLabel = formatDate(startedAt);
  const endedLabel = ended_at ? formatDate(endedAt) : "Present";

  // calculate years + months difference
  let years = endedAt.getFullYear() - startedAt.getFullYear();
  let months = endedAt.getMonth() - startedAt.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const period =
    years > 0
      ? `${years} yr${years > 1 ? "s" : ""}${months > 0 ? ` ${months} mo${months > 1 ? "s" : ""}` : ""}`
      : `${months} mo${months > 1 ? "s" : ""}`;

  return (
    <ModalPortal visible={true} query="job">
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
        </div>
        <div className="select-none">
          Period:{" "}
          <span className="text-cyan-400">
            {startedLabel} – {endedLabel} · {period}
          </span>
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
