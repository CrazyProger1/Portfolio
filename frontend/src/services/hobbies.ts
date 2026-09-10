import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  Hobby,
  SuccessfulResponse,
} from "@/types";

type HobbiesResponse = (PaginatedResponse<Hobby> & SuccessfulResponse) | ErrorResponse;
type HobbyResponse = (Hobby & SuccessfulResponse) | ErrorResponse;

export const getHobbies = async (params?: PaginationParams): Promise<HobbiesResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.getHobbies}?${searchParams.toString()}`;
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

export const getHobby = async (id: number | string): Promise<HobbyResponse> => {
  try {
    const url = API_ENDPOINTS.getHobby.replace(":id", String(id));
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
