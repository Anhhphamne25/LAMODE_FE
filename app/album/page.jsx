"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AlbumPage() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedname, setSelectedname] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          "https://giving-warmth-26b1385265.strapiapp.com/api/albums?populate[images][fields]=url"
        );
        const data = await response.json();
        setAlbums(data.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, []);

  console.log(albums);

  // Lấy tất cả name từ API (thêm "All" vào đầu)
  const names = [
    "All",
    ...Array.from(new Set(albums.map((album) => album.attributes.name))),
  ];

  const filteredAlbums =
    selectedname === "All"
      ? albums
      : albums.filter((album) => album.attributes.name === selectedname);

  const currentAlbum = filteredAlbums[selectedAlbum];

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
          <div className="text-center">Loading albums...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Bộ sưu tập</h1>

        {/* name Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {names.map((name) => (
            <button
              key={name}
              onClick={() => {
                setSelectedname(name);
                setSelectedAlbum(0);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedname === name
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Album Selector */}
        {filteredAlbums.length > 0 && (
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
                {album.attributes.name} {/* Hiển thị name thay vì title */}
              </button>
            ))}
          </div>
        )}

        {/* Masonry Grid */}
        {currentAlbum && currentAlbum.attributes.images.data.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
            {currentAlbum.attributes.images.data.map((image, index) => {
              // Stagger heights for masonry effect
              const heights = ["h-64", "h-72", "h-80", "h-60", "h-68", "h-76"];
              const heightClass = heights[index % heights.length];

              return (
                <div
                  key={image.id}
                  className={`${heightClass} group relative overflow-hidden rounded-lg scroll-reveal cursor-pointer`}
                  onClick={() => setSelectedImage(image.attributes.url)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={image.attributes.url || "/placeholder.svg"}
                    alt={`${currentAlbum.attributes.name} image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredAlbums.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            No albums found for "{selectedname}"
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
  );
}
