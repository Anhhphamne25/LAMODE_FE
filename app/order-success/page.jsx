"use client"

import Link from "next/link"
import { CheckCircle, Package, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function OrderSuccessPage() {
  const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-foreground/60 text-lg">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border border-border mb-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-border">
              <div>
                <p className="text-sm text-foreground/60 mb-1">Order Number</p>
                <p className="text-2xl font-bold">{orderNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <Package className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Order Processing</h3>
                <p className="text-sm text-foreground/60">We're preparing your items for shipment</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <Mail className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Confirmation Email</h3>
                <p className="text-sm text-foreground/60">Check your inbox for order details</p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Track Your Order</h3>
                <p className="text-sm text-foreground/60">You'll receive tracking info soon</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orders"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 text-center"
            >
              View Order History
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 border-2 border-border font-semibold rounded-lg hover:bg-muted transition-all duration-300 text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
