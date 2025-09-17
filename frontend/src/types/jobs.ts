import { Skill } from "@/types/skills";

export type JobArea = "frontend" | "backend";

export type Job = {
  id: number;
  name: string;
  description: string;
  started_at: Date;
  ended_at: Date;
  areas: JobArea[];
  skills: Skill[];
  image: string;
};
