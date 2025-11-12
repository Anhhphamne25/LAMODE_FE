"use client";

import { ChevronDown, Package } from "lucide-react";

const statusConfig = {
  Delivered: {
    color: "text-green-600",
    bg: "bg-green-100",
    icon: require("lucide-react").CheckCircle,
  },
  Shipped: {
    color: "text-blue-600",
    bg: "bg-blue-100",
    icon: require("lucide-react").Truck,
  },
  Pending: { color: "text-yellow-600", bg: "bg-yellow-100", icon: Package },
  Cancelled: {
    color: "text-red-600",
    bg: "bg-red-100",
    icon: require("lucide-react").X,
  },
};

export function OrderCard({ order, isExpanded, onToggle }) {
  const Config = statusConfig[order.status];
  const StatusIcon = Config?.icon || Package;

  return (
    <div
      className={`bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 card-lift cursor-pointer ${
        isExpanded ? "shadow-lg" : ""
      }`}
      onClick={onToggle}
    >
      {/* Order Header */}
      <div className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
        <div className="flex items-center gap-4 flex-1">
          {/* Product Image */}
          <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0 overflow-hidden hidden sm:block">
            <img
              src={order.image || "/placeholder.svg"}
              alt="Order"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Order Info */}
          <div className="flex-1">
            <p className="font-bold text-lg text-foreground">{order.id}</p>
            <p className="text-sm text-muted-foreground">
              {new Date(order.date).toLocaleDateString("vi-VN", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </p>
            <p className="text-sm text-muted-foreground">
              {order.items} {order.items > 1 ? "sản phẩm" : "sản phẩm"}
            </p>
          </div>
        </div>

        {/* Status Badge & Price */}
        <div className="flex items-center gap-4 ml-4">
          <div className="text-right hidden sm:block">
            <p className="text-2xl font-bold text-primary">
              {order.amount.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <div className={`flex items-center gap-1 mt-1 ${Config?.color}`}>
              <StatusIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{order.status}</span>
            </div>
          </div>

          {/* Expand/Collapse Icon */}
          <ChevronDown
            className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {/* Order Details - Expanded */}
      {isExpanded && (
        <div className="border-t border-border bg-muted/20 p-6 space-y-4 animate-in fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Ngày đặt hàng
              </p>
              <p className="font-semibold">
                {new Date(order.date).toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Tổng số tiền</p>
              <p className="font-semibold text-primary text-lg">
                {order.amount.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Trạng thái</p>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${Config?.bg} ${Config?.color}`}
              >
                <StatusIcon className="w-4 h-4" />
                <span className="font-medium text-sm">{order.status}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
              Xem chi tiết
            </button>
            {order.status === "Delivered" && (
              <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-medium">
                Đặt lại
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
