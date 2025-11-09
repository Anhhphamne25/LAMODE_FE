"use client";

import { useState, use } from "react";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Truck,
  RotateCcw,
  Shield,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Mock product data - in a real app, this would come from an API
const products = {
  1: {
    id: 1,
    name: "Quần short vải thô mỏng dáng A ống rộng phối ly xoè tạo kiểu khóa thân sau",
    price: 1290000,
    description:
      "Mẫu quần được các chị em yêu thích cái đẹp ưa chuộng. Đây là một gợi ý hay ho cho trang phục công sở hiện đại, đễ dàng phối đồ ở nhiều hoàn cảnh khác nhau. Chất liệu:Vải thô mỏng - 50% Polyester 40% Rayon 10% Nylon",
    images: [
      "https://cdn.hstatic.net/products/1000392326/bad73580__n__1298k_-_bqn73580__n__1198k__1__219c387ce97449149f61f2951cf92930_master.jpg",
      "https://cdn.hstatic.net/products/1000392326/bad73580__n__1298k_-_bqn73580__n__1198k__3__dab6c24d9e4c4e488bd3595c9d33c8ca_master.jpg",
      "https://cdn.hstatic.net/products/1000392326/bad73580__n__1298k_-_bqn73580__n__1198k__2__a04fe770568543da84f1f3952563c19d_master.jpg",
      "https://cdn.hstatic.net/products/1000392326/bad73580__b__1298k_-_bqn73580__b__1198k__1__cff5d78ced4249c29db2e4d762d9cbc1_master.jpg",
    ],
    category: "skirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Cream", "Navy", "Charcoal"],
    material: "100% Grade-A Cashmere",
    care: "Chỉ giặt khô",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: "New",
  },
  2: {
    id: 2,
    name: "Silk Blend Dress",
    price: 189.99,
    description:
      "Elegant silk blend dress featuring a flowing silhouette and luxurious drape. This versatile piece transitions seamlessly from day to evening wear.",
    images: [
      "/elegant-silk-dress.jpg",
      "/silk-dress-detail.jpg",
      "/silk-dress-back.jpg",
    ],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Burgundy", "Emerald"],
    material: "70% Silk, 30% Cotton",
    care: "Hand wash cold",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    badge: "Sale",
  },
};

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const product = products[resolvedParams.id] || products[1];

  const { addToCart, addToWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        color: selectedColor,
      },
      quantity
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-foreground/60">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
                <img
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-foreground/60 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-primary">
                  {Number(product.price).toLocaleString("vi-VN")} VNĐ
                </p>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Size:{" "}
                  <span className="font-normal text-foreground/60">
                    {selectedSize}
                  </span>
                </label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Color:{" "}
                  <span className="font-normal text-foreground/60">
                    {selectedColor}
                  </span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg transition-all ${
                        selectedColor === color
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Số lượng
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x-2 border-border">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                  {product.inStock ? (
                    <span className="text-sm text-green-600 font-medium">
                      Còn hàng
                    </span>
                  ) : (
                    <span className="text-sm text-red-600 font-medium">
                      Hết hàng
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedToCart ? "Đã thêm vào giỏ hàng!" : "Thêm vào giỏ hàng"}
                </button>
                <button
                  onClick={handleWishlist}
                  className={`px-4 py-3 border-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                    isInWishlist(product.id)
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border hover:border-accent"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist(product.id) ? "fill-current" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Free Shipping</p>
                    <p className="text-xs text-foreground/60">
                      Đơn hàng trên 2 triệu
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Easy Returns</p>
                    <p className="text-xs text-foreground/60">
                      30 ngày từ khi mua
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Secure Payment</p>
                    <p className="text-xs text-foreground/60">
                      Thanh toán an toàn 100%
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="font-bold text-lg">Chi tiết sản phẩm</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Chất liệu:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Chăm sóc:</span>
                    <span className="font-medium">{product.care}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Danh mục:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
