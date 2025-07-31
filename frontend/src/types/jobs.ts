import { Skill } from "@/types/skills";

export type JobArea = "frontend" | "backend";

export type Job = {
  name: string;
  description: string;
  start_at: Date;
  end_at: Date;
  areas: JobArea[];
  skills: Skill[];
  image: string;
};
