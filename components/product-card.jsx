"use client"

import { useState } from "react"
import { ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductCard({ name, price, image, badge, badgeType = "new" }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const badgeColor = badgeType === "sale" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"

  return (
    <div className="group card-lift">
      <div
        className="relative overflow-hidden rounded-lg mb-4 bg-muted cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
        </div>

        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${badgeColor} animate-in fade-in`}
          >
            {badge}
          </div>
        )}

        {/* Card Lift Effect & Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 animate-in fade-in">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 group hover:scale-105 transition-transform">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isWishlisted ? "bg-accent text-accent-foreground" : "bg-white/90 hover:bg-white text-foreground"
          }`}
          title="Add to wishlist"
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>
        <p className="text-lg font-bold text-primary mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
