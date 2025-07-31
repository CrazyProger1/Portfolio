import { NavIcon } from "@/types/nav";
import { Skill } from "@/types/skills";

export type ProjectType = "pet" | "commercial" | "opensource";

export type ProjectState = "frozen" | "development" | "production";

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
