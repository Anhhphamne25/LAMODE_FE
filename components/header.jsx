"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Search, ShoppingCart, User } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
              LUX
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium underline-animate"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center bg-muted rounded-lg px-3 py-2 hover:bg-muted/80 transition-colors duration-200">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-32 text-foreground placeholder:text-muted-foreground"
              />
              <Search className="w-4 h-4 text-muted-foreground ml-2" />
            </div>

            {/* Icons */}
            <button className="p-2 hover:bg-muted rounded-lg transition-all duration-200 hover:scale-110 group">
              <Search className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </button>
            <Link
              href="/cart"
              className="p-2 hover:bg-muted rounded-lg transition-all duration-200 hover:scale-110 group relative"
            >
              <ShoppingCart className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/account"
              className="p-2 hover:bg-muted rounded-lg transition-all duration-200 hover:scale-110 group"
            >
              <User className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-muted transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
