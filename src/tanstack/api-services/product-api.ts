import { apiService } from "@/lib/api-services";

const getProducts = async () => {
  return apiService.get("/product");
};

export const productApi = {
  getProducts,
};
