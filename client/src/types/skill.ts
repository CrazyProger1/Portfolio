export enum SkillLevel {
  BASIC,
  INTERMEDIATE,
  ADVANCED,
}

export type TSkill = {
  name?: string;
  level: SkillLevel;
};
