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
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300">
      <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl">
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
        <div className="text-2xl font-bold text-primary mb-4">${price}</div>
        <ProductBuyButton id={id} />
      </div>
    </div>
  );
};
