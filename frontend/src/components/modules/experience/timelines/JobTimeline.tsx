import { Timeline } from "primereact/timeline";
import React from "react";

import { Job } from "@/types";

import "primereact/resources/themes/md-light-indigo/theme.css";
import { JobItem } from "./JobItem";

interface Props {
  jobs: Job[];
}

export const JobTimeline = ({ jobs }: Props) => {
  return <Timeline value={jobs} align="alternate" className="select-none" content={JobItem} />;
};
