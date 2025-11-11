"use client";

import { Trash2, Plus, Minus } from "lucide-react";

export function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300 card-lift group">
      {/* Product Image */}
      <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Size: {item.size}
          {item.color && ` • Color: ${item.color}`}
        </p>
        <p className="font-bold text-primary">
          {item.price.toLocaleString("vi-VN")} VNĐ
        </p>
      </div>

      {/* Quantity Stepper */}
      <div className="flex items-center gap-2 bg-muted rounded-lg p-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1 hover:bg-background rounded transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-6 text-center font-semibold">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-background rounded transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Subtotal */}
      <div className="text-right flex flex-col justify-center items-end">
        <p className="font-bold text-foreground">
          {(item.price * item.quantity).toLocaleString("vi-VN")} VNĐ
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-destructive hover:text-destructive/80 mt-2 transition-colors flex items-center gap-1 text-sm"
        >
          <Trash2 className="w-4 h-4" />
          Xóa
        </button>
      </div>
    </div>
  );
}
