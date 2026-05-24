import React from "react";
import bannerImg from "../assets/banner.png";
import playIcon from "../assets/Play.png";

const Banner = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 mb-6">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#7c3aed" }}></span>
            <span className="text-sm font-medium" style={{ color: "#7c3aed" }}>New: AI-Powered Tools Available</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-2">
            Supercharge Your
          </h1>
          <h1 className="text-5xl font-extrabold leading-tight mb-6" style={{ color: "#7c3aed" }}>
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg mb-2 max-w-lg leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <p className="text-gray-500 text-lg mb-8">Explore Products</p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              className="px-7 py-3.5 rounded-full text-white font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#7c3aed" }}
            >
              Explore Products
            </button>

            <button className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-300 font-medium text-gray-700 hover:border-gray-400 transition-colors">
              <span className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
                <img src={playIcon} alt="play" className="w-3 h-3" />
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right - Banner Image */}
        <div className="flex-1 flex justify-end">
          <img
            src={bannerImg}
            alt="Digital Tools"
            className="w-full max-w-lg rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
