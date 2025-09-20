import Image from "next/image";
import React from "react";

import { Motion, SmoothLink } from "@/components/common/utils";
import { Job } from "@/types";
import { getLocalizedPeriod } from "@/utils/period";

export const JobItemMobile = (item: Job, index: number) => {
  const { started_at, ended_at, image, id, description, name } = item;
  const { startedLabel, endedLabel, period } = getLocalizedPeriod(
    new Date(started_at),
    ended_at ? new Date(ended_at) : undefined,
  );

  return (
    <div className="pb-8">
      <SmoothLink href={`?job=${id}`}>
        <Motion
          whileHover={{ scale: 1.05 }}
          className="icon-shine relative max-w-fit cursor-pointer rounded-lg text-white"
        >
          <Image
            className="icon-shine-default rounded-lg"
            src={image}
            alt={description}
            width={200}
            height={200}
          />
          <div className="flex w-full flex-col rounded-b-lg">
            <div>{name}</div>
            <div className="text-sm text-gray-300">
              {startedLabel} – {endedLabel} · {period}
            </div>
          </div>
        </Motion>
      </SmoothLink>
    </div>
  );
};
