"use client";

import { TProductBuyButtonProps } from "@/types/product.type";
import { Button } from "../ui/button";

export const ProductBuyButton = ({ id }: TProductBuyButtonProps) => {
  return (
    <Button className="w-full" onClick={() => console.log(`Buy Now clicked for product ${id}`)}>
      Buy Now
    </Button>
  );
};
