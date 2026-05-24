import React from "react";

const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section style={{ background: "linear-gradient(to right, #4f46e5, #9333ea)" }} className="py-12 px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-center">
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex-1 text-center text-white">
              <p className="text-5xl font-extrabold mb-2">{s.value}</p>
              <p className="text-base font-medium text-purple-100">{s.label}</p>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-16 bg-purple-300 opacity-50 mx-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
