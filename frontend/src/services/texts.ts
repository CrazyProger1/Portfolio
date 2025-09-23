import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  TextBlock,
  SuccessfulResponse,
  CollectionsFilter,
} from "@/types";

type TextsResponse = (PaginatedResponse<TextBlock> & SuccessfulResponse) | ErrorResponse;
type TextResponse = (TextBlock & SuccessfulResponse) | ErrorResponse;

export const getTexts = async (
  params?: PaginationParams & CollectionsFilter,
): Promise<TextsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.getTexts}?${searchParams.toString()}`;
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

export const getText = async (slug: string): Promise<TextResponse> => {
  try {
    const url = API_ENDPOINTS.getTexts.replace(":slug", String(slug));
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
