"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"

export default function ProductCard({ id, name, price, image, badge, badgeType = "new" }) {
  const { addToCart, addToWishlist, isInWishlist } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const badgeColor = badgeType === "sale" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart({
      id,
      name,
      price,
      image,
      size: "M",
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToWishlist({ id, name, price, image })
  }

  return (
    <Link href={`/products/${id}`} className="group card-lift block">
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

        {/* Add to Cart Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 animate-in fade-in">
            <Button
              onClick={handleAddToCart}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 group hover:scale-105 transition-transform"
            >
              <ShoppingCart className="w-4 h-4" />
              {addedToCart ? "Added!" : "Add to Cart"}
            </Button>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-4 left-4 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isInWishlist(id) ? "bg-accent text-accent-foreground" : "bg-white/90 hover:bg-white text-foreground"
          }`}
          title="Add to wishlist"
        >
          <Heart className={`w-5 h-5 ${isInWishlist(id) ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>
        <p className="text-lg font-bold text-primary mt-2">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}
