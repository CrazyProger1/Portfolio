import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  Project,
  SuccessfulResponse,
} from "@/types";

type ProjectsResponse = (PaginatedResponse<Project> & SuccessfulResponse) | ErrorResponse;
type ProjectResponse = (Project & SuccessfulResponse) | ErrorResponse;

export const getProjects = async (params?: PaginationParams): Promise<ProjectsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.projects}?${searchParams.toString()}`;
    const response = await fetchExtended(url);
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);

    return {
      success: false,
    };
  }
};

export const getProject = async (id: number | string): Promise<ProjectResponse> => {
  try {
    const url = API_ENDPOINTS.project.replace(":id", String(id));
    const response = await fetchExtended(url);
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);

    return {
      success: false,
    };
  }
};
