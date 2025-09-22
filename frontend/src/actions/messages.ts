"use server";

import { API_ENDPOINTS } from "@/config";
import { fetchExtended } from "@/services/api";
import { Message } from "@/types";

export const sendMessage = async (message: Message) => {
  try {
    const url = API_ENDPOINTS.sendMessage;
    const response = await fetchExtended(url, { method: "POST", body: JSON.stringify(message) });
    const data = await response.json();

    return {
      success: response.status === 201,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);

    return {
      success: false,
    };
  }
};
