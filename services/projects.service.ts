import { ProjectType } from "@/interfaces/interfaces";
import axios, { AxiosResponse } from "axios";

export const getAllProjectsRequest = async (): Promise<
  AxiosResponse<ProjectType[]>
> => {
  try {
    return await axios.get<ProjectType[]>("/api/projects");
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
