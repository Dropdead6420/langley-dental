// @/services/appointmentService.js

import { apiRequest } from "@/lib/apiClient";

export const createAppointment = (data) => {
  return apiRequest(`/api/appointment`,"POST",data)
};
