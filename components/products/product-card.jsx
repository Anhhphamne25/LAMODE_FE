"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export function ProductCard({ product }) {
  const { addToCart, addToWishlist, isInWishlist } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: "M",
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-card rounded-lg overflow-hidden border border-border transition-all duration-300 card-lift h-full flex flex-col group block"
    >
      {/* Product Image */}
      <div className="relative w-full h-64 bg-muted overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Tags */}
        {product.tag && (
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold ${
              product.tag === "Sale" ? "bg-destructive text-destructive-foreground" : "bg-accent text-accent-foreground"
            }`}
          >
            {product.tag}
          </div>
        )}
        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 left-3 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
            isInWishlist(product.id) ? "bg-accent text-accent-foreground" : "bg-white/90 hover:bg-white text-foreground"
          }`}
          title="Add to wishlist"
        >
          <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 flex-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
        <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
      </div>

      {/* Add to Cart */}
      <div className="p-4 border-t border-border">
        <button
          onClick={(e) => {
            e.preventDefault()
            handleAddToCart()
          }}
          className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          {addedToCart ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </Link>
  )
}
