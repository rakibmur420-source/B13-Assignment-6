import React from "react";

const tagConfig = {
  "Best Seller": { bg: "#fef9c3", text: "#a16207", border: "#fde68a" },
  "Popular":     { bg: "#f3e8ff", text: "#7c3aed", border: "#e9d5ff" },
  "New":         { bg: "#dcfce7", text: "#15803d", border: "#bbf7d0" },
};

const ProductCard = ({ product, onAddToCart }) => {
  const { name, description, price, period, tag, icon } = product;
  const tagStyle = tagConfig[tag] || tagConfig["New"];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      {/* Top row: icon + tag */}
      <div className="flex items-start justify-between mb-4">
        <img src={icon} alt={name} className="w-12 h-12 object-contain" />
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: tagStyle.bg, color: tagStyle.text }}
        >
          {tag}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-3xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm">/{period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-1.5 mb-6">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#22c55e" }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Buy Now Button - full width, purple gradient */}
      <button
        onClick={() => onAddToCart(product)}
        className="w-full py-3 rounded-xl text-white font-semibold text-base transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(to right, #6d28d9, #9333ea)" }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
