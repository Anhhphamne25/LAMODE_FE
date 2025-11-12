"use client";

import ProductCard from "./product-card";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://giving-warmth-26b1385265.strapiapp.com/api/products?populate[image][fields][0]=url&populate[colors][fields][0]=name&populate[sizes][fields][0]=name&populate[categories][fields][0]=name&populate[categorytinies][fields][0]=name&pagination[pageSize]=8"
        );
        const data = await response.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-lg text-gray-500">
        Đang tải sản phẩm...
      </div>
    );
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Khám phá những sản phẩm bán chạy và mới nhất của chúng tôi.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:block text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:scale-105"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const attrs = product.attributes;
            const firstImage =
              attrs.image?.data?.[0]?.attributes?.url || "/placeholder.jpg";

            return (
              <div
                key={product.id}
                className="scroll-reveal"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <ProductCard
                  id={product.id}
                  name={attrs.name}
                  price={attrs.price}
                  image={firstImage}
                  badge={attrs.badge}
                  badgeType={attrs.badgeType}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/products"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Xem tất cả →
          </Link>
        </div>
      </div>
    </section>
  );
}
