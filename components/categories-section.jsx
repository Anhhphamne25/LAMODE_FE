"use client"

import CategoryCard from "./category-card"

const categories = [
  {
    name: "Women",
    image: "/womens-fashion-clothing.jpg",
  },
  {
    name: "Men",
    image: "/mens-fashion-clothing.jpg",
  },
  {
    name: "Accessories",
    image: "/fashion-accessories.jpg",
  },
  {
    name: "Shoes",
    image: "/designer-shoes.jpg",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-foreground/60 text-lg max-w-2xl">Explore our curated collections across all categories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.name} name={category.name} image={category.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
