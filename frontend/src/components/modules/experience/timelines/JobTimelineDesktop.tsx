"use client";

import { Timeline } from "primereact/timeline";
import React from "react";
import { RiArrowUpDoubleLine } from "react-icons/ri";

import { Job } from "@/types";

import { JobItemDesktop } from "./JobItemDesktop";

interface Props {
  jobs: Job[];
}

export const JobTimelineDesktop = ({ jobs }: Props) => {
  return (
    <Timeline
      marker={<RiArrowUpDoubleLine size={26} />}
      value={jobs}
      align="alternate"
      className="!hidden select-none md:!block lg:!block"
      content={JobItemDesktop}
    />
  );
};
