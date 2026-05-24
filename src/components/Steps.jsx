import React from "react";
import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  {
    num: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    num: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon,
  },
  {
    num: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];

const Steps = () => {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-3">
          Get Started in 3 Steps
        </h2>
        <p className="text-center text-gray-500 mb-14">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              {/* Step badge top-right */}
              <div
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#7c3aed" }}
              >
                {s.num}
              </div>

              {/* Icon circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: "#ede9fe" }}
              >
                <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain" style={{ filter: "invert(27%) sepia(91%) saturate(1500%) hue-rotate(247deg) brightness(80%)" }} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
