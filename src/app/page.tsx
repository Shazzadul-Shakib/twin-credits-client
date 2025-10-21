import { Hero } from "@/components/product/hero";
import { ProductCard } from "@/components/product/product-card";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Web Dev Masterclass",
      price: 149,
      category: "courses",
      icon: "💻",
      desc: "Complete web development course",
    },
    {
      id: 2,
      name: "UI/UX Design Bundle",
      price: 89,
      category: "templates",
      icon: "🎨",
      desc: "Professional UI kits and templates",
    },
    {
      id: 3,
      name: "Marketing Tool",
      price: 199,
      category: "tools",
      icon: "📊",
      desc: "Automate your marketing",
    },
    {
      id: 4,
      name: "Python Course",
      price: 129,
      category: "courses",
      icon: "🐍",
      desc: "Learn Python programming",
    },
    {
      id: 5,
      name: "Social Media Pack",
      price: 49,
      category: "templates",
      icon: "📱",
      desc: "500+ social templates",
    },
    {
      id: 6,
      name: "SEO Tool",
      price: 179,
      category: "tools",
      icon: "🔍",
      desc: "Boost your SEO ranking",
    },
  ];

  return (
    <div className="container mx-auto">
      <Hero />
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
