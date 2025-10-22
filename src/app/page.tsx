import { Hero } from "@/components/product/hero";
import { Products } from "@/components/product/products";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Products />
    </div>
  );
}
