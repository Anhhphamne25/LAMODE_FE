"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProductFilter } from "@/components/products/product-filter";
import { ProductToolbar } from "@/components/products/product-toolbar";
import { ProductGrid } from "@/components/products/product-grid";

const mockProducts = [
  {
    id: 1,
    name: "Premium Cashmere Sweater",
    price: 189.99,
    image: "/luxury-cashmere-sweater.jpg",
    category: "Tops",
    color: "Black",
    size: "M",
    tag: "New",
  },
  {
    id: 2,
    name: "Designer Black Jeans",
    price: 129.99,
    image: "/designer-shoes.jpg",
    category: "Bottoms",
    color: "Black",
    size: "32",
    tag: "Sale",
  },
  {
    id: 3,
    name: "Silk Blouse",
    price: 99.99,
    image: "/womens-fashion-clothing.jpg",
    category: "Tops",
    color: "White",
    size: "S",
  },
  {
    id: 4,
    name: "Luxury Leather Jacket",
    price: 299.99,
    image: "/mens-fashion-clothing.jpg",
    category: "Outerwear",
    color: "Brown",
    size: "L",
  },
  {
    id: 5,
    name: "Designer Accessories Set",
    price: 79.99,
    image: "/fashion-accessories.jpg",
    category: "Accessories",
    color: "Gold",
    size: "One Size",
    tag: "New",
  },
  {
    id: 6,
    name: "Summer Linen Dress",
    price: 129.99,
    image: "/summer-collection-clothing.jpg",
    category: "Dresses",
    color: "Blue",
    size: "M",
    tag: "Sale",
  },
  {
    id: 7,
    name: "Cashmere Scarf",
    price: 89.99,
    image: "/luxury-cashmere-sweater.jpg",
    category: "Accessories",
    color: "Beige",
    size: "One Size",
  },
  {
    id: 8,
    name: "Athletic Polo",
    price: 69.99,
    image: "/mens-fashion-clothing.jpg",
    category: "Tops",
    color: "Navy",
    size: "M",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(true);

  const categories = [
    "All",
    "Tops",
    "Bottoms",
    "Dresses",
    "Outerwear",
    "Accessories",
  ];
  const colors = [
    "All",
    "Black",
    "White",
    "Brown",
    "Gold",
    "Beige",
    "Navy",
    "Blue",
  ];

  const filtered = mockProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const colorMatch =
      selectedColor === "All" || product.color === selectedColor;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && colorMatch && priceMatch;
  });

  // Sort products
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "popular") {
    filtered.reverse();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">
            Home
          </a>
          <span>/</span>
          <span className="text-foreground font-medium">Sản phẩm</span>
        </div>

        <h1 className="text-4xl font-bold mb-8 fade-in-up">Bộ sưu tập</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <ProductFilter
            categories={categories}
            colors={colors}
            selectedCategory={selectedCategory}
            selectedColor={selectedColor}
            priceRange={priceRange}
            onCategoryChange={setSelectedCategory}
            onColorChange={setSelectedColor}
            onPriceChange={setPriceRange}
            showFilters={showFilters}
            onClose={() => setShowFilters(false)}
          />

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductToolbar
              productCount={filtered.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onToggleFilters={() => setShowFilters(!showFilters)}
            />
            <ProductGrid products={filtered} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
