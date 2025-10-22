import { FC } from "react";

export const ProductCardSkeleton: FC = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="h-48 w-full animate-pulse bg-gray-200" />
      <div className="p-6">
        <div className="mb-2 h-7 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="mb-4 h-5 w-full animate-pulse rounded bg-gray-200" />
        <div className="mb-4 h-8 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
};
