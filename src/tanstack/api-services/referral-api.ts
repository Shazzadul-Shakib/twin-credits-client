/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiService } from "@/lib/api-services";

const getReferredUsers = async (params?: {
  page?: number;
  limit?: number;
  status?: string;
  sortBy?: string;
  sortOrder?: string;
}) => {
     const queryString = new URLSearchParams(params as any).toString();
  return apiService.get(`/referral/referred-users?${queryString}`);
};

export const referralApi = {
  getReferredUsers,
};

