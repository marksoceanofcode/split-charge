import React from "react";

const PlanTiers = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "Perfect for individuals just getting started.",
      features: ["3 Projects", "Basic Analytics", "Community Support"],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$29",
      description: "Best for growing teams and power users.",
      features: ["Unlimited Projects", "Advanced Analytics", "Priority Email Support"],
      buttonText: "Go Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "Tailored solutions for large organizations.",
      features: ["Custom SLAs", "Dedicated Account Manager", "24/7 Phone Support"],
      buttonText: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that works best for your needs.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 
                ${
                  plan.highlighted
                    ? "bg-white ring-4 ring-indigo-600 shadow-2xl scale-105 z-10"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                }`}
            >
              {plan.highlighted && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              {/* Price Header - Centered */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold tracking-tight text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 font-medium">/month</span>
                </div>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-slate-600">
                    <svg
                      className="w-5 h-5 text-indigo-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors 
                  ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanTiers;
