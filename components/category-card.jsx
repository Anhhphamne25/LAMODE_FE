"use client";

import { useState } from "react";

export default function CategoryCard({ name, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden  cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-square overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? "opacity-60" : "opacity-40"
          }`}
        ></div>
        <div
          className={`absolute inset-0 flex items-end justify-center pb-6 transition-transform duration-500 ${
            isHovered ? "translate-y-0" : "translate-y-4"
          }`}
        >
          <h3 className="text-2xl font-semibold text-white text-center">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}
