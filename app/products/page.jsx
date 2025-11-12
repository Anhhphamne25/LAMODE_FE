"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProductFilter } from "@/components/products/product-filter";
import { ProductToolbar } from "@/components/products/product-toolbar";
import { ProductGrid } from "@/components/products/product-grid";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🧩 Gọi API Strapi
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://giving-warmth-26b1385265.strapiapp.com/api/products?populate[image][fields][0]=url&populate[colors][fields][0]=name&populate[sizes][fields][0]=name&populate[categories][fields][0]=name&populate[categorytinies][fields][0]=name&pagination[pageSize]=100"
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

  // ✅ Danh mục 1 cấp
  const categories = [
    "All",
    "Men",
    "Women",
    "Tops",
    "Skirts",
    "Bottoms",
    "Accessories",
  ];

  const colors = [
    "All",
    "Black",
    "White",
    "Brown",
    "Beige",
    "Navy Blue",
    "Light Blue",
    "Pink",
    "Red",
    "Olive Green",
    "Gray",
  ];

  // ✅ Lọc sản phẩm
  const filtered = products.filter((item) => {
    const p = item.attributes;

    // Lấy category chính (1 cấp)
    const categoryNames =
      p.categories?.data?.map((c) => c.attributes?.name) || [];

    // Lấy tất cả màu
    const colorNames = p.colors?.data?.map((c) => c.attributes?.name) || [];

    // Chuyển giá về number
    const price = Number(p.price) || 0;

    // Kiểm tra category, color và price
    // Category match: nếu chọn "All" hoặc categoryNames có chứa selectedCategory
    const categoryMatch =
      selectedCategory === "All" || categoryNames.includes(selectedCategory);

    console.log("main", categoryNames);
    console.log("sel", selectedCategory);
    const colorMatch =
      selectedColor === "All" || colorNames.includes(selectedColor);

    const priceMatch = price >= priceRange[0] && price <= priceRange[1];

    return categoryMatch && colorMatch && priceMatch;
  });

  // ✅ Sort sản phẩm
  if (sortBy === "price-low") {
    filtered.sort(
      (a, b) =>
        Number(a.attributes.price || 0) - Number(b.attributes.price || 0)
    );
  } else if (sortBy === "price-high") {
    filtered.sort(
      (a, b) =>
        Number(b.attributes.price || 0) - Number(a.attributes.price || 0)
    );
  } else if (sortBy === "popular") {
    filtered.reverse();
  }

  // ✅ Render
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

            {loading ? (
              <div className="text-center py-20 text-muted-foreground">
                Đang tải sản phẩm...
              </div>
            ) : (
              <ProductGrid products={filtered} />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
