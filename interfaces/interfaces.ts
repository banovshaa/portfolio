import { StaticImageData } from "next/image";

export interface ProjectType {
  id: number;
  name: string;
  path: string;
  image: StaticImageData;
}

export interface SkillType {
  id: number;
  name: string;
  desc: string;
  image: StaticImageData;
}
