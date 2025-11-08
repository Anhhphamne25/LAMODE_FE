"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export default function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = 300
      setIsVisible(scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className={`py-16 px-4 md:px-8 lg:px-12 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-wider mb-3">
                Limited Time Offer
              </p>
              <h3 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">Summer Collection</h3>
              <p className="text-primary-foreground/90 text-lg mb-6 max-w-md">
                Get up to 40% off on selected items. Don't miss out on this exclusive offer.
              </p>
              <button className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105 group">
                Shop Now
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1 hidden md:block">
              <img
                src="/summer-collection-clothing.jpg"
                alt="Summer Collection"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
