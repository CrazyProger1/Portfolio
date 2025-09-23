import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  Job,
  SuccessfulResponse,
} from "@/types";

type JobsResponse = (PaginatedResponse<Job> & SuccessfulResponse) | ErrorResponse;
type JobResponse = (Job & SuccessfulResponse) | ErrorResponse;

export const getJobs = async (params?: PaginationParams): Promise<JobsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.getJobs}?${searchParams.toString()}`;
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

export const getJob = async (id: number | string): Promise<JobResponse> => {
  try {
    const url = API_ENDPOINTS.getJob.replace(":id", String(id));
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
