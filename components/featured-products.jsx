"use client";

import ProductCard from "./product-card";

const products = [
  {
    id: 1,
    name: "Premium Cashmere Sweater",
    price: 249.99,
    image: "/luxury-cashmere-sweater.jpg",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 2,
    name: "Silk Blend Dress",
    price: 189.99,
    image: "/elegant-silk-dress.jpg",
    badge: "Sale",
    badgeType: "sale",
  },
  {
    id: 3,
    name: "Classic Oxford Shirt",
    price: 129.99,
    image: "/oxford-shirt-men.jpg",
  },
  {
    id: 4,
    name: "Tailored Blazer",
    price: 299.99,
    image: "/tailored-blazer.jpg",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 5,
    name: "Premium Denim Jeans",
    price: 159.99,
    image: "/premium-denim-jeans.jpg",
    badge: "Sale",
    badgeType: "sale",
  },
  {
    id: 6,
    name: "Linen Button-Up",
    price: 99.99,
    image: "/linen-button-shirt.jpg",
  },
  {
    id: 7,
    name: "Wool Trousers",
    price: 179.99,
    image: "/wool-trousers.jpg",
  },
  {
    id: 8,
    name: "Vintage Leather Jacket",
    price: 399.99,
    image: "/vintage-leather-jacket.jpg",
    badge: "New",
    badgeType: "new",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Các sản phẩm nổi bật của chúng tôi.
            </p>
          </div>
          <button className="hidden md:block text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:scale-105">
            Xem Thêm →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="scroll-reveal"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
                badge={product.badge}
                badgeType={product.badgeType}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
}
