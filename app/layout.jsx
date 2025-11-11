import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "@/contexts/cart-context";
import "./globals.css";

// Cấu hình Geist font với phong cách minimal
const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500"], // Chỉ dùng các weight mảnh, gọn
  display: "swap",
  variable: "--font-geist", // Thêm biến CSS
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "LaMode",
  description: "Created by AhhPam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/lamodelogo.ico" sizes="any" />
      </head>
      <body
        className={`font-sans antialiased min-h-screen bg-white text-gray-900`}
      >
        <CartProvider>{children}</CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
