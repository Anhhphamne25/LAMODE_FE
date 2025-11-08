"use client"

import { Sliders } from "lucide-react"

export function ProductToolbar({ productCount, sortBy, onSortChange, onToggleFilters }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <p className="text-muted-foreground">
        Showing {productCount} product{productCount !== 1 ? "s" : ""}
      </p>
      <div className="flex items-center gap-4">
        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="popular">Popular</option>
        </select>

        {/* Filter Toggle - Mobile */}
        <button onClick={onToggleFilters} className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors">
          <Sliders className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
