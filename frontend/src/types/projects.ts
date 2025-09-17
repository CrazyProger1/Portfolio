import { NavIcon } from "@/types/nav";
import { Skill } from "@/types/skills";

export type ProjectType = "PET" | "COMMERCIAL" | "OPENSOURCE";

export type ProjectState = "FROZEN" | "DEVELOPMENT" | "PRODUCTION";

export type Project = {
  name: string;
  image: string;
  type: ProjectType;
  state: ProjectState;
  description?: string;
  skills: Skill[];
  stars?: number;
  version?: string;
  links?: NavIcon[];
  start_at?: Date;
  end_at?: Date;
};
