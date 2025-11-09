"use client";

import CategoryCard from "./category-card";

const categories = [
  {
    name: "Xuân",
    image: "/spring.jpg",
  },
  {
    name: "Hạ",
    image: "/summer.jpg",
  },
  {
    name: "Thu",
    image: "/autum.jpg",
  },
  {
    name: "Đông",
    image: "/winter.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bộ sưu tập theo mùa
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Khám phá các bộ sưu tập được tuyển chọn của chúng tôi theo từng mùa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
