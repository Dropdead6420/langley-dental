import { apiRequest } from "@/lib/apiClient";

export const getHeroSliders = () =>
  apiRequest(`/api/slider`, "GET");
