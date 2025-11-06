"use client";

import Carousel from "./carousel";

const newCollectionItems = [
  {
    id: 1,
    name: "Modern Minimalist Coat",
    price: 349.99,
    image: "/placeholder.svg?key=coat123",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 2,
    name: "Statement Leather Bag",
    price: 189.99,
    image: "/placeholder.svg?key=bag456",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 3,
    name: "Classic White Tee",
    price: 49.99,
    image: "/placeholder.svg?key=tee789",
  },
  {
    id: 4,
    name: "Elegant Maxi Skirt",
    price: 129.99,
    image: "/placeholder.svg?key=skirt101",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 5,
    name: "Premium Sunglasses",
    price: 199.99,
    image: "/placeholder.svg?key=glasses112",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 6,
    name: "Comfortable Loafers",
    price: 139.99,
    image: "/placeholder.svg?key=loafers131",
  },
];

export default function NewCollection() {
  return (
    <Carousel
      items={newCollectionItems}
      title="Sản phẩm mới về"
      description="Sản phẩm mới nhất vừa được thêm vào cửa hàng của chúng tôi."
      autoScroll={true}
      autoScrollInterval={6000}
    />
  );
}
