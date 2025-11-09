"use client";

import ProductCard from "./product-card";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Áo sơ mi nam xanh siêu đpej",
    price: 350000,
    image:
      "https://i.pinimg.com/1200x/c9/0f/97/c90f9729c2954cafd264f85febffc33f.jpg",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 2,
    name: "Áo bò nam",
    price: 800000,
    image:
      "https://i.pinimg.com/1200x/d3/dd/79/d3dd79a740b05e3c3f0a3211c2bfb870.jpg",
    badge: "Sale",
    badgeType: "sale",
  },
  {
    id: 3,
    name: "Quần bò ống rộng",
    price: 499000,
    image:
      "https://i.pinimg.com/1200x/89/1c/4c/891c4ce5fcce9689cf3c27b2d5578393.jpg",
  },
  {
    id: 4,
    name: "Chân váy nhiều lớp",
    price: 459000,
    image:
      "https://i.pinimg.com/736x/51/01/31/51013131b64d8bcead53f26702f22abb.jpg",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 5,
    name: "Áo khoác gì đấy của nữ không biết tên",
    price: 699000,
    image:
      "https://i.pinimg.com/736x/83/0c/a7/830ca797e410ff0838d5d63ecf42c477.jpg",
    badge: "Sale",
    badgeType: "sale",
  },
  {
    id: 6,
    name: "Áo váy quần gì đấy tùy cảm nhận",
    price: 3990000,
    image:
      "https://i.pinimg.com/1200x/cf/a6/f3/cfa6f3bd13bd87e2121b09441d5e39c7.jpg",
  },
  {
    id: 7,
    name: "Quần âu thời thượng cao cấp",
    price: 700000,
    image:
      "https://i.pinimg.com/736x/7a/33/10/7a33105b35768248f2bbb8a78f9a6b5d.jpg",
  },
  {
    id: 8,
    name: "Quần áo gì đấy",
    price: 10000000,
    image:
      "https://scontent.cdninstagram.com/v/t51.75761-15/491465540_18066533636302402_2687226604775860086_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzYxNjM3ODA3MjUzMjE2OTA1OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=5yfbvgkKsUUQ7kNvwEcCd4b&_nc_oc=Adnci0VOXA8l25gwAjeZxnk7Rg3pow77aP4-CKPs1_xib3Hkl1mfVm_Lxj_5Wfx2F5DfdwaEmvwX9w8nn7KBzf8-&_nc_ad=z-m&_nc_cid=1573&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=hNEI7wedllLcd7X9L-G8tA&oh=00_AfioTTs_fq0SM000T1XDb-veswDnE9PxzO9wPUPlh4a9-A&oe=691681B1",
    badgeType: "new",
  },
];

export default function FeaturedProducts() {
  // lấy data từ api

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sản phẩm nổi bật
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl">
              Khám phá những sản phẩm bán chạy và mới nhất của chúng tôi.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:block text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:scale-105"
          >
            Xem tất cả →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="scroll-reveal"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                badge={product.badge}
                badgeType={product.badgeType}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/products"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
