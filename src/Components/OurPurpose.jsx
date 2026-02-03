import React from "react";
import { Target, Eye, Zap } from "lucide-react";

export default function CircuitPurpose() {
  const data = [
    {
      title: "Our Mission",
      icon: Target,
      text: "To empower businesses with reliable HR solutions and comprehensive employee screening services that enhance hiring accuracy, ensure compliance, and drive organizational growth.",
      accent: "#2EC4B6",
    },
    {
      title: "Our Vision",
      icon: Eye,
      text: "To become India's leading HR consulting and screening solutions provider, recognized for our integrity, accuracy, and transformative impact on workforce management.",
      accent: "#3B82F6",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0B1F2A] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16 group">
          <div className="h-px w-12 bg-[#2EC4B6] group-hover:w-24 transition-all duration-700" />
          <h2 className="text-white text-3xl font-light tracking-[0.3em] uppercase">
            ROHIL <span className="font-bold text-[#2EC4B6]">- Our Purpose</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.map((item, i) => (
            <div key={i} className="relative group p-10 transition-all duration-500">
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <rect
                  x="0" y="0" width="100%" height="100%"
                  fill="none"
                  stroke={item.accent}
                  strokeWidth="2"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  className="transition-all duration-[2000ms] ease-in-out group-hover:stroke-dashoffset-0 opacity-20 group-hover:opacity-100"
                />
              </svg>

              
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#2EC4B6] -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
              {/* <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#2EC4B6] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" /> */}

              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#2EC4B6] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <item.icon className="w-12 h-12 text-[#2EC4B6] relative z-10" />
                  </div>
                  <h3 className="text-white text-4xl font-black tracking-tighter uppercase  transform -skew-x-12">
                    {item.title}
                  </h3>
                </div>

                <p className="text-white/60 text-lg leading-relaxed border-l-2 border-white/10 pl-6 group-hover:border-[#2EC4B6] transition-colors duration-500">
                  {item.text}
                </p>

                <div className="mt-8 flex items-center gap-2 text-[#2EC4B6] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Zap size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-widest">Active System</span>
                </div>
              </div>

              
              <div className="absolute inset-0 bg-gradient-to-b from-[#2EC4B6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}