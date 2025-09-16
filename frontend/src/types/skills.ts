export type SkillLevel = "BEGINNER" | "INTERMEDIATE" | "EXPERT";

export type Skill = {
  id: number;
  name: string;
  level: SkillLevel;
  image?: string;
};
