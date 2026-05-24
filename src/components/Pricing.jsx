import React from "react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "$0",
    period: "Month",
    features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: "$29",
    period: "Month",
    features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
    cta: "Get Started Free",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "$99",
    period: "Month",
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
    cta: "Get Started Free",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-500 mb-14">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted ? "text-white shadow-2xl" : "bg-gray-50 border border-gray-200 shadow-sm"
              }`}
              style={plan.highlighted ? { background: "linear-gradient(135deg, #6d28d9, #9333ea)" } : {}}
            >
              {/* Most Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-200 text-yellow-800">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? "text-purple-200" : "text-gray-500"}`}>
                {plan.subtitle}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-base ${plan.highlighted ? "text-purple-200" : "text-gray-500"}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: plan.highlighted ? "#86efac" : "#22c55e" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.highlighted ? "text-purple-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-base transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-white"
                    : "text-white"
                }`}
                style={
                  plan.highlighted
                    ? { color: "#7c3aed" }
                    : { background: "linear-gradient(to right, #6d28d9, #9333ea)" }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
