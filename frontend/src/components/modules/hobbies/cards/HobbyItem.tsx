import Image from "next/image";
import React from "react";

import { Motion } from "@/components/common/utils";
import { Hobby } from "@/types";
import { getLocalizedPeriod } from "@/utils/period";

type Props = {
  hobby: Hobby;
};

export const HobbyItem = ({ hobby }: Props) => {
  const { image, name, started_at, ended_at } = hobby;
  const { startedLabel, endedLabel, period } = getLocalizedPeriod(
    new Date(started_at),
    ended_at ? new Date(ended_at) : undefined,
  );

  return (
    <Motion
      whileHover={{ scale: 1.05 }}
      className="icon-shine flex cursor-pointer flex-col items-center rounded-lg p-4 text-white sm:p-8"
    >
      <Image
        src={image}
        alt={`${name} Photo`}
        width={600}
        height={410}
        className="icon-shine-default h-auto w-full"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="w-full rounded-b-lg p-2">
        <div className="flex flex-col items-center justify-between justify-items-center">
          <div>{name}</div>
          <div className="text-sm text-gray-300">
            {startedLabel} – {endedLabel} · {period}
          </div>
        </div>
      </div>
    </Motion>
  );
};
