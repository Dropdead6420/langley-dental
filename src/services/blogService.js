import { apiRequest } from "@/lib/apiClient";

// Fetch all blogs
export const getAllBlogs = async () => {
  return apiRequest("/api/blog", "GET");
};

export const getBlogBySlug = async (slug) => {
  return apiRequest(`/api/blog/${slug}`, "GET");
};
