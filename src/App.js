import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import products from "./products";

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.warning(`"${product.name}" is already in your cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`"${product.name}" added to cart!`);
  };

  const handleRemove = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart(cart.filter((i) => i.id !== id));
    toast.error(`"${item.name}" removed from cart.`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }
    setCart([]);
    toast.success("🎉 Checkout successful! Thank you!");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      {/* Products & Cart Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products designed
            to boost your productivity and creativity.
          </p>

          {/* Tab switcher - exact match from screenshot */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-full p-1" style={{ backgroundColor: "#f3f4f6" }}>
              <button
                onClick={() => setActiveTab("products")}
                className="px-8 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={
                  activeTab === "products"
                    ? { backgroundColor: "#7c3aed", color: "white" }
                    : { color: "#6b7280", backgroundColor: "transparent" }
                }
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("cart")}
                className="px-8 py-2.5 rounded-full text-sm font-semibold transition-all"
                style={
                  activeTab === "cart"
                    ? { backgroundColor: "#7c3aed", color: "white" }
                    : { color: "#6b7280", backgroundColor: "transparent" }
                }
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {activeTab === "products" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          )}

          {/* Cart */}
          {activeTab === "cart" && (
            <div className="max-w-2xl mx-auto">
              {cart.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
                  <p className="text-gray-400 mb-6">Browse products and add tools to your cart.</p>
                  <button
                    onClick={() => setActiveTab("products")}
                    className="px-6 py-3 rounded-xl text-white font-semibold"
                    style={{ background: "linear-gradient(to right, #6d28d9, #9333ea)" }}
                  >
                    Browse Products
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} onRemove={handleRemove} />
                  ))}

                  {/* Total */}
                  <div className="rounded-2xl p-5 mt-2 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ backgroundColor: "#f3e8ff" }}>
                    <div>
                      <p className="text-gray-500 text-sm">Total ({cart.length} item{cart.length > 1 ? "s" : ""})</p>
                      <p className="text-3xl font-extrabold" style={{ color: "#7c3aed" }}>
                        ${totalPrice.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="px-8 py-3 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(to right, #6d28d9, #9333ea)" }}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
