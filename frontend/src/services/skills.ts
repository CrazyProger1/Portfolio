import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  Skill,
  SuccessfulResponse,
} from "@/types";

type SkillsResponse = (PaginatedResponse<Skill> & SuccessfulResponse) | ErrorResponse;
type SkillResponse = (Skill & SuccessfulResponse) | ErrorResponse;

export const getSkills = async (params?: PaginationParams): Promise<SkillsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.skills}?${searchParams.toString()}`;
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

export const getSkill = async (id: number | string): Promise<SkillResponse> => {
  try {
    const url = API_ENDPOINTS.skills.replace(":id", String(id));
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
