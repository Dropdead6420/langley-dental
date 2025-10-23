import { apiRequest } from "@/lib/apiClient";

export const getAllImages = (query) => {
    return apiRequest(`/api/gallery?${query}`, "GET");
}