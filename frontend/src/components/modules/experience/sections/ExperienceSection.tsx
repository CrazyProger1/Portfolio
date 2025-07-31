"use client";
import React from "react";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { ProjectSlider } from "@/components/modules/experience/sliders";
import { JobTimeline } from "@/components/modules/experience/timelines";
import { JOBS, PROJECTS } from "@/config";

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-16">
      <JobTimeline jobs={JOBS} />
      <ProjectSlider projects={PROJECTS} />
    </div>
  );
};
