"use client";

import BlogCard from "./blog-card";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    image: "/blog1.jpg",
    title: "Shop thời trang LAMODE thống lĩnh thị trường",
    excerpt:
      "Gần đây những xu hướng thời trang mới nhất đã xuất hiện, mang đến cho người tiêu dùng nhiều lựa chọn phong cách và sáng tạo hơn bao giờ hết.",
    date: "November 2025",
    category: "Fashion",
  },
  {
    id: 2,
    image: "/blog2.jpg",
    title: "Thời trang bền vững: Đầu tư vào chất lượng thay vì số lượng",
    excerpt:
      "Tìm hiểu cách xây dựng tủ quần áo bền vững bằng cách chọn những món đồ chất lượng, bền lâu và giảm thiểu lãng phí.",
    date: "October 2025",
    category: "Lifestyle",
  },
  {
    id: 3,
    image: "/blog3.jpg",
    title: "Hướng dẫn phong cách tối ưu cho mọi dáng người",
    excerpt:
      "Mẹo chuyên gia về cách ăn mặc phù hợp với dáng người của bạn và tạo ra những phong cách tôn lên sự tự tin.",
    date: "September 2025",
    category: "Style Tips",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thời trang & Lối sống
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl">
            Khám phá những bài viết mới nhất về thời trang, mẹo phong cách và
            những hiểu biết về lối sống.
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
          <Link href="/blog">
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Xem tất cả bài viết
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
