import React from "react";
import { motion } from "framer-motion";
import {
  Laptop2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
} from "lucide-react";

const industries = [
  { 
    title: "IT & Technology", 
    desc: "Specialized tech talent acquisition and comprehensive background verification for the digital era.", 
    icon: Laptop2 
  },
  { 
    title: "Manufacturing", 
    desc: "Ensuring workforce compliance and safety through rigorous screening and industrial staffing solutions.", 
    icon: Factory 
  },
  { 
    title: "Healthcare", 
    desc: "Vetted medical professionals and administrative staff recruitment with zero-compromise verification.", 
    icon: HeartPulse 
  },
  { 
    title: "Banking & Finance", 
    desc: "High-security financial sector screening and expert staffing for banking institutions.", 
    icon: Landmark 
  },
  { 
    title: "Retail & E-commerce", 
    desc: "Scaling retail teams quickly with reliable staffing and rapid background checks.", 
    icon: ShoppingCart 
  },
  { 
    title: "Education", 
    desc: "Academic and leadership recruitment for educational institutions with thorough credential checks.", 
    icon: GraduationCap 
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-[#0B1F2A] py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2EC4B6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#2EC4B6] font-bold tracking-[0.2em] uppercase text-sm"
          >
            Sectors We Empower
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
            Industries <span className="text-[#2EC4B6]">We Serve</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#2EC4B6] mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From tech giants to healthcare providers, our intelligent HR solutions 
            drive growth across India's most critical sectors.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <div 
              key={i} 
              className="group h-72 w-full [perspective:1200px]"
            >
              <div 
                className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:transform-[rotateY(180deg)]"
              >
                
                <div 
                  className="absolute inset-0 bg-[#0F2E3C] border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-8 shadow-2xl [backface-visibility:hidden]"
                >
                  <div className="w-24 h-24 rounded-3xl bg-[#0B1F2A] flex items-center justify-center text-[#2EC4B6] mb-6 border border-[#2EC4B6]/20 shadow-[0_0_30px_rgba(46,196,182,0.1)] group-hover:shadow-[#2EC4B6]/20 transition-all duration-500">
                    <item.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center group-hover:text-[#2EC4B6] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* BACK SIDE */}
                <div 
                  className="absolute inset-0 bg-[#2EC4B6] rounded-[2.5rem] flex flex-col items-center justify-center text-center p-10 shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]"
                >
                  <div className="bg-[#0B1F2A]/10 p-3 rounded-full mb-4">
                     <item.icon size={32} className="text-[#0B1F2A]" />
                  </div>
                  <p className="text-[#0B1F2A] font-bold text-lg leading-tight mb-4">
                    {item.desc}
                  </p>
                  <div className="text-[#0B1F2A]/70 text-xs font-black uppercase tracking-widest border-b border-[#0B1F2A]/20 pb-1">
                    Rohil Solutions
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden overflow-hidden py-6">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-6"
          >
            {[...industries, ...industries].map((item, i) => (
              <div 
                key={i} 
                className="min-w-[280px] bg-[#0F2E3C] border border-white/10 rounded-3xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#0B1F2A] rounded-2xl flex items-center justify-center text-[#2EC4B6] mx-auto mb-4 border border-[#2EC4B6]/10">
                   <item.icon size={32} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;