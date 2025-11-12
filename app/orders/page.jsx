"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { StatusFilter } from "@/components/orders/status-filter";
import { OrderCard } from "@/components/orders/order-card";

const mockOrders = [
  {
    id: "ORD-2025-001",
    date: "2025-01-15",
    amount: 41997000,
    status: "Delivered",
    items: 3,
    image: "/order.jpg",
  },
  {
    id: "ORD-2025-002",
    date: "2025-01-10",
    amount: 22998000,
    status: "Shipped",
    items: 2,
    image: "/order.jpg",
  },
  {
    id: "ORD-2025-003",
    date: "2025-01-08",
    amount: 9999000,
    status: "Pending",
    items: 1,
    image: "/order.jpg",
  },
  {
    id: "ORD-2025-004",
    date: "2024-12-28",
    amount: 34998000,
    status: "Delivered",
    items: 4,
    image: "/order.jpg",
  },
  {
    id: "ORD-2025-005",
    date: "2024-12-20",
    amount: 15999000,
    status: "Cancelled",
    items: 2,
    image: "/order.jpg",
  },
];

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [expandedOrder, setExpandedOrder] = useState(null);

  const statuses = ["All", "Pending", "Shipped", "Delivered", "Cancelled"];
  const filteredOrders =
    selectedStatus === "All"
      ? mockOrders
      : mockOrders.filter((order) => order.status === selectedStatus);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 fade-in-up">Lịch sử đơn hàng</h1>

        <StatusFilter
          statuses={statuses}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12 bg-muted rounded-lg">
            <p className="text-muted-foreground text-lg">
              Không tìm thấy đơn hàng
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order, index) => (
              <div
                key={order.id}
                className="scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <OrderCard
                  order={order}
                  isExpanded={expandedOrder === order.id}
                  onToggle={() =>
                    setExpandedOrder(
                      expandedOrder === order.id ? null : order.id
                    )
                  }
                />
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
