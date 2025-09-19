import Image from "next/image";
import React from "react";

import { Motion, SmoothLink } from "@/components/common/utils";
import { Job } from "@/types";

export const JobItemDesktop = (item: Job, index: number) => {
  const startedAt = new Date(item.started_at);
  const endedAt = item.ended_at ? new Date(item.ended_at) : new Date(); // fallback to now if still working

  // format month + year
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const startedLabel = formatDate(startedAt);
  const endedLabel = item.ended_at ? formatDate(endedAt) : "Present";

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
    <div className="pb-8">
      <div className={"flex flex-col " + (index % 2 === 1 ? "items-end" : "")}>
        <SmoothLink href={`?job=${item.id}`}>
          <Motion
            whileHover={{ scale: 1.05 }}
            className="icon-shine relative max-w-fit cursor-pointer rounded-lg text-white"
          >
            <Image
              className="icon-shine-default rounded-lg"
              src={item.image}
              alt={item.description}
              width={200}
              height={200}
            />
            <div className="flex w-full flex-col rounded-b-lg">
              <div>{item.name}</div>
              <div className="text-sm text-gray-300">
                {startedLabel} – {endedLabel} · {period}
              </div>
            </div>
          </Motion>
        </SmoothLink>
      </div>
    </div>
  );
};
