"use client";

import { ProductCard } from "./product-card";

export function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 bg-muted rounded-lg">
        <p className="text-muted-foreground text-lg">Không có sản phẩm nào</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="scroll-reveal"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
