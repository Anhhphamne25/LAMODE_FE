"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProfileForm } from "@/components/account/profile-form";
import { AccountSidebar } from "@/components/account/account-sidebar";

const mockOrders = [
  { id: "ORD-001", date: "2025-01-15", amount: 10000000, status: "Delivered" },
  { id: "ORD-002", date: "2025-01-10", amount: 100000000, status: "Shipped" },
  { id: "ORD-003", date: "2025-01-08", amount: 99000000, status: "Pending" },
];

const mockWishlist = [
  {
    id: 1,
    name: "Áo",
    price: 9292000,
    image:
      "https://i.pinimg.com/1200x/b7/be/d4/b7bed43451eec2e16fe72d204b22391e.jpg",
  },
  {
    id: 2,
    name: "Quần",
    price: 12999000,
    image:
      "https://i.pinimg.com/736x/f1/f6/d8/f1f6d85b3a0619f7d9e96629d3821f7b.jpg",
  },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    name: "Phạm Tuấn Anh",
    email: "phamtuananh@gmail.com",
    phone: "+84 828825905",
    address: "207 đường Giải Phóng, phường Bạch Mai, Hà Nội, Việt Nam",
    city: "Hà Nội",
    state: "HN",
    zipcode: "100000",
    country: "Vietnam",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const tabs = ["Thông tin", "Đơn hàng", "Danh sách yêu thích"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Tài khoản</h1>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all duration-300 border-b-2 ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === "Thông tin" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 scroll-reveal">
              <ProfileForm
                profileData={profileData}
                onProfileChange={handleProfileChange}
              />
            </div>
            <div className="scroll-reveal" style={{ animationDelay: "0.1s" }}>
              <AccountSidebar />
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "Đơn hàng" && (
          <div className="space-y-4">
            {mockOrders.map((order, index) => (
              <div
                key={order.id}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-lg p-6 card-lift flex justify-between items-center hover:shadow-lg transition-all">
                  <div>
                    <p className="font-bold text-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      {Number(order.amount).toLocaleString("vi-VN")} VNĐ
                    </p>
                    <span
                      className={`text-sm font-medium ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Shipped"
                          ? "text-blue-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {order.status === "Delivered"
                        ? "Đã giao hàng"
                        : order.status === "Shipped"
                        ? "Đã vận chuyển"
                        : "Đang xử lý"}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-medium">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === "Danh sách yêu thích" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockWishlist.map((item, index) => (
              <div
                key={item.id}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden card-lift group">
                  <div className="h-40 bg-muted overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-foreground text-sm line-clamp-2 mb-2">
                      {item.name}
                    </p>
                    <p className="text-lg font-bold text-primary mb-3">
                      {Number(item.price).toLocaleString("vi-VN")} VNĐ
                    </p>
                    <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-medium">
                      Thêm vào giỏ hàng
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
