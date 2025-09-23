"use client";

import { Timeline } from "primereact/timeline";
import React from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

import { Job } from "@/types";

import { JobItemMobile } from "./JobItemMobile";

interface Props {
  jobs: Job[];
}

export const JobTimelineMobile = ({ jobs }: Props) => {
  return (
    <div className="flex flex-col items-center md:hidden">
      <Timeline
        marker={<RiArrowUpDoubleLine size={26} />}
        value={jobs}
        className="select-none [&_.p-timeline-event-opposite]:hidden"
        content={JobItemMobile}
      />
    </div>
  );
};
