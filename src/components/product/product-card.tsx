import { TProductCardProps } from "@/types/product.type";
import React from "react";
import { ProductBuyButton } from "./product-buy-button";

export const ProductCard: React.FC<TProductCardProps> = ({
  _id,
  icon,
  name,
  description,
  price,
  stock,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-48 w-full items-center justify-center bg-gradient-to-br from-primary/70 to-secondary/70 text-6xl text-white drop-shadow-md">
        {icon}
      </div>
      <div className="relative p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{name}</h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mb-4 flex items-end justify-between">
          <div className="text-primary/70 text-3xl font-extrabold">${price}</div>
          <div className={`text-xs font-semibold uppercase tracking-wide ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
          </div>
        </div>
        {stock > 0 ? (
          <ProductBuyButton id={_id} />
        ) : (
          <div className="rounded-lg bg-gray-100 px-4 py-2 text-center text-gray-500">Out of stock</div>
        )}
      </div>
    </div>
  );
};
