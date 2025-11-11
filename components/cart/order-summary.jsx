"use client";

export function OrderSummary({
  subtotal,
  discount,
  discountAmount,
  total,
  promoCode,
  onPromoChange,
  onApplyPromo,
  onCheckout,
  onContinueShopping,
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24 card-lift">
      <h2 className="text-2xl font-bold mb-6">Tổng thể hóa đơn</h2>

      {/* Promo Code */}
      <div className="mb-6 pb-6 border-b border-border">
        <label className="block text-sm font-medium mb-2">Mã giảm giá</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => onPromoChange(e.target.value)}
            placeholder="Enter code"
            className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
          <button
            onClick={onApplyPromo}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium"
          >
            Áp dụng
          </button>
        </div>
        {discount > 0 && (
          <p className="text-sm text-accent mt-2">
            Đã áp dụng giảm giá: {(discount * 100).toFixed(0)}% off
          </p>
        )}
      </div>

      {/* Pricing */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tạm tính</span>
          <span className="font-medium">
            {subtotal.toLocaleString("vi-VN")} VNĐ
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Vận chuyển</span>
          <span className="font-medium">Miễn phí</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-sm text-accent">
            <span>Giảm giá</span>
            <span>{discountAmount.toLocaleString("vi-VN")} VNĐ</span>
          </div>
        )}
        <div className="border-t border-border pt-3 flex justify-between">
          <span className="font-bold">Tổng cộng</span>
          <span className="text-xl font-bold text-primary">
            {total.toLocaleString("vi-VN")} VNĐ
          </span>
        </div>
      </div>

      <button
        onClick={onCheckout}
        className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
      >
        Thanh toán
      </button>
      <button
        onClick={onContinueShopping}
        className="w-full mt-3 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
      >
        Tiếp tục mua sắm
      </button>
    </div>
  );
}
