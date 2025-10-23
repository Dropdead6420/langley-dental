import { apiRequest } from "@/lib/apiClient";

export const getAllBlogs = (query) => {
    return apiRequest(`/api/blog?${query}`, "GET");
}