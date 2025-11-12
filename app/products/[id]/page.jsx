"use client";

import { useState, use, useEffect } from "react";
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

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Không dùng product khi chưa có dữ liệu
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://giving-warmth-26b1385265.strapiapp.com/api/products?populate[image][fields][0]=url&populate[colors][fields][0]=name&populate[sizes][fields][0]=name&populate[categories][fields][0]=name&populate[categorytinies][fields][0]=name&pagination[pageSize]=100"
        );
        const data = await response.json();

        const mappedProducts = (data.data || []).map((item) => {
          const attrs = item.attributes;
          return {
            id: item.id,
            name: attrs.name,
            description: attrs.description,
            price: attrs.price,
            material: attrs.material,
            care: attrs.care,
            rating: attrs.rating || 0,
            inStock: attrs.inStock,
            badge: attrs.badge,
            images: attrs.image?.data?.map((img) => img.attributes.url) || [],
            colors:
              attrs.colors?.data?.map((color) => color.attributes.name) || [],
            sizes: attrs.sizes?.data?.map((size) => size.attributes.name) || [],
            categories:
              attrs.categories?.data?.map((cat) => cat.attributes.name) || [],
            categorytinies:
              attrs.categorytinies?.data?.map((cat) => cat.attributes.name) ||
              [],
          };
        });

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Xác định product sau khi có dữ liệu
  const product =
    products.find((p) => p.id === Number(resolvedParams.id)) || products[0];

  // ✅ Khi product thay đổi, cập nhật lại size/color mặc định
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || "");
      setSelectedColor(product.colors?.[0] || "");
    }
  }, [product]);

  if (loading || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Đang tải sản phẩm...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
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
      image: product.images?.[0],
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
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
                <img
                  src={
                    product.images?.[currentImageIndex] || "/placeholder.svg"
                  }
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                )}

                {/* Navigation Arrows */}
                {product.images?.length > 1 && (
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

              <div className="grid grid-cols-4 gap-4">
                {product.images?.map((image, index) => (
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
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
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
                  {product.rating} ★
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Giá gốc (tăng 10%) */}
                <p className="text-xl text-gray-400 line-through">
                  {(Number(product.price) * 1.15).toLocaleString("vi-VN")} VNĐ
                </p>

                {/* Giá hiện tại */}
                <p className="text-3xl font-bold text-primary">
                  {Number(product.price).toLocaleString("vi-VN")} VNĐ
                </p>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {product.description}
              </p>

              {/* Size */}
              {product.sizes?.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Size: <span className="font-normal">{selectedSize}</span>
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
              )}

              {/* Color */}
              {product.colors?.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Color: <span className="font-normal">{selectedColor}</span>
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
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Số lượng
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x-2 border-border">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted"
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

              {/* Product details */}
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
                    <span className="font-medium">
                      {product.categories?.join(", ")}
                    </span>
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
