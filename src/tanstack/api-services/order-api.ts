import { apiService } from "@/lib/api-services";

const createOrder = async (data: object) => {
  return apiService.post("/order", data);
};

export const orderApi = {
  createOrder,
};
