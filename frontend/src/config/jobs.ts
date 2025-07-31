import { SKILLS } from "@/config/skills";
import { Job } from "@/types";

export const JOBS: Job[] = [
  {
    name: "Freelance Project",
    description: "Backend python developer role",
    start_at: new Date(2024, 4, 19),
    end_at: new Date(Date.now()),
    areas: ["backend"],
    skills: [SKILLS.python, SKILLS.drf, SKILLS.nginx],
    image: "/images/freelance.png",
  },
  {
    name: "dZENcode",
    description: "Backend python developer role",
    start_at: new Date(2024, 4, 19),
    end_at: new Date(Date.now()),
    areas: ["backend"],
    skills: [SKILLS.python, SKILLS.drf, SKILLS.nginx],
    image: "/images/dzencode.png",
  },
];
