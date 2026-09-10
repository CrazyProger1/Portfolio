import Image from "next/image";
import React from "react";

import { TagBadge } from "@/components/common/badges";
import { Modal } from "@/components/common/modals";
import { MDXRender } from "@/components/common/utils/MDXRender";
import { getHobby } from "@/services";
import { getLocalizedPeriod } from "@/utils/period";

type Props = {
  hobby?: string;
};

export const HobbyModal = async ({ hobby: hobbyId }: Props) => {
  if (!hobbyId) return null;

  const hobby = await getHobby(hobbyId);

  if (!hobby.success) return null;

  const { image, name, description, tags, started_at, ended_at } = hobby;

  const { startedLabel, endedLabel, period } = getLocalizedPeriod(
    new Date(started_at),
    ended_at ? new Date(ended_at) : undefined,
  );

  return (
    <Modal query="hobby">
      <div className="flex flex-col items-center gap-4 select-none">
        <div className="flex flex-row items-center justify-between">
          <div className="text-4xl font-extrabold">{name}</div>
        </div>
        <Image className="icon-shine-default" src={image} alt="Hobby" width={600} height={410} />
      </div>
      <div className="select-none">
        Period:{" "}
        <span className="text-cyan-400">
          {startedLabel} – {endedLabel} · {period}
        </span>
      </div>
      <MDXRender source={description} />
      <div className="flex flex-wrap gap-1.5 select-none">
        {tags.map((tag) => {
          return <TagBadge key={tag.id} tag={tag} />;
        })}
      </div>
    </Modal>
  );
};
