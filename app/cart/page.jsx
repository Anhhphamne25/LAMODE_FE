"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartItem } from "@/components/cart/cart-item"
import { OrderSummary } from "@/components/cart/order-summary"

export default function CartPage() {
  const router = useRouter()
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)

  const handleUpdateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
    } else {
      updateQuantity(productId, size, quantity)
    }
  }

  const handleRemove = (productId, size) => {
    removeFromCart(productId, size)
  }

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(0.1)
      setPromoCode("")
    }
  }

  const subtotal = getCartTotal()
  const discountAmount = subtotal * discount
  const total = subtotal - discountAmount

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-muted rounded-lg">
            <p className="text-muted-foreground text-xl mb-6">Your cart is empty</p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div key={`${item.id}-${item.size}`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <CartItem
                      item={item}
                      onUpdateQuantity={(id, quantity) => handleUpdateQuantity(item.id, item.size, quantity)}
                      onRemove={() => handleRemove(item.id, item.size)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                subtotal={subtotal}
                discount={discount}
                discountAmount={discountAmount}
                total={total}
                promoCode={promoCode}
                onPromoChange={setPromoCode}
                onApplyPromo={applyPromo}
                onCheckout={() => router.push("/checkout")}
                onContinueShopping={() => router.push("/products")}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
