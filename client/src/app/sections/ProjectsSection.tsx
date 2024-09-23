import { PROJECTS } from "@/config/projects";
import ProjectCard from "@/components/cards/ProjectCard";

const ProjectsSection = () => {
  return (
    <div>
      {PROJECTS.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
