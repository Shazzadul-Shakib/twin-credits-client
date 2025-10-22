import { apiService } from "@/lib/api-services";

const getReferredUsers = async () => {
  return apiService.get("/referral/referred-users");
};

export const referralApi = {
  getReferredUsers,
};
