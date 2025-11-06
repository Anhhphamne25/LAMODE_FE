"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export default function BlogCard({ image, title, excerpt, date, category }) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  return (
    <div
      ref={setRef}
      className={`group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer h-full flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-3">{date}</p>
          <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2">{excerpt}</p>
        </div>

        {/* Read More Button */}
        <button className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/btn">
          Read More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}
