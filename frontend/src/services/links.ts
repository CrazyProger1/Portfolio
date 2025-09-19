import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  UserLink,
  SuccessfulResponse,
} from "@/types";

type LinksResponse = (PaginatedResponse<UserLink> & SuccessfulResponse) | ErrorResponse;
type LinkResponse = (UserLink & SuccessfulResponse) | ErrorResponse;

export const getLinks = async (
  params?: PaginationParams & { collections?: string },
): Promise<LinksResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.getLinks}?${searchParams.toString()}`;
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

export const getLink = async (id: number | string): Promise<LinkResponse> => {
  try {
    const url = API_ENDPOINTS.getLink.replace(":id", String(id));
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
