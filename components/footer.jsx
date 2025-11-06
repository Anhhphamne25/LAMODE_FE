"use client";

import { useState } from "react";
import { Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    Shop: [
      { label: "New Arrivals", href: "#" },
      { label: "Best Sellers", href: "#" },
      { label: "Sale Items", href: "#" },
      { label: "Gift Cards", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    Support: [
      { label: "Contact Us", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20 py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">Cập Nhật Thông Tin</h3>
              <p className="text-primary-foreground/80">
                Đăng ký nhận bản tin của chúng tôi để nhận ưu đãi độc quyền và
                mẹo thời trang.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-l-lg text-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-r-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Đăng Ký
              </button>
            </form>
            {subscribed && (
              <div className="col-span-full text-center text-accent animate-in fade-in">
                Cảm ơn bạn đã đăng ký!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">LAMODE</h2>
              <p className="text-primary-foreground/80 mb-6">
                Thời trang đỉnh cao, phong cách vượt thời gian.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-2 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 group"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5 text-primary-foreground group-hover:text-accent transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link Groups */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold mb-4 text-lg">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © 2025 LAMODE Fashion.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
