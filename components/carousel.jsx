"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./product-card"

export default function Carousel({ items, title, description, autoScroll = true, autoScrollInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto scroll
  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, items.length - itemsPerView)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, autoScrollInterval)

    return () => clearInterval(interval)
  }, [autoScroll, autoScrollInterval, items.length, itemsPerView])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    const maxIndex = Math.max(0, items.length - itemsPerView)
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const maxIndex = Math.max(0, items.length - itemsPerView)
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
          {description && <p className="text-foreground/60 text-lg max-w-2xl">{description}</p>}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {items.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4">
                  <ProductCard
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    badge={item.badge}
                    badgeType={item.badgeType}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
