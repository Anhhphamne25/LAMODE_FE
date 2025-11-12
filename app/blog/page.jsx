"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const mockBlogPosts = [
  {
    id: 1,
    title: "Shop thời trang LAMODE thống lĩnh thị trường",
    excerpt:
      "Gần đây những xu hướng thời trang mới nhất đã xuất hiện, mang đến cho người tiêu dùng nhiều lựa chọn phong cách và sáng tạo hơn bao giờ hết.",
    image: "/blog1.jpg",
    category: "Fashion Trends",
    date: "November 2025",
    author: "AhhPam",
    readTime: 50,
  },
  {
    id: 2,
    title: "Thời trang bền vững: Đầu tư vào chất lượng thay vì số lượng",
    excerpt:
      "Tìm hiểu cách xây dựng tủ quần áo bền vững bằng cách chọn những món đồ chất lượng, bền lâu và giảm thiểu lãng phí.",
    image: "/blog2.jpg",
    category: "Lifestyle",
    date: "October 2025",
    author: "MinToo",
    readTime: 27,
  },
  {
    id: 3,
    title: "Hướng dẫn phong cách tối ưu cho mọi dáng người",
    excerpt:
      "Master the art of styling with our comprehensive guide covering outfit combinations, color coordination, and accessory pairing tips.",
    image: "/blog3.jpg",
    category: "Styling Tips",
    date: "September 2025",
    author: "DoMixi",
    readTime: 800,
  },
  {
    id: 4,
    title: "Luxury Fabrics: Understanding Quality Materials",
    excerpt:
      "Dive deep into the world of premium fabrics. Learn about cashmere, silk, linen, and what makes high-quality materials worth the investment.",
    image: "/aboutus.jpg",
    category: "Materials",
    date: "September 2025",
    author: "Isabella Moore",
    readTime: 6,
  },
  {
    id: 5,
    title: "Wardrobe Essentials: Building Your Capsule Closet",
    excerpt:
      "Create a functional, versatile wardrobe with timeless pieces that work together. Your guide to the perfect capsule collection.",
    image: "/blog2.jpg",
    category: "Wardrobe",
    date: "August 2024",
    author: "Emma Style",
    readTime: 9,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Fashion Trends",
    "Sustainability",
    "Styling Tips",
    "Materials",
    "Wardrobe",
  ];
  const filteredPosts =
    selectedCategory === "All"
      ? mockBlogPosts
      : mockBlogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Fashion Insights</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16 scroll-reveal">
            <div className="bg-card rounded-lg overflow-hidden border border-border card-lift">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Featured Image */}
                <div className="h-80 md:h-full bg-muted overflow-hidden group">
                  <img
                    src={filteredPosts[0].image || "/placeholder.svg"}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Featured Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold mb-4">
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <span>{filteredPosts[0].author}</span>
                    <span>•</span>
                    <span>
                      {new Date(filteredPosts[0].date).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                    <span>•</span>
                    <span>{filteredPosts[0].readTime} min read</span>
                  </div>
                  <button className="w-fit px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-muted rounded-lg">
            <p className="text-muted-foreground text-lg">No articles found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map((post, index) => (
              <div
                key={post.id}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-lg overflow-hidden border border-border card-lift h-full flex flex-col group transition-all duration-300">
                  {/* Post Image */}
                  <div className="h-48 bg-muted overflow-hidden relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="inline-block w-fit px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-2 flex-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readTime} min</span>
                    </div>
                    <button className="w-full py-2 text-primary font-semibold hover:text-primary/80 transition-colors flex items-center justify-center gap-2 group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
