"use client";

import Carousel from "./carousel";

const newCollectionItems = [
  {
    id: 1,
    name: "Khoác dạ trơn",
    price: 880000,
    image:
      "https://pos.nvncdn.com/c8125d-209906/ps/20251107_3AXAIzBA9S.jpeg?v=1762521016",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 2,
    name: "Khoác set cổ tăm",
    price: 600000,
    image:
      "https://pos.nvncdn.com/c8125d-209906/ps/20251107_a3Y4ruXAbp.jpeg?v=1762519441",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 3,
    name: "áo đẹp",
    price: 868000,
    image:
      "https://pos.nvncdn.com/c8125d-209906/ps/20251026_vvNkLVYbJi.jpeg?v=1761456898",
  },
  {
    id: 4,
    name: "Áo sơ mi kiểu công sở",
    price: 935000,
    image:
      "https://cdn.hstatic.net/products/1000392326/bas13370-_g_-898k---bjd13370-_g_-998k-_3__bcf8b3ac2c104defb22d573ffc910a22.jpg",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 5,
    name: "Chân váy công sở",
    price: 998000,
    image:
      "https://cdn.hstatic.net/products/1000392326/fat3471__b__498k_-_fjd51334__b__998k__3__41f50ff52eb34ae4a445c7f040c8e8e4.jpg",
    badge: "New",
    badgeType: "new",
  },
  {
    id: 6,
    name: "Quần ngắn vải thô",
    price: 899000,
    image:
      "https://cdn.hstatic.net/products/1000392326/bad73580__n__1298k_-_bqn73580__n__1198k__3__dab6c24d9e4c4e488bd3595c9d33c8ca.jpg",
  },
];

export default function NewCollection() {
  return (
    <Carousel
      items={newCollectionItems}
      title="New Arrivals"
      description="Discover fresh styles just added to our collection"
      autoScroll={true}
      autoScrollInterval={6000}
    />
  );
}
