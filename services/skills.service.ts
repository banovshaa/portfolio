import { SkillType } from "@/interfaces/interfaces";
import axios, { AxiosResponse } from "axios";

export const getAllSkillsRequest = async (): Promise<
  AxiosResponse<SkillType[]>
> => {
  try {
    return await axios.get<SkillType[]>("/api/skills");
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};
