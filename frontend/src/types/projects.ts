import { UserLink } from "@/types/links";
import { Skill } from "@/types/skills";

export type ProjectType = "PET" | "COMMERCIAL" | "OPENSOURCE";

export type ProjectState = "FROZEN" | "DEVELOPMENT" | "PRODUCTION";

export type Area = {
  id: number;
  name: string;
  slug: string;
};

export type ProjectMetrics = {
  github_stars?: number;
};

export type Project = {
  id: number;
  name: string;
  image: string;
  type: ProjectType;
  state: ProjectState;
  description?: string;
  skills: Skill[];
  stars?: number;
  version?: string;
  links?: UserLink[];
  started_at: string;
  ended_at?: string;
  areas: Area[];
  metrics: ProjectMetrics;
};
