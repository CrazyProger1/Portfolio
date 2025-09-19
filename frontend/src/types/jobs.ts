import { Area } from "@/types/projects";
import { Skill } from "@/types/skills";

export type Job = {
  id: number;
  name: string;
  description: string;
  started_at: string;
  ended_at?: string;
  areas: Area[];
  skills: Skill[];
  image: string;
};
