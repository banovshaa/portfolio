import { StaticImageData } from "next/image";

export interface ProjectType {
  id: number;
  name: string;
  path: string;
  image: string;
}

export interface SkillType {
  id: number;
  name: string;
  image: StaticImageData;
}
