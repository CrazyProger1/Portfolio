import React from "react";

import { ProjectSlider } from "@/components/modules/experience/sliders";
import { JobTimelineDesktop, JobTimelineMobile } from "@/components/modules/experience/timelines";
import { getJobs, getProjects } from "@/services";
import { Job, Project, SearchParams } from "@/types";

import { JobModal, ProjectModal } from "../modals";

type Props = {
  params: SearchParams;
};
export const ExperienceSection = async ({ params }: Props) => {
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
      <JobTimelineDesktop jobs={jobs} />
      <JobTimelineMobile jobs={jobs} />
      <ProjectSlider projects={projects} />
      <JobModal job={params.job} />
      <ProjectModal project={params.project} />
    </div>
  );
};
