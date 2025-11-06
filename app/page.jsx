"use client"

import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import CategoriesSection from "@/components/categories-section"
import FeaturedProducts from "@/components/featured-products"
import PromotionBanner from "@/components/promotion-banner"
import NewCollection from "@/components/new-collection"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroBanner />
        <CategoriesSection />
        <FeaturedProducts />
        <PromotionBanner />
        <NewCollection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  )
}
