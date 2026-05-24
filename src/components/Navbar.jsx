import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold" style={{ color: "#7c3aed" }}>
          DigiTools
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm">
          <li><a href="#" className="hover:text-gray-900 transition-colors">Product</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">Testimonials</a></li>
          <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-10H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                style={{ backgroundColor: "#7c3aed" }}>
                {cartCount}
              </span>
            )}
          </div>

          <a href="#" className="text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">Login</a>

          <button
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#7c3aed" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
