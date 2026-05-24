import React from "react";

const CTA = () => {
  return (
    <section
      className="py-20 px-6 text-center text-white"
      style={{ background: "linear-gradient(135deg, #4f46e5, #9333ea)" }}
    >
      <h2 className="text-4xl font-extrabold mb-4">
        Ready to Transform Your Workflow?
      </h2>
      <p className="text-purple-200 text-base mb-8 max-w-xl mx-auto">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br />Start your free trial today.
      </p>

      <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
        <button className="px-7 py-3 rounded-full bg-white font-semibold text-base hover:bg-purple-50 transition-colors" style={{ color: "#7c3aed" }}>
          Explore Products
        </button>
        <button className="px-7 py-3 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-purple-700 transition-colors">
          View Pricing
        </button>
      </div>

      <p className="text-purple-200 text-sm">
        14-day free trial &bull; No credit card required &bull; Cancel anytime
      </p>
    </section>
  );
};

export default CTA;
