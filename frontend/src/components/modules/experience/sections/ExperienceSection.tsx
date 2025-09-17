import React from "react";

import { ProjectSlider } from "@/components/modules/experience/sliders";
import { JobTimeline } from "@/components/modules/experience/timelines";
import { getJobs, getProjects } from "@/services";
import { Job, Project } from "@/types";

export const ExperienceSection = async () => {
  const jobsResponse = await getJobs();
  const projectsResponse = await getProjects();

  let jobs: Job[] = [];
  let projects: Project[] = [];

  if (jobsResponse.success) {
    jobs = jobsResponse.results;
  }

  if (projectsResponse.success) {
    projects = projectsResponse.results;
  }

  return (
    <div className="flex flex-col gap-16">
      <JobTimeline jobs={jobs} />
      <ProjectSlider projects={projects} />
    </div>
  );
};
