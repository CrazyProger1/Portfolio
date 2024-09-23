import { TIconLink } from "@/types/link";
import { TSkill } from "@/types/skill";

export enum ProjectType {
  PET,
  OPENSOURCE,
}

export type TProject = {
  name: string;
  version: string;
  image: string;
  stars: number;
  description: string;
  type: ProjectType;
  skills: Array<TSkill>;
  links: Array<TIconLink>;
};
