"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const mockAlbums = [
  {
    id: 1,
    title: "Spring Collection 2025",
    season: "Spring",
    images: [
      "/summer-collection-clothing.jpg",
      "/womens-fashion-clothing.jpg",
      "/designer-shoes.jpg",
      "/fashion-accessories.jpg",
      "/luxury-cashmere-sweater.jpg",
      "/mens-fashion-clothing.jpg",
    ],
  },
  {
    id: 2,
    title: "Winter Essentials",
    season: "Winter",
    images: [
      "/luxury-cashmere-sweater.jpg",
      "/mens-fashion-clothing.jpg",
      "/fashion-accessories.jpg",
      "/designer-shoes.jpg",
      "/womens-fashion-clothing.jpg",
      "/summer-collection-clothing.jpg",
    ],
  },
  {
    id: 3,
    title: "Summer Vibes",
    season: "Summer",
    images: [
      "/designer-shoes.jpg",
      "/summer-collection-clothing.jpg",
      "/womens-fashion-clothing.jpg",
      "/fashion-accessories.jpg",
      "/luxury-cashmere-sweater.jpg",
      "/mens-fashion-clothing.jpg",
    ],
  },
  {
    id: 4,
    title: "Fall Fashion",
    season: "Fall",
    images: [
      "/fashion-accessories.jpg",
      "/luxury-cashmere-sweater.jpg",
      "/designer-shoes.jpg",
      "/mens-fashion-clothing.jpg",
      "/summer-collection-clothing.jpg",
      "/womens-fashion-clothing.jpg",
    ],
  },
]

export default function AlbumPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedSeason, setSelectedSeason] = useState("All")

  const seasons = ["All", "Spring", "Summer", "Fall", "Winter"]
  const filteredAlbums =
    selectedSeason === "All" ? mockAlbums : mockAlbums.filter((album) => album.season === selectedSeason)

  const currentAlbum = filteredAlbums[selectedAlbum] || filteredAlbums[0]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Lookbook</h1>

        {/* Season Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {seasons.map((season) => (
            <button
              key={season}
              onClick={() => {
                setSelectedSeason(season)
                setSelectedAlbum(0)
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedSeason === season
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {season}
            </button>
          ))}
        </div>

        {/* Album Selector */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {filteredAlbums.map((album, index) => (
            <button
              key={album.id}
              onClick={() => setSelectedAlbum(index)}
              className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                selectedAlbum === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {album.title}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        {currentAlbum && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
            {currentAlbum.images.map((image, index) => {
              // Stagger heights for masonry effect
              const heights = ["h-64", "h-72", "h-80", "h-60", "h-68", "h-76"]
              const heightClass = heights[index % heights.length]

              return (
                <div
                  key={index}
                  className={`${heightClass} group relative overflow-hidden rounded-lg scroll-reveal cursor-pointer`}
                  onClick={() => setSelectedImage(image)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Lightbox"
                className="w-full h-auto max-h-[80vh] object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
