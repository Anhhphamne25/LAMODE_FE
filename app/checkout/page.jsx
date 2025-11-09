"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";
import { CreditCard, Lock, ChevronLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "Việt Nam",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [shippingMethod, setShippingMethod] = useState("standard");

  const shippingCosts = {
    standard: 0,
    express: 30000,
    overnight: 60000,
  };

  const subtotal = getCartTotal();
  const shipping = shippingCosts[shippingMethod];
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart and redirect to success page
    clearCart();
    router.push("/order-success");
  };

  if (cart.length === 0 && !isProcessing) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">
              Giỏ hàng của bạn đang trống
            </h1>
            <p className="text-foreground/60 mb-8">
              Thêm một số sản phẩm vào giỏ hàng để tiếp tục thanh toán.
            </p>
            <Link
              href="/products"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Quay lại giỏ hàng
          </Link>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {[
                { num: 1, label: "Vận chuyển" },
                { num: 2, label: "Thanh Toán" },
                { num: 3, label: "Xem lại" },
              ].map((s, idx) => (
                <div key={s.num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step >= s.num
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground/40"
                      }`}
                    >
                      {s.num}
                    </div>
                    <span
                      className={`text-sm mt-2 ${
                        step >= s.num
                          ? "text-foreground font-medium"
                          : "text-foreground/40"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div
                      className={`w-16 md:w-24 h-1 mx-4 transition-colors ${
                        step > s.num ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-6">
                    Thông tin vận chuyển
                  </h2>
                  <form onSubmit={handleShippingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Họ
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Tên
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Địa chỉ
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Thành phố
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              city: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Tỉnh/Thành phố
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.state}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              state: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Mã bưu điện
                        </label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.zipCode}
                          onChange={(e) =>
                            setShippingInfo({
                              ...shippingInfo,
                              zipCode: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="pt-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Phương thức vận chuyển
                      </h3>
                      <div className="space-y-3">
                        {[
                          {
                            id: "standard",
                            label: "Vận chuyển tiêu chuẩn",
                            time: "5-7 ngày làm việc",
                            cost: 0,
                          },
                          {
                            id: "express",
                            label: "Vận chuyển nhanh",
                            time: "2-3 ngày làm việc",
                            cost: 30000,
                          },
                          {
                            id: "overnight",
                            label: "Giao hàng qua đêm",
                            time: "Ngày làm việc tiếp theo",
                            cost: 60000,
                          },
                        ].map((method) => (
                          <label
                            key={method.id}
                            className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              shippingMethod === method.id
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                name="shipping"
                                value={method.id}
                                checked={shippingMethod === method.id}
                                onChange={(e) =>
                                  setShippingMethod(e.target.value)
                                }
                                className="w-4 h-4 text-primary"
                              />
                              <div>
                                <p className="font-medium">{method.label}</p>
                                <p className="text-sm text-foreground/60">
                                  {method.time}
                                </p>
                              </div>
                            </div>
                            <p className="font-semibold">
                              {method.cost === 0
                                ? "FREE"
                                : `${method.cost.toLocaleString("vi-VN")} VNĐ`}
                            </p>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
                    >
                      Tiếp tục thanh toán
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="text-2xl font-bold mb-6">
                    Thông tin thanh toán
                  </h2>
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Số thẻ
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          value={paymentInfo.cardNumber}
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              cardNumber: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 pl-12 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Tên chủ thẻ
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="PHAM TUAN ANH"
                        value={paymentInfo.cardName}
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cardName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Ngày hết hạn
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          maxLength="5"
                          value={paymentInfo.expiryDate}
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              expiryDate: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          maxLength="4"
                          value={paymentInfo.cvv}
                          onChange={(e) =>
                            setPaymentInfo({
                              ...paymentInfo,
                              cvv: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
                      <Lock className="w-5 h-5 text-primary" />
                      <p className="text-sm text-foreground/70">
                        Thông tin thanh toán của bạn được mã hóa và bảo mật
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3 border-2 border-border font-semibold rounded-lg hover:bg-muted transition-all duration-300"
                      >
                        Quay lại
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
                      >
                        Xem lại đơn hàng
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Review Order */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h2 className="text-2xl font-bold mb-6">
                      Xem lại đơn hàng của bạn
                    </h2>

                    {/* Shipping Info Review */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">Địa chỉ giao hàng</h3>
                        <button
                          onClick={() => setStep(1)}
                          className="text-sm text-primary hover:underline"
                        >
                          Chỉnh sửa
                        </button>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>{shippingInfo.address}</p>
                        <p>
                          {shippingInfo.city}, {shippingInfo.state}{" "}
                          {shippingInfo.zipCode}
                        </p>
                        <p>{shippingInfo.email}</p>
                        <p>{shippingInfo.phone}</p>
                      </div>
                    </div>

                    {/* Payment Info Review */}
                    <div className="mb-6 pb-6 border-b border-border">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">
                          Phương thức thanh toán
                        </h3>
                        <button
                          onClick={() => setStep(2)}
                          className="text-sm text-primary hover:underline"
                        >
                          Chỉnh sửa
                        </button>
                      </div>
                      <div className="text-sm text-foreground/70">
                        <p>
                          Số thẻ kết thúc bằng{" "}
                          {paymentInfo.cardNumber.slice(-4)}
                        </p>
                        <p>{paymentInfo.cardName}</p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div>
                      <h3 className="font-semibold mb-4">
                        Sản phẩm trong đơn hàng ({cart.length})
                      </h3>
                      <div className="space-y-4">
                        {cart.map((item) => (
                          <div
                            key={`${item.id}-${item.size}`}
                            className="flex gap-4"
                          >
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-foreground/60">
                                Size: {item.size}{" "}
                                {item.color && `• Color: ${item.color}`}
                              </p>
                              <p className="text-sm text-foreground/60">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <p className="font-semibold">
                              {(item.price * item.quantity).toLocaleString(
                                "vi-VN"
                              )}{" "}
                              VNĐ
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 border-2 border-border font-semibold rounded-lg hover:bg-muted transition-all duration-300"
                    >
                      Quay lại
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      disabled={isProcessing}
                      className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50"
                    >
                      {isProcessing ? "Đang xử lý..." : "Đặt hàng"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
                <h3 className="text-xl font-bold mb-4">Tóm tắt đơn hàng</h3>
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Tạm tính</span>
                    <span className="font-medium">
                      {subtotal.toLocaleString("vi-VN")} VNĐ
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Phí vận chuyển</span>
                    <span className="font-medium">
                      {shipping === 0
                        ? "MIỄN PHÍ"
                        : `${shipping.toLocaleString("vi-VN")} VNĐ`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60">Thuế</span>
                    <span className="font-medium">
                      {tax.toLocaleString("vi-VN")} VNĐ
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Tổng cộng</span>
                  <span className="text-primary">
                    {total.toLocaleString("vi-VN")} VNĐ
                  </span>
                </div>

                <div className="space-y-2 text-xs text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Thanh toán an toàn</span>
                  </div>
                  <p>Miễn phí trả hàng trong vòng 30 ngày</p>
                  <p>Giao hàng trong 1-2 ngày làm việc</p>
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
