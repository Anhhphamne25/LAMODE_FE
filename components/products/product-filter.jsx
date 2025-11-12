"use client";

export function ProductFilter({
  categories,
  colors,
  selectedCategory,
  selectedColor,
  selectedSize,
  priceRange,
  onCategoryChange,
  onColorChange,
  onSizeChange,
  onPriceChange,
  showFilters,
  onClose,
}) {
  return (
    <div
      className={`lg:col-span-1 ${showFilters ? "block" : "hidden"} lg:block`}
    >
      <div className="space-y-6 sticky top-24">
        {/* Filter Header - Mobile Only */}
        <div className="flex items-center justify-between lg:hidden mb-4">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            onClick={onClose}
            className="text-primary text-2xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Danh mục</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Màu sắc</h3>
          <div className="space-y-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                  selectedColor === color
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Khoảng giá</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="10000000"
              step="50000"
              value={priceRange[1]}
              onChange={(e) =>
                onPriceChange([priceRange[0], Number(e.target.value)])
              }
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{priceRange[0].toLocaleString()} VNĐ</span>
              <span>{priceRange[1].toLocaleString()} VNĐ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
