"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./product-card";
import { ProductCardSkeleton } from "./product-card-skeleton";
import { productApi } from "@/tanstack/api-services/product-api";
import { TProductCardProps } from "@/types/product.type";
import { iconMap } from "@/lib/data";

export const Products = () => {
  const {
    data: response,
    isPending: isLoading,
    isError,
    refetch,
  } = useQuery<{ data: TProductCardProps[] }>({
    queryKey: ["Product"],
    queryFn: productApi.getProducts,
    staleTime: Infinity,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 max-w-[90%] mx-auto sm:max-w-none">
        {Array.from({ length: 6 }).map((_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 text-center text-red-400 max-w-[90%] mx-auto sm:max-w-none">
        <p className="mb-3 font-medium">Failed to load products.</p>
        <button
          onClick={() => refetch()}
          className="bg-primary hover:bg-primary/80 rounded-lg px-4 py-2 text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  const products = response?.data || [];

  if (products.length === 0) {
    return (
      <div className="py-10 text-center text-gray-400 max-w-[90%] mx-auto sm:max-w-none">No products found.</div>
    );
  }

  const enrichedProducts = products.map((p) => ({
    ...p,
    icon: iconMap[p.name.toLowerCase()] || "📦",
  }));

  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto sm:max-w-none">
      {enrichedProducts.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};
