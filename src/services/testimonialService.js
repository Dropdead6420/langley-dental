import { apiRequest } from "@/lib/apiClient";

export const getAllTestimonial = () => {
    return apiRequest(`/api/testimonial`);
}