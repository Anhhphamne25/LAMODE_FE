"use client";

import BlogCard from "./blog-card";

const blogPosts = [
  {
    id: 1,
    image: "/placeholder.svg?key=fashion_tips_2024",
    title: "2024 Fashion Trends: What's Hot This Season",
    excerpt:
      "Discover the latest fashion trends dominating the runway and streets. From bold colors to timeless classics.",
    date: "November 2024",
    category: "Fashion",
  },
  {
    id: 2,
    image: "/placeholder.svg?key=sustainable_fashion",
    title: "Sustainable Fashion: Investing in Quality Over Quantity",
    excerpt:
      "Learn how to build a sustainable wardrobe by choosing quality pieces that last longer and reduce waste.",
    date: "October 2024",
    category: "Lifestyle",
  },
  {
    id: 3,
    image: "/placeholder.svg?key=styling_guide",
    title: "The Ultimate Styling Guide for Every Body Type",
    excerpt:
      "Expert tips on how to dress for your body type and create flattering looks that make you feel confident.",
    date: "September 2024",
    category: "Style Tips",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thời trang và cuộc sống
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Cập nhật những xu hướng mới nhất, mẹo phong cách và câu chuyện
            truyền cảm hứng từ thế giới thời trang và
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              category={post.category}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
            Xem tất cả bài viết
          </button>
        </div>
      </div>
    </section>
  );
}
