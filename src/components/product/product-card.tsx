import { TProductCardProps } from "@/types/product.type";
import React from "react";
import { ProductBuyButton } from "./product-buy-button";

export const ProductCard: React.FC<TProductCardProps> = ({
  id,
  icon,
  name,
  desc,
  price,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="from-primary/70 to-secondary/70 flex h-48 w-full items-center justify-center bg-gradient-to-br text-6xl">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="mb-4 text-gray-600">{desc}</p>
        <div className="text-primary/70 mb-4 text-2xl font-bold">${price}</div>
        <ProductBuyButton id={id} />
      </div>
    </div>
  );
};
