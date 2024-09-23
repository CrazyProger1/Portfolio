import { TProject } from "@/types/project";
import { FC } from "react";

interface ProjectCardProps {
  project: TProject;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return <div>{project.name}</div>;
};

export default ProjectCard;
