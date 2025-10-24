import { apiRequest } from "@/lib/apiClient";

export const getAllTeam = () => {
    return apiRequest(`/api/team`, "GET");
}