/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TProductBuyButtonProps } from "@/types/product.type";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { orderApi } from "@/tanstack/api-services/order-api";
import { toast } from "sonner";
import { queryClient } from "@/tanstack/query-client";
import { refreshUser } from "@/lib/refresh-user";

export const ProductBuyButton = ({ id }: TProductBuyButtonProps) => {
  const { user } = useAuthStore();
  const router = useRouter();

  const { mutate: createOrder, isPending: isLoading } = useMutation({
    mutationFn: orderApi.createOrder,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["User"] });
      await refreshUser();
      toast.success("Order Successful");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error?.data?.message || "Order creation unsuccessful");
    },
  });

  const handleClick = () => {
    if (!user) {
      router.push("/login");
    } else {
      createOrder({ product: id });
    }
  };

  return (
    <Button className="w-full" onClick={handleClick} loading={isLoading}>
      Buy Now
    </Button>
  );
};
