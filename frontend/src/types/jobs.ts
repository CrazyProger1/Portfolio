import { Skill } from "@/types/skills";

export type JobArea = "frontend" | "backend";

export type Job = {
  id: number;
  name: string;
  description: string;
  started_at: string;
  ended_at?: string;
  areas: JobArea[];
  skills: Skill[];
  image: string;
};
